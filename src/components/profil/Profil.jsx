import avatar from "../../assets/img/avatar.jpg"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { logOut } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Profil = () => {

    const id  = useSelector(state => state.auth.userId);
    const url = `http://localhost:8080/api/user/${id}`
    const [user, setuser] = useState([]); 

    useEffect(() => {
        axios.get(url).then((res) => {console.log(res); setuser(res.data)});
    }, [url]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOut = () => {
        console.log("deconnexion...");
        dispatch(logOut());
        navigate('/');
    }

return (
<div className="profil">
    <img src={avatar} alt="" />
    <h1> {user.pseudo} </h1>
    <p>{user.firstname} </p>
    <p>{user.lastname}</p>
    <button onClick={handleLogOut}>Se déconnecter</button>
</div>
)};

export default Profil;


