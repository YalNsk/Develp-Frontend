import React from "react";
import Nav from "../../components/nav/nav";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PageAnnonceIndiv = ({titre, message, techno, budget, illu, senderiD, _id}) => {

    const { id } = useParams();
    const url = `http://localhost:8080/api/posts/${id}`
    const [annonce, setannonce] = useState([]); 

    useEffect(() => {
        axios.get(url).then((res) => {console.log(res); setannonce(res.data)});
    }, []);

    return (
        <div>
                <Nav />
            <div>
                <div className="annonce">
                    <h1> {annonce.titre} </h1>
                    <p>{annonce.message} </p>
                    <div>{annonce.illu}</div>
                </div>
                <div className="infos">
                    <p>{annonce.budget}</p>
                    <p>{annonce.techno}</p>
                </div>
            <button></button>
            </div>
        </div>
    )

};


export default PageAnnonceIndiv;