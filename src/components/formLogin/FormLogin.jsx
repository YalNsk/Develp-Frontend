import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Formlogin = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
            <label htmlFor="mail">Email : </label>
            <input
            id="mail"
            type="mail"
            {...register("mail", { required: true })}
            />
        </div>
        <div className="inputs">
            <label htmlFor="password">Mot de passe : </label>
            <input id="password" type="password" {...register("password", {required: true})} />
        </div>

        <button type="submit" >
            Se connecter
        </button>
        <Link className="link" to = "/register">Vous n'avez pas de compte ? Inscrivez-vous</Link>
        </form>
    );
    };

    export default Formlogin;
