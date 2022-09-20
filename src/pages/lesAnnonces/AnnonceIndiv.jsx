import React from "react";
import Nav from "../../components/nav/nav";
import axios from "axios";


const AnnonceIndiv = ({titre, message, techno, budget, illu, senderiD, _id}) => {

    const url = "http://localhost:8080/api/posts/${_id}"
    

    return (
        <div>
            <Nav />
            <h1> {titre} </h1>
        </div>
    )

};


export default 
AnnonceIndiv;