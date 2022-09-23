import React from "react";
import Nav from "../../components/nav/nav";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import connexion from "../../assets/img/connexion.png"
import Profil from "../../components/profil/Profil";

const ProfilPage = ({pseudo, firstname, lastname}) => {

    const isConnected = useSelector(state => state.auth.isConnected);

    return (
        <div>
                <Nav />
                {
                !isConnected && <div className="etreConnecte"> 
                    <p>Vous devez être connecté pour avoir accès à votre profil : <NavLink to='/login'>se connecter</NavLink></p> 
                    <div className="remplissage">
                        <img src={connexion} alt="robot qui dit qu'on doit être connecté" />
                        <a className="attribute" target="blank" href="https://www.freepik.com/free-vector/chat-bot-banner-template-set-future-marketing-innovation_6929246.htm#query=robot&position=8&from_view=search">Image by vectorpouch</a>
                    </div>
                    
                </div>
            }
            {isConnected &&  <div className="profil">
                    <Profil />
            </div>}
        </div>
    )

};


export default ProfilPage;