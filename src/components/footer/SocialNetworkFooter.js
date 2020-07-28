import React, {Component} from "react";

class SocialNetworkFooter extends Component{
    render(){
        return (
            <>
            <div style={{width: '100%', height:'100%'}}>
                <span style={{width:'20%'}} className="myRounded d-flex bg-secondary_mine justify-content-around ml-4 mb-4 mt-4">

                        <a style={{width:'inherit' , display:'flex', alignSelf:'center'}} target="_blank" href="https://www.instagram.com/imnotluw/?hl=fr" alt="instagram"><img  style={{width:'70%'}} src={process.env.PUBLIC_URL + '/images/instagram.svg'} alt="instagram" /> </a>

                        <a style={{width:'inherit', display:'flex', alignSelf:'center'}} target="_blank" href="https://twitter.com/imnotluw?lang=fr" alt="twitter"><img style={{width:'70%'}} src={process.env.PUBLIC_URL + '/images/twitter.svg'} alt="twitter" /></a>

                        <a style={{width:'inherit' , display:'flex', alignSelf:'center'}} target="_blank" href="https://www.youtube.com/channel/UCvuAV09QHtR25RBFxX2Wkow" alt="youtube"><img  style={{width:'70%'}} src={process.env.PUBLIC_URL + '/images/youtube.svg'} alt="youtube" /></a>

                        <a style={{width:'inherit' , display:'flex', alignSelf:'center'}} target="_blank" href="https://www.twitch.tv/imnotluw" alt="twitch"><img  style={{width:'70%'}} src={process.env.PUBLIC_URL + '/images/twitch.svg'} alt="twitch" />  </a>

                        <a style={{width:'inherit' , display:'flex', alignSelf:'center'}} target="_blank" href="https://discord.gg/237fEW" alt="discord"><img  style={{width:'70%'}} src={process.env.PUBLIC_URL + '/images/discord.svg'} alt="discord" /> </a>
                </span>
            </div>
                </>
        )
    }

}

export default SocialNetworkFooter


