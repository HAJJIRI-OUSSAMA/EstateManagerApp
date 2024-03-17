import { useState } from "react";
import { signup } from "../services/login.services";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate= useNavigate();



    async function handleForm(e) {
        //pour eviter l'envoi du formulaire
        e.preventDefault();
        const user = {"fName": fName, "lName": lName, "email": email, "password": password };
        await signup(user);
        navigate("/login")
    }

    return (
        <>
            <br />
            <br />
            <form onSubmit={e => handleForm(e)}>

                <div className="form-group">
                    <label >Nom :</label>
                    <input className="form-control" type="text" onChange={e => setLname(e.target.value)} />
                </div>

                <div className="form-group">
                    <label >Prenom :</label>
                    <input className="form-control" type="text" onChange={e => setFname(e.target.value)} />
                </div>

                <div className="form-group">
                    <label >Email :</label>
                    <input className="form-control" type="email" onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label >Mot de passe :</label>
                    <input className="form-control" type="password" onChange={e => setPassword(e.target.value)} />
                </div>

                <br /><br />

                <input type="submit" />
                <input type="reset" />
            </form>
        </>
    );
}