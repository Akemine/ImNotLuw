// React
import React, {Component} from 'react';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component
import {MyNavbar} from './components/navbar/MyNavbar';
import MyFooter from './components/footer/MyFooter';
import MyContent from './components/content/MyContent';
import Loading from './components/utils/Loading';

// API
import apiTwitch from './conf/api.twitch';
import idTwitch from './conf/id.twitch';
import axios from 'axios';

// Class App.js
class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [], // tableau des images
            twitch: [], // information venant de l'api twitch
            is_live: false, // boolean du live, on ou off
            authorization: '', // token d'authorization de twitch
            loaded: false, // loader true si la page est prête
            loadedLive: false // loader true si l'api twitch a répondu
        }
    }

    // Api twitch qui va créer un nouveau token Authorization
    // Puis seconde API, à la suite, qui va aller demander
    // Si la personne de la requête est est live ou non.
    getDataFromTwitch() {
        idTwitch
            .post('/oauth2/token?client_id=' + process.env.REACT_APP_IMNOTLUW_TWITCH_CLIENT_ID
                + '&client_secret=' + process.env.REACT_APP_IMNOTLUW_TWITCH_SECRET_CODE
                + '&grant_type=refresh_token'
                + '&refresh_token=' + process.env.REACT_APP_IMNOTLUW_TWITCH_REFRESH_TOKEN)
            .then(response => {
                this.setState({authorization: response.data.access_token})
                apiTwitch
                    .get('/helix/search/channels?query=SixQuatre&first=1', {
                        headers: {
                            Authorization: 'Bearer ' + this.state.authorization
                        }
                    })
                    .then(response => {
                        this.setState({twitch: response.data})
                        if (this.state.twitch.data[0].is_live === true)
                            this.setState({
                                is_live: true // passe à true si le live est online
                            })
                        this.setState({
                            loadedLive: true // l'API twitch a répondu
                        })
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    // Api vers mon serveur NodeJS qui va récolter toutes les images nécessaires à la galerie
    getImageFromNode() {
        axios.get('http://imnotluwstream.com/images', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
            this.setState({
                images: response, // le state images se rempli
                loaded: true // la page est donc prête
            })
        })
            .catch(err => console.log(err));
    }

    // On vient jouer les API après une fois le component App monté
    componentDidMount() {
        this.getDataFromTwitch() // Appel api à twitch qui renvoit si live Off ou On
        this.getImageFromNode() // Appel api à mon serveur nodeJS pour récupérer les images
    }

    // Le rendu de la page App.js
    render() {
        return <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100vh'}}
                    className="container">

            {this.state.loadedLive ? <>
                {/*Component Navbar */}
                <MyNavbar is_live={this.state.is_live}/>

                {/*Component MyContent*/}
                <div className="App-content myRounded">
                    {this.state.loaded ? <MyContent images={this.state.images}/> : <Loading/>}
                </div>

                {/*Component MyFooter*/}
                <MyFooter is_live={this.state.is_live}/>
            </> : <Loading/>}


        </div>;
    }
}

export default App;
