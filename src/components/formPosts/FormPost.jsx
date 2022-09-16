import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const FormPost = () => {

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();


    const navigate = useNavigate();

    const userId = useSelector(state => state.auth.userId);


    

    const [msgError, setMsgError] = useState("");

    const envoyer = (data) => {
        console.log(data);
        data.senderiD = userId;
        axios.post("http://localhost:8080/api/posts", data)
            .then(response => {navigate("/les-annonces")})
            .catch(err => {setMsgError("Vous n'avez pas rempli correctement le formulaire"); console.log(err);})
    };

    return (
        <form className="formPost" onSubmit={handleSubmit(envoyer)}>
            <div className="inputs">
                <label htmlFor="message">Votre message : </label>
                <textarea className="message" cols="50" rows="15" 
                {...register("message")}/>
                <p className="précision">Soyez le plus précis possible</p>
            </div>
            <div className="inputs">
        <label htmlFor="country">Mon site est codé en : </label>
            <select name="technoUtilisees" id="techno" className="selection"{...register("techno")}>
                <option className="option" value="">
                    Choisissez...
                </option>
                <option value="Python">Python</option>
                <option value="JavaScript">JavaScript</option>
                <option value="C">C</option>
                <option value="C#">C#</option>
                <option value="Ruby">Ruby</option>
                <option value="PHP">PHP</option>
                <option value="Objective-C">"Objective-C</option>
                <option value="Autre">Autre</option>
            </select>
            <div className="inputs">
                <label htmlFor="budget">Mon budget est de (en euros) : </label>
                <input type="text" 
                {...register("budget")}/>
            </div>
            <div className="inputs">
                <label htmlFor="illu">Eventuelle illustration du code : </label>
                <input type="file" 
                {...register("illu")}/>
            </div>
            <div>{msgError}</div>
        <button type="submit">Envoyez l'annonce</button>

        
        </div>
        </form>
        
    )
}

export default FormPost;