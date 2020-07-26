import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import React, {Component} from "react";
import { TwitchEmbed} from 'react-twitch-embed';

class embebTwitch extends Component{
    render(){
        return (
            <>
                <TwitchEmbed
                    channel={process.env.REACT_APP_IMNOTLUW_TWITCH_USERNAME}
                    theme="dark"
                    onVideoPause={() => console.log(':(')}

                />
            </>
        )
    }

}

export default embebTwitch


