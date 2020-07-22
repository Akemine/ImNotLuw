/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

class MyFooter extends Component {

    displayLiveOnlineOrOffline(is_live){
        if(is_live){
            return <div style={{marginLeft:'8%', marginTop:'2%', marginBottom: '2%'}}><img style={{width:'5%'}} src={process.env.PUBLIC_URL + '/images/twitch_online.svg'} alt="twitch" /><span  style={{marginLeft:'1%'}}>Stream online !</span></div>
        } else{

            return <div style={{marginLeft:'8%', marginTop:'2%', marginBottom: '2%'}}><img style={{width:'5%'}} src={process.env.PUBLIC_URL + '/images/twitch_offline.svg'} alt="twitch" /><span  style={{marginLeft:'1%', color:'black'}}>Stream offline :(</span></div>
        }
    }
    render() {
        
        
        return (
            <footer className="App-footer mb-2">
            <div>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <a style={{textDecoration:'none', color:'#F6EAEA'}} href="test" alt="Contact"><div className="mt-2"> Contact </div></a>
                    <a target="_blank" style={{textDecoration:'none', color:'#F6EAEA'}} href="https://www.twitch.tv/imnotluw" alt="stream"><div className="mt-2"> Mon stream </div></a>
                    <a style={{textDecoration:'none', color:'#F6EAEA'}} href="test" alt="Planning"><div className="mt-2"> Mon Planning </div></a>
                    <a style={{textDecoration:'none', color:'#F6EAEA'}} href="test" alt="Amis_stream"><div className="mt-2"> Mes amis streameurs </div></a>
            </div>       
            <b><a target="_blank" style={{textDecoration:'none', color:'#F6EAEA'}} href="https://www.twitch.tv/imnotluw" alt="stream">{this.displayLiveOnlineOrOffline(this.props.is_live)}</a></b>
        </div>
         </footer>
        )
    }
}

export default MyFooter