import { NavLink } from "react-router-dom";

const Card = ({element}) => {
    return (
        <li className="card">
            <img src={element.illu} alt="code" />
            <div className="containerTxt">
                <h3 className="nom">{element.titre}</h3>
                <h5>{element.techno}</h5>
                <h5>{element.budget}€</h5>
                <h5 className="pseudo">{element.pseudo}</h5>
                <div className="descr"> <p className="descrText">{element.message}</p></div>
            </div>
            <button className="plus"> <NavLink to="/">Voir plus</NavLink> </button>
            
        </li>
        );
    };
    
    export default Card;