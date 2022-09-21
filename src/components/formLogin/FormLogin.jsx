import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/authAction";
import { useEffect } from "react";

const Formlogin = () => {
    const {
        handleSubmit,
        register,
        reset,
    } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isConnected = useSelector((state) => {
        return state.auth.isConnected;
    });

    useEffect(() => {
        console.log(isConnected);
        if (isConnected) {
        navigate(-1);
        }
    }, [isConnected]);


    const onSubmit = (data) => {
        dispatch(loginUser(data));
        console.log(data);
        reset();
    };

    return (
        <form className="form2" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
            <label htmlFor="credential">Email : </label>
            <input
            id="email"
            type="email"
            {...register("credential", { required: true })}
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
