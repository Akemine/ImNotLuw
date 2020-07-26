/* eslint-disable react/jsx-no-target-blank */
import React, {Component} from 'react'
import SimpleReactLightbox from "simple-react-lightbox"

import Galerie from './Galerie/Galerie';
import Twitch from "./Twitch/Twitch";
import Order from "./Order/Order";
import EmbedTwitch from './Twitch/EmbebTwitch'

const backMenu_text = "Retour aux menus"

class MyContent extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            toggleGalerie: false,
            toggleTwitch: false,
            toggleOrder: false
        })
        this.GalerieOn = this.GalerieOn.bind(this);
        this.GalerieOff = this.GalerieOff.bind(this);

        this.TwitchOn = this.TwitchOn.bind(this);
        this.TwitchOff = this.TwitchOff.bind(this);

        this.OrderOn = this.OrderOn.bind(this);
        this.OrderOff = this.OrderOff.bind(this);
    }

    // Affiche le menu galerie au click
    GalerieOn(e){
        e.preventDefault()
        this.setState({
            toggleGalerie: true
        })
    }
    // Retire le menu galerie au click
    GalerieOff(e){
        e.preventDefault()
        this.setState({
            toggleGalerie: false
        })
    }

    // Affiche le menu twitch au click
    TwitchOn(e){
        e.preventDefault()
        this.setState({
            toggleTwitch: true
        })
    }
    // Retire le menu twitch au click
    TwitchOff(e){
        e.preventDefault()
        this.setState({
            toggleTwitch: false
        })
    }

    // Affiche le menu order au click
    OrderOn(e){
        e.preventDefault()
        this.setState({
            toggleOrder: true
        })
    }
    // Retire le menu order au click
    OrderOff(e){
        e.preventDefault()
        this.setState({
            toggleOrder: false
        })
    }



    render() {

        return (
            <>
                {/*Les 3 menus */}
                {!this.state.toggleGalerie && !this.state.toggleTwitch && !this.state.toggleOrder ? <>
                    <div className="myRounded menu_format_MyContent" >
                        <h2 className="text-center hoverText" style={{color: '#E54EE8'}}>
                            <a
                                style={{textDecoration: 'none', color: '#E54EE8', fontSize: '3vw'}}
                                className='hoverText' href={"#"}
                                onClick={this.TwitchOn}>Twitch ({this.props.viewers} viewers)</a>
                        </h2>
                        <Twitch/>
                    </div>
                    {/* SimpleReactLightbox est une librairie pour créer une lightbox automatiquement (Il faut ajouter SRLWrapper autour de nos images) */}
                    <div className={'menu_format_MyContent myRounded'}>
                        <h2 className={'text-center'}>
                            <a
                                style={{textDecoration: 'none', color: '#E54EE8', fontSize: '3vw'}}
                                className='hoverText' href={"#"}
                                onClick={this.GalerieOn}>Galerie
                            </a>
                        </h2>
                        <div className="scrollBarVertical">
                            <SimpleReactLightbox>
                                <Galerie images={this.props.images}/>
                            </SimpleReactLightbox>
                        </div>
                    </div>

                    <div className="myRounded menu_format_MyContent d-flex" style={{flexDirection: "column"}} >
                        <h2 className="text-center hoverText" style={{color: '#E54EE8'}}>
                            <a
                                style={{textDecoration: 'none', color: '#E54EE8', fontSize: '3vw'}}
                                className='hoverText' href={"#"}
                                onClick={this.OrderOn}>Commande
                            </a>
                        </h2>
                        <Order/>
                    </div>


                </> : this.state.toggleGalerie ? <>
                    {/* Galerie en grand*/}
                    <div className=' myRounded'>
                        <div className='text-center' style={{fontSize: '40px'}}>
                            <a
                                style={{textDecoration: 'none', color: '#E54EE8', fontSize: '3vw'}}
                                className='hoverText' href={"#"}
                                onClick={this.GalerieOff}> {backMenu_text}
                            </a>
                        </div>
                        <div className="scrollBarVertical myRounded">
                            <SimpleReactLightbox>
                                <Galerie images={this.props.images}/>
                            </SimpleReactLightbox>
                        </div>
                    </div>

                </> : this.state.toggleTwitch ? <>
                    {/* Twitch en grand*/}
                    <div className=' myRounded d-flex w-100' style={{flexDirection: 'column', alignItems:'center'}}>
                        <div className='text-center ' style={{fontSize: '40px'}}>
                            <a
                                style={{textDecoration: 'none', color: '#E54EE8', fontSize: '3vw'}}
                                className='hoverText' href={"#"}
                                onClick={this.TwitchOff}> {backMenu_text}
                            </a>
                        </div>
                        <EmbedTwitch/>
                    </div>

                </> : this.state.toggleOrder ? <>
                 {/* Order en grand*/}
                <div className=' myRounded'>
                    <div className='text-center' style={{fontSize: '40px'}}>
                        <a
                            style={{textDecoration: 'none', color: '#E54EE8', fontSize: '3vw'}}
                            className='hoverText' href={"#"}
                            onClick={this.OrderOff}> {backMenu_text}
                        </a>
                    </div>
                    <div className="scrollBarVertical myRounded">
                        <SimpleReactLightbox>
                            <Galerie images={this.props.images}/>
                        </SimpleReactLightbox>
                    </div>
                </div>
                    </> :
                    <div>

                    </div>}
            </>
        )
    }
}

export default MyContent