/* eslint-disable react/jsx-no-target-blank */
import React, {Component} from 'react'
import SimpleReactLightbox from "simple-react-lightbox"

import Galerie from './Galerie';
import Twitch from "./Twitch";
import Order from "./Order";

class MyContent extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            toggleGalerie: false
        })
        this.GalerieOn = this.GalerieOn.bind(this);
        this.GalerieOff = this.GalerieOff.bind(this);
    }

    GalerieOn(e){
        e.preventDefault()
        this.setState({
            toggleGalerie: true
        })
    }

    GalerieOff(e){
        e.preventDefault()
        this.setState({
            toggleGalerie: false
        })
    }
    render() {
        return (
            <>

                {!this.state.toggleGalerie ? <> {/* Les 3 menus */}
                    <Twitch/>
                    {/* SimpleReactLightbox est une librairie pour créer une lightbox automatiquement (Il faut ajouter SRLWrapper autour de nos images) */}
                    <div className={'menu_format_MyContent  myRounded'}>
                        <div className={'text-center'}>
                            <a style={{textDecoration: 'none', color: '#E54EE8'}} className='hoverText' href={"#"} onClick={this.GalerieOn}>Galerie</a>
                        </div>
                        <div className="scrollBarVerticalSiPlusieursMenu">
                            <SimpleReactLightbox>
                                <Galerie images={this.props.images}/>
                            </SimpleReactLightbox>
                        </div>
                    </div>
                    <Order/>


                </> :


                    // Galerie en grand
                    <div className=' myRounded'>
                        <div className='text-center' style={{fontSize: '40px'}}>
                            <a style={{textDecoration: 'none', color: '#E54EE8'}} className='hoverText' href={"#"} onClick={this.GalerieOff}> Retour aux menus</a>
                        </div>
                        <div className="scrollBarVertical myRounded">
                            <SimpleReactLightbox>
                                <Galerie images={this.props.images}/>
                            </SimpleReactLightbox>
                        </div>
                    </div>}
            </>
        )
    }
}

export default MyContent