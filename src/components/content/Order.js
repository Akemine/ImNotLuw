import React, { Component } from 'react'


class Order extends Component{

    render() {
        return <div className="myRounded menu_format_MyContent" >
            <div className="text-center hoverText" style={{color: '#E54EE8'}}>Commande</div>
            <div className='myRounded' style={{backgroundColor: 'grey', width: '100%', height: '90%'}}>
            <img style={{width:'auto'}} src={process.env.PUBLIC_URL + '/images/planning_luw.png'} alt="planning_de_stream" />
            </div>
        </div>
    }
}

export default Order