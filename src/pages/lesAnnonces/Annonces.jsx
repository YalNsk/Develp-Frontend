import axios from "axios";
import React, { useEffect } from "react";
import Card from "../../components/card/Card";
import Nav from "../../components/nav/nav";
import { useState } from "react";


const Annonces = () => {

    const [annonces, setannonces] = useState([]); 
    const url = "http://localhost:8080/api/posts"

    useEffect(() => {
        axios.get(url).then((res) => {console.log(res); setannonces(res.data)});
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
            
        </div>
    )

};


export default Annonces;