import axios from "axios";
import React, { useEffect } from "react";
import Card from "../../components/card/Card";
import Nav from "../../components/nav/nav";
import { useState } from "react";
import {NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Annonces = () => {

    const [annonces, setannonces] = useState([]); 
    const url = "http://localhost:8080/api/posts"

    const isConnected = useSelector(state => state.auth.isConnected)

    useEffect(() => {
        axios.get(url).then((res) => {console.log(res); setannonces(res.data.posts)});
    }, []);

    return (
        <div>
            <Nav />
            <h1>Toutes les annonces</h1>
            <ul className="toutesLesAnnonces">
                {
                    annonces.map((element, index) => (
                        <Card key={index} element={element}/>
                    ))
                }
                
            </ul>
            
                    <button className="buttonC">
                    <NavLink className="link" to="/addpost">Ajouter une annonce</NavLink>
                    </button>
    
        </div>
    )

};


export default Annonces;