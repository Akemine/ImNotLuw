import React, { Component } from 'react';
import './App.css';
import { MyNavbar } from './components/navbar/MyNavbar';
import MyFooter from './components/footer/MyFooter';
import apiTwitch from './conf/api.twitch';
import idTwitch from './conf/id.twitch';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import MyContent from './components/content/MyContent';
import Loading from './components/utils/Loading';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      images: [],
      twitch: null,
      is_live: false,
      authorization: '',
      loaded: false,
      loadedLive: false
    }
  }

  getDataFromTwitch(){
      idTwitch.post('/oauth2/token?client_id='+process.env.REACT_APP_IMNOTLUW_TWITCH_CLIENT_ID+'&client_secret='+process.env.REACT_APP_IMNOTLUW_TWITCH_SECRET_CODE+'&grant_type=refresh_token&refresh_token='+process.env.REACT_APP_IMNOTLUW_TWITCH_REFRESH_TOKEN)
      .then( response => {this.setState({ authorization: response.data.access_token })
        apiTwitch.get('/helix/search/channels?query=Sixquatre&first=1', {
          headers: {
            Authorization: 'Bearer ' + this.state.authorization
          }})
          .then( response => {this.setState({ twitch: response.data })
            if(this.state.twitch.data[0].is_live === true){
              this.setState({
                is_live: true
              })
            }
            this.setState({
              loadedLive: true
            })
      })
          .catch( err => console.log(err));
    })
      .catch( err => console.log(err));
  }

  getImageFromNode(){
    axios.get('http://localhost:5000/images', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(response => {this.setState({
      images: response,
      loaded: true
    })
  })
  .catch( err => console.log(err));
  }

  componentDidMount() {
    this.getDataFromTwitch()
    this.getImageFromNode()
  }

  

  render() {
    
  return (
    
    <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column', height:'100vh'}} className="container">
      
        {this.state.loadedLive ? (
            <>
                  <MyNavbar is_live = {this.state.is_live}></MyNavbar>

                        <div className="App-content myRounded mt-3 mb-3">
                                    {this.state.loaded ? (
                                      <MyContent images = {this.state.images}></MyContent>
                                    ) : (
                                      <Loading/>
                                    )}   
                        </div>
                  <MyFooter is_live = {this.state.is_live} ></MyFooter>
            </>
        ) : (

                        <Loading/>

        )}

     

    </div>
    
    );
  }
}

export default App;
