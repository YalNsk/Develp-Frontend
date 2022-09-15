import React from "react";
import Nav from "../../components/nav/nav";
import {NavLink } from "react-router-dom";
import ambiance from "../../assets/img/image_ambiance.jpg"


const Accueil = () => {
    return (
        <div>
            <Nav />
            <h1>Accueil</h1>
            <div className="accueil">
                <div className="buttonsAccueil">
                    <button className="buttonA">
                        <NavLink className="link" to="/login">Connexion</NavLink>
                    </button>
                        <button className="buttonB">
                            <NavLink className="link" to="/register">Inscription</NavLink>
                        </button>
                </div>
                <div className="ambiance">
                    <h2>Develp ... <br/> La solidarité du code</h2>
                    <img src={ambiance}></img>
                </div>
                
            </div>
            
        </div>
    )

};


export default Accueil;