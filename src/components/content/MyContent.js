/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import SimpleReactLightbox from "simple-react-lightbox"

import Galerie from './Galerie';

class MyContent extends Component {
          
    render() {
        return (   
          <div className="scrollBarVertical pt-3 pb-3"  >
                     {/* SimpleReactLightbox est une librairie pour créer une lightbox automatiquement (Il faut ajouter SRLWrapper autour de nos images) */}
                        <SimpleReactLightbox>
                            <Galerie images={this.props.images} ></Galerie>
                        </SimpleReactLightbox>   
        </div>
        )
    }
}

export default MyContent