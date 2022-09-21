import React from "react";
import Nav from "../../components/nav/nav";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Profil = ({pseudo, firstname, lastname}) => {

    const id  = useSelector(state => state.auth.userId);
    const url = `http://localhost:8080/api/user/${id}`
    const [user, setuser] = useState([]); 

    useEffect(() => {
        axios.get(url).then((res) => {console.log(res); setuser(res.data)});
    }, [url]);

    return (
        <div>
                <Nav />
                <div>
                    <div className="profil">
                        <h1> {user.pseudo} </h1>
                        <p>{user.firstname} </p>
                        <p>{user.lastname}</p>
                </div>
            </div>
        </div>
    )

};


export default Profil;