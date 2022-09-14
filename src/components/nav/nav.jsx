import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/develp.png";
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {HeartIcon} from '@heroicons/react/24/outline'
import {EnvelopeIcon} from '@heroicons/react/24/outline'
import {UserIcon} from '@heroicons/react/24/outline'

const Nav = () => {
    return (

        <div className="navbar">
            <NavLink className="link" to='/les-annonces'
            >
                <p>Les annonces</p>
            </NavLink>
            <Link to="/">
                <img src={logo}></img>
            </Link>
            <ul className="microNavbar">
                <NavLink className="link" to='resultats-recherches'>
                    <li>
                        {/* {MagnifyingGlassIcon} */} Recherches
                    </li>
                </NavLink>
                <NavLink className="link" to="messagerie">
                    <li>
                        {/* {EnvelopeIcon} */} Messagerie
                    </li>
                </NavLink>
                <NavLink className="link">
                    <li>
                        {/* {HeartIcon} */} Favoris
                    </li>
                </NavLink>
                <NavLink className="link" to='/login'>
                    <li>
                        {/* {UserIcon} */} Profil
                    </li>
                </NavLink>
            </ul>
        </div>




    )
}

export default Nav;