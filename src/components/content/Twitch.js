import React, { Component } from 'react'

class Twitch extends Component{

    render(){
        return <div className="myRounded menu_format_MyContent">
                <div className="text-center hoverText" style={{color: '#E54EE8'}}>Twitch</div>
            <div className='myRounded' style={{ width: '100%', height: '90%'}}>
                    <p style={{fontSize: '25px', paddingLeft: '5%'}}>
                        Eh salut toi, oui TOI !

                        Tu t'es perdu ici ? Super, prends un siège et installe toi !<br/>

                        Tout d'abord, moi c'est Luw, ou plutôt pas Luw.<br/>

                        <br/>J'aime jouer à LoL, dessiner et faire des reacts de merde sur le Twitch game parce que c'est sympa et ça rapproche.

                        Et enfin... Euh... Voilà.<br/>

                        <br/>PS : En vrai, j'suis pas polie aussi, mais ça on s'en fiche.
                    </p>
            </div>
        </div>
    }

}

export default Twitch