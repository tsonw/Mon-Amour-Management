import React from "react";
import "../styles/components-styles/LoginBox.css"; 
import logo from "../assets/logoMonAmour.png"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { mySignInWithEmailAndPassword } from '../scripts/auth-signin.js';

import backgroundLogin from "../assets/background_Login.jpg"

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
                    <div className="enter-zone-login">
                        <img src={logo} alt="logoMonAmour"/>
                        <div className="login-box">
                            <div className="input-box">
                                <input type="text" className="input-feild-login" id="username" name="username" onChange={(e) => setUsername(e.target.value)} required/>
                                <label className="label-login">Username</label>
                            </div>
                            <div className="input-box">
                                <input type="password" className="input-feild-login" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>    
                                <label className="label-login">Password</label>
                            </div>
                            <button type="submit" id="login-button">Login</button>
                        </div>
                        <p>Don't have an account ?</p><br/>
                        <Link to="/Request">Request to create account here</Link>
                    </div>
                    <div className="image-zone-login">
                        <img src={backgroundLogin} alt="logoMonAmour" draggable="false" />
                    </div>
                </form>
            </div>
        </>
    );
}