/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import Loading from '../utils/Loading'

class MyContent extends Component {

          constructor(props){
                    super(props)

                    this.state = {
                        colors: [],
                        color: ''
                    }
          }

          randomColorGenerator(min, max){
              this.state.colors = ['orange', 'red', 'green', 'brown', 'cyan', 'pink', 'purple', 'black', 'yellow', 'pink', 'cornflowerblue'];
              this.state.color = Math.floor(Math.random() * (max - min + 1) ) + min;
              return this.state.colors[this.state.color]
          }
          
          
    render() {
          
        return (
        
          <div className="myRounded d-flex justify-content-around scrollBarVertical" style={{flexWrap:'wrap'}} >
                     
                     
                     {this.props.images.data.map((myImg, index) => (
                               <div key={index}>
                              <img style={{border: '3px solid ' +  this.randomColorGenerator(0, 10)}} className="imgRounded child" src={process.env.PUBLIC_URL + '/images/oeuvres/' + myImg} alt="luwImage" />
                              </div>
                     )) 
                    }

        </div>
         
        )
    }
}

export default MyContent