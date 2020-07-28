import React, {Component} from "react";
import {TwitchChat, TwitchEmbed, TwitchPlayer} from 'react-twitch-embed';

class EmbebTwitch extends Component{
    render(){
        return (
            <div style={{width: '100%', height:'100%'}}>
                <TwitchEmbed
                    channel={process.env.REACT_APP_IMNOTLUW_TWITCH_USERNAME}
                    width='100%'
                    height='86%'
                    onVideoPause={() => console.log(':(')}
                />
            </div>
        )
    }

}

export default EmbebTwitch


