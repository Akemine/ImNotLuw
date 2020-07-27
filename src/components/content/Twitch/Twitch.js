import React, { Component } from 'react'
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';

class Twitch extends Component{

    render(){
        return <div className='myRounded' style={{ width: 'auto', height:'90%', paddingRight:'10%'}}>
                    <div style={{height: '100%', marginBottom:'2px'}}>
                            <TwitchEmbed
                                channel={process.env.REACT_APP_IMNOTLUW_TWITCH_USERNAME}
                                theme="dark"
                                withChat={false}
                                width='100%'
                                height='100%'
                            />
                    </div>
            </div>

    }

}

export default Twitch