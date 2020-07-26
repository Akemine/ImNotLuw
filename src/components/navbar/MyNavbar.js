/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

export class MyNavbar extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault()
    }

    displayLiveOnlineOrOffline(is_live){
        if(is_live){

            return <img style={{width:'10%', display:'flex'}} src={process.env.PUBLIC_URL + '/images/luwonline.png'} alt="luwImage" />
        } else{

            return <img style={{width:'8%', display:'flex', borderRadius: '70px'}} className="" src={process.env.PUBLIC_URL + '/images/luwoffline.png'} alt="luwImage" />
        }
    }

    render() {
        return (
        <header className="App-header mt-2">
                <div className="d-flex justify-content-between">
                    
                    <span style={{width:'20%'}} className="myRounded bg-secondary_mine d-flex justify-content-around ml-4 mb-4 mt-4"> 
                         
                        <a style={{width:'inherit', display:'flex', alignSelf:'center', justifyContent: 'center'}} target="_blank" href="https://twitter.com/imnotluw?lang=fr" alt="twitter"><img style={{width:'70%'}} src={process.env.PUBLIC_URL + '/images/twitter.svg'} alt="twitter" /></a>
                        
                        <a style={{width:'inherit' , display:'flex', alignSelf:'center'}} target="_blank" href="https://www.youtube.com/channel/UCvuAV09QHtR25RBFxX2Wkow" alt="youtube"><img  style={{width:'70%'}} src={process.env.PUBLIC_URL + '/images/youtube.svg'} alt="youtube" /></a>
                         
                        <a style={{width:'inherit' , display:'flex', alignSelf:'center'}} target="_blank" href="https://www.twitch.tv/imnotluw" alt="twitch"><img  style={{width:'70%'}} src={process.env.PUBLIC_URL + '/images/twitch.svg'} alt="twitch" />  </a>
                        
                        <a style={{width:'inherit' , display:'flex', alignSelf:'center'}} target="_blank" href="https://discord.gg/237fEW" alt="discord"><img  style={{width:'70%'}} src={process.env.PUBLIC_URL + '/images/discord.svg'} alt="discord" /> </a>
                        
                    </span>
         
                    <h1 style={{display: 'flex', alignSelf:'center'}}>ImNotLuw </h1>
                    {this.displayLiveOnlineOrOffline(this.props.is_live)}
            </div>
        </header>

        )
    }
}


export default MyNavbar