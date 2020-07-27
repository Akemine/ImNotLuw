import React, {Component} from "react";
import { TwitchEmbed} from 'react-twitch-embed';

class EmbebTwitch extends Component{
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

export default EmbebTwitch


