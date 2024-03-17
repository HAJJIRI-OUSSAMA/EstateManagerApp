import { useState } from "react";
import { userLogin, } from "../services/login.services";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleForm(e) {
        //pour eviter l'envoi du formulaire
        e.preventDefault();
        const user = { "email": email, "password": password };
        const rep = await userLogin(user);
        const token = rep.data;
        //stocke de token dans navigateur (using LOCAL STORAGE)
        localStorage.setItem("jwtToken", token)
        window.location="/properties"
    }

    return (
        <>
            <br />
            <br />
            <form onSubmit={e => handleForm(e)}>
                <div className="form-group">
                    <label >Email :</label>
                    <input className="form-control" type="email" onChange={e => setEmail(e.target.value)} />
                </div>


                <div className="form-group">
                    <label >Mot de passe :</label>
                    <input className="form-control" type="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <br /><br />

                <input className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"  type="submit" />
                <input className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="reset" />
            </form >
        </>
    );
}