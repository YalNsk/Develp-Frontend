const Card = ({element}) => {
    return (
        <li className="card">
            <img src={element.img} alt="code" />
            <div className="containerTxt">
                <h3 className="nom">{element.titre}</h3>
                <h5>{element.techno}</h5>
                <h5>{element.budget}€</h5>
                <h5 className="pseudo">{element.pseudo}</h5>
                <p className="descr">{element.message}</p>
            </div>
            <button className="plus">Voir plus</button>
            
        </li>
        );
    };
    
    export default Card;