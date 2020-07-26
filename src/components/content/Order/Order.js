import React, { Component } from 'react'


class Order extends Component{

    render() {
        return <div className='myRounded d-flex' style={{ width: 'auto', height: 'auto', flexDirection: 'column', alignItems:'center'}}>
            <img
                 className='img-fluid'
                 style={{width:'auto'}}
                 src={process.env.PUBLIC_URL + '/images/planning_luw.png'}
                 alt="planning_de_stream"
            />
            <div className=' pl-3' style={{fontSize: '2vw'}}>
                <p>
                    Voici la liste de toutes les émotes ainsi que les prix auquels je les fais !
                </p>
            </div>
        </div>

    }
}

export default Order