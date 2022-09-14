import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/develp.png";
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {HeartIcon} from '@heroicons/react/24/outline'
import {EnvelopeIcon} from '@heroicons/react/24/outline'
import {UserIcon} from '@heroicons/react/24/outline'

const Nav = () => {
    return (

        <div>
            <NavLink to='/les-annonces'>
                <p>Les annonces</p>
            </NavLink>
            <Link to="/">
                <img src={logo}></img>
            </Link>
            <ul>
                <NavLink to='resultats-recherches'>
                    <li>
                        {/* {MagnifyingGlassIcon} */} Recherches
                    </li>
                </NavLink>
                <NavLink to="messagerie">
                    <li>
                        {/* {EnvelopeIcon} */} Messagerie
                    </li>
                </NavLink>
                <NavLink>
                    <li>
                        {/* {HeartIcon} */} Favoris
                    </li>
                </NavLink>
                <NavLink to='/login'>
                    <li>
                        {/* {UserIcon} */} Profil
                    </li>
                </NavLink>
            </ul>
        </div>




    )
}

export default Nav;