import React from "react";
import { useSelector } from "react-redux";
import FormPost from "../../components/formPosts/FormPost";
import Nav from "../../components/nav/nav";
import { NavLink } from "react-router-dom";


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
                !isConnected && <div> Vous devez être connecté pour poster une annonce <NavLink to='/login'>se connecter</NavLink></div>
            }

            
        </div>
    )

};


export default NouvelleAnnonce;