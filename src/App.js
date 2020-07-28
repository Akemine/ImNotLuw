// React
import React, {Component} from 'react';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component
import MyNavbar from './components/navbar/MyNavbar';
import MyFooter from './components/footer/MyFooter';
import MyContent from './components/content/MyContent';
import Loading from './components/utils/Loading';

// API
import apiTwitch from './conf/api.twitch';
import idTwitch from './conf/id.twitch';
import axios from 'axios';
import SocialNetworkFooter from "./components/footer/SocialNetworkFooter";


// Class App.js
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: [], // tableau des images
      twitchChannel: [], // information venant de l'api twitch
      twitchStream: [],
      is_live: false, // boolean du live, on ou off
      authorization: '', // token d'authorization de twitch
      viewer_count: 0,
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
              .get('/helix/search/channels?query='+ process.env.REACT_APP_IMNOTLUW_TWITCH_USERNAME +'&first=1', {
                headers: {
                  Authorization: 'Bearer ' + this.state.authorization
                }
              })
              .then(response => {
                this.setState({twitchChannel: response.data})
                if (this.state.twitchChannel.data[0].is_live === true)
                  // apiTwitch.get('/helix/streams?user_login=' + process.env.REACT_APP_IMNOTLUW_TWITCH_USERNAME, {
                  //   headers: {
                  //     Authorization: 'Bearer ' + this.state.authorization
                  //   }
                  // })
                  //     .then(response =>{
                  //       this.setState( {twitchStream: response.data} )
                  //       this.setState({viewer_count: this.state.twitchStream.data[0].viewer_count})
                  //     })
                  //     .catch(err => console.log(err));
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
    axios.get('https://imnotluwstream.com/images', {
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


  // On vient jouer les API une fois le component App monté
  componentDidMount() {
    this.getDataFromTwitch() // Appel api à twitch qui renvoit si live Off ou On
    this.getImageFromNode() // Appel api à mon serveur nodeJS pour récupérer les images

  }

  randomColorGenerator(min, max){

    this.state.colors = ['orange', '#8D5A97', '#B8EBD0', 'cyan', 'pink', 'purple', 'pink'];
    this.state.color = Math.floor(Math.random() * (max - min + 1) ) + min;
    return this.state.colors[this.state.color]

  }


  // Le rendu de la page App.js
  render() {


    return <div style={{flexDirection: 'column', height: '100vh', bottom:'40px'}}
                className="container myDisplay position-relative">

      {this.state.loadedLive ? <>

        {/*Component Navbar */}
        {/*<MyNavbar is_live={this.state.is_live}/>*/}
        <div className='position-relative placementLogo' style={{top: '6%', textAlign: 'center'}}>

          <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              alt="logo"
              className="img-fluid tailleLogo"
          />

        </div>
        {/*Component MyContent*/}
        <div className="App-content myRounded d-flex" style={{border: '4vw '+this.randomColorGenerator(0, 6)+' solid'}}>
          {this.state.loaded ? <MyContent viewers={this.state.viewer_count} images={this.state.images} color={this.state.colors[this.state.color]}/>  : <Loading/>}
        </div>

        <div className='position-relative placementSocialNetwork' style={{bottom:'8%', left:'69%'}}>
          <SocialNetworkFooter/>
        </div>
        {/*Component MyFooter*/}
        {/*<MyFooter is_live={this.state.is_live}/>*/}
      </> : <Loading/>}


    </div>;
  }
}

export default App;