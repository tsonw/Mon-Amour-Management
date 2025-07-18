import React from "react";
import "../styles/components-styles/LoginBox.css"; 
import logo from "../assets/logoMonAmour.png"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { mySignInWithEmailAndPassword } from '../scripts/auth-signin.js';

export default function LoginBox() {
    const navigate = useNavigate();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        if (/.+@.+/.test(username)) {
            const isLoginSuccessful = await mySignInWithEmailAndPassword(username, password);
            if (isLoginSuccessful) {
                navigate("/home");
            }
        } else {
            alert("Please enter a username without '@' character.");
        }
    }
    return (
        <>
            <div className="login">
                <form onSubmit={handleSubmit} className="login-form">
                    <img src={logo} alt="logoMonAmour"/>
                    <div className="login-box">
                        <div className="input-box">
                            <input type="text" className="input-feild" id="username" name="username" onChange={(e) => setUsername(e.target.value)} required/>
                            <label className="label">Username</label>
                        </div>
                        <div className="input-box">
                            <input type="password" className="input-feild" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>    
                            <label className="label">Password</label>
                        </div>
                        <button type="submit" id="login-button">Login</button>
                    </div>
                    <p>Don't have an account ?</p><br/>
                    <Link to="/Request">Request to create account here</Link>
                </form>
            </div>
        </>
    );
}