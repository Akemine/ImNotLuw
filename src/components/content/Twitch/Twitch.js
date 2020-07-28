import React, { Component } from 'react'
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';

class Twitch extends Component{

    render(){
        return <>
                            {/*<TwitchEmbed*/}
                            {/*    channel={process.env.REACT_APP_IMNOTLUW_TWITCH_USERNAME}*/}
                            {/*    theme="light"*/}
                            {/*    withChat={false}*/}
                            {/*    width='100%'*/}
                            {/*    height='80%'*/}
                            {/*/>*/}

            <TwitchPlayer
                channel={process.env.REACT_APP_IMNOTLUW_TWITCH_USERNAME}
                width='100%'
                height='80%'
            />
            </>

    }

}

export default Twitch