import React from "react";
import Nav from "../../components/nav/nav";
import { NavLink } from "react-router-dom";
import ambiance from "../../assets/img/image_ambiance.png"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "../../components/card/Card";


const Accueil = () => {

    const isConnected = useSelector(state => state.auth.isConnected)

    const [annonces, setannonces] = useState([]);
    const url = "http://localhost:8080/api/posts?offset=0&limit=5"

    useEffect(() => {
        axios.get(url).then((res) => { console.log(res); setannonces(res.data.posts) });
    }, []);



    return (
        <div>
            <Nav />
            <div className="accueil">
                {!isConnected && <div className="buttonsAccueil">
                    <button className="buttonA">
                        <NavLink className="link" to="/login">Connexion</NavLink>
                    </button>
                    <button className="buttonB">
                        <NavLink className="link" to="/register">Inscription</NavLink>
                    </button>
                </div>}

                <div className="ambiance">

                    <div className="texte">
                        <h2>Develp ... <br /> Le débuggeur solidaire</h2>
                        <p>Si vous ête bloqué dans votre code, publiez une annonce ici, vous trouverez sûrement un développeur qui sera ravi de vous aider. </p>
                    </div>

                    <div className="attribute" >
                        <img src={ambiance} alt='developpeur qui a besoin d aide'></img>
                        <a className="attribute" target="blank" href="https://www.freepik.com/free-vector/programmer-graphic-designer-characters-create-website-man-with-laptop-woman-with-tablet-deve_18056329.htm?query=web development">Image by upklyak</a>
                    </div>
                </div>

                <div className="lesAnnonces">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c9b6f2" fillOpacity="1" d="M0,128L30,138.7C60,149,120,171,180,181.3C240,192,300,192,360,176C420,160,480,128,540,128C600,128,660,160,720,197.3C780,235,840,277,900,298.7C960,320,1020,320,1080,314.7C1140,309,1200,299,1260,293.3C1320,288,1380,288,1410,288L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                    <div className="lesAnnonces2">
                        <h2>Les dernières annonces</h2>
                        <ul className="dernieresAnnonces">
                            {
                                annonces.map((element, index) => (
                                    <Card key={index} element={element} />
                                ))
                            }

                        </ul>
                        <button className="buttonC">
                            <NavLink className="link" to="/addpost">Ajouter une annonce</NavLink>
                        </button>
                        <button className="buttonC">
                            <NavLink className="link" to="/les-annonces">Voir toutes les annonces</NavLink>
                        </button>
                    </div>

                </div>
                {! isConnected && <div className="inscrivezVous">
        
                            <p>Vous êtes bloqué dans votre code ? Vous pouvez donner un coup de pouce ?</p>
                        <button className="inscription"><NavLink to="/register">Inscrivez-vous !</NavLink></button>
                    </div> }
                </div>
            

        </div>
    )

};


export default Accueil;