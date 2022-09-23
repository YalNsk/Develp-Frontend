import React from "react";
import { useSelector } from "react-redux";
import FormPost from "../../components/formPosts/FormPost";
import Nav from "../../components/nav/nav";
import { NavLink } from "react-router-dom";
import connexion from "../../assets/img/connexion.png"


const NouvelleAnnonce = () => {

    const isConnected = useSelector(state => state.auth.isConnected);


    return (
        <div>
            <Nav />
            {isConnected && <div>
                <h1>Nouvelle annonce</h1>
                <FormPost />
            </div>}

            {
                !isConnected && <div className="etreConnecte"> 
                    <p>Vous devez être connecté pour poster une annonce : <NavLink to='/login'>se connecter</NavLink></p> 
                    <div className="remplissage">
                        <img src={connexion} alt="robot qui dit qu'on doit être connecté" />
                        <a className="attribute" target="blank" href="https://www.freepik.com/free-vector/chat-bot-banner-template-set-future-marketing-innovation_6929246.htm#query=robot&position=8&from_view=search">Image by vectorpouch</a>
                    </div>
                    
                </div>
            }

            
        </div>
    )

};


export default NouvelleAnnonce;