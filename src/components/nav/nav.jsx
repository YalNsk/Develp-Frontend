import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/develp.png";
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {EnvelopeIcon} from '@heroicons/react/24/outline'
import {UserIcon} from '@heroicons/react/24/outline'
import { useSelector } from "react-redux";

const Nav = () => {

    const isConnected = useSelector(state => state.auth.isConnected)

    return (

        <div className="navbar">
            <NavLink className="link" to='/les-annonces'
            >
                <p>Les annonces</p>
            </NavLink>
            <Link to="/">
                <img src={logo} alt="Develp le débuggeur solidaire"></img>
            </Link>
            <ul className="microNavbar">
                <NavLink className="link" to='/resultats-recherches'>
                    <li>
                        <MagnifyingGlassIcon className="icon" /> Recherches
                    </li>
                </NavLink>
                <NavLink className="link" to="/messagerie">
                    <li>
                        <EnvelopeIcon className="icon" /> Messagerie
                    </li>
                </NavLink>

                {!isConnected && <NavLink className="link" to='/login'>
                    <li>
                        <UserIcon className="icon" /> Connexion
                    </li>
                </NavLink> }
                {isConnected && <NavLink className="link" to='/profil'>
                    <li>
                        <UserIcon className="icon" /> Profil
                    </li>
                </NavLink> }
            </ul>
        </div>




    )
}

export default Nav;
