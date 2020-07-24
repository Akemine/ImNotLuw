/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import { SRLWrapper } from "simple-react-lightbox";
class Galerie extends Component {

          constructor(props){
                    super(props)

                    this.state = {
                        colors: [],
                        color: ''
                    }
          }

          randomColorGenerator(min, max){
              this.state.colors = ['orange', '#8D5A97', '#B8EBD0', '#A4A5AE', 'cyan', 'pink', 'purple', 'black', '#B0C7BD', 'pink', '#907F9F'];
              this.state.color = Math.floor(Math.random() * (max - min + 1) ) + min;
              return this.state.colors[this.state.color]
          }
          
          
    render() {
          
        return (
           // Ce SRLWrapper enrobe les images afin de les ajouter à une galerie intégré à la lightbox 
          <SRLWrapper>
                    <div className="myRounded d-flex justify-content-around" style={{flexWrap:'wrap'}}>
                              {this.props.images.data.map((myImg, index) => (
                                        <div key={index}>
                                        <img style={{padding:'2px', border: '3px solid ' +  this.randomColorGenerator(0, 10)}} className="imgRounded child formalisationTailleImage" src={process.env.PUBLIC_URL + '/images/oeuvres/' + myImg} alt="luwImage" />
                                        </div>
                              )) 
                              }
                    </div>
          </SRLWrapper>
        )
    }
}

export default Galerie