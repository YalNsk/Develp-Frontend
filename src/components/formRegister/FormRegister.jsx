import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/actions/authAction";


const FormRegister = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isConnected = useSelector((state) => {
        return state.auth.isConnected;
        });
        
        useEffect(() => {
            if (isConnected) {
            navigate("/");
            }
        }, [isConnected]);
    


    const onSubmit = (data) => {
        dispatch(registerUser(data));
        console.log(data);
    };

    return (
        <form className="form1" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
            <label htmlFor="email">Email : </label>
            <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            />
        <div className="inputs">
            <label htmlFor="pseudo">Pseudo : </label>
            <input
            id="pseudo"
            type="text"
            {...register("pseudo", { required: true })}
            />
        </div>
        </div>
        <div className="inputs">
            <label htmlFor="firstname">Prénom : </label>
            <input
            id="firstname"
            type="text"
            {...register("firstname", { required: true })}
            />
        </div>
        <div className="inputs">
            <label htmlFor="lastname">Nom : </label>
            <input
            id="lastname"
            type="text"
            {...register("lastname", { required: true })}
            />
        </div>
        <div className="inputs">
            <label htmlFor="password">Mot de passe : </label>
            <input id="password" type="password" {...register("password")} />
        </div>

        <div>
        <label htmlFor="country">Je code en : </label>
            <select
            name="technoUtilisees"
            id="techno"
            className="selection"
            {...register("techno")}
            >
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
        </div>



        <button>Créer un compte</button>

        <p className="aufait">Tous les champs sont obligatoires</p>
        </form>
    );
};

export default FormRegister;
