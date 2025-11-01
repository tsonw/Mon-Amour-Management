import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import emailjs from 'emailjs-com';
import "../styles/components-styles/Request.css";

import LogoMA from "../assets/logoMonAmour.png";
import backgroundLogin from "../assets/img_Login.jpg"

export default function Request() {

    useEffect(() => {
        emailjs.init("PB_cWyXI-ueycJGVU"); 
    }, []);

    const navigate = useNavigate();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(username);
        console.log(password);
        if ((password.length < 8 || !/\d/.test(password)) && !(username.includes("@"))) {
            alert("The password must be at least 8 characters long and contain at least one number./nThe username must be a valid email address containing @.");
        } else {
            emailjs
            .sendForm("service_t2vdo2e", "template_ki09zag", event.target)
            .then(
                function () {
                    alert("Thanks! We’ve received your request and will get back to you soon");
                    event.target.reset();
                    navigate("/");
                },
                function (error) {
                    alert("Error: " + JSON.stringify(error));
                }
            );
        }    
    }

    return (
        <>
            <div className="request">
                <form className="request-form" onSubmit={handleSubmit}>
                    <div className="enter-zone-request">
                        <img src={LogoMA} alt="logoMonAmour"/>
                        <div className="request-box">
                            <h1>Registration Form</h1>
                            <div className="input-box">
                                <input type="text" className="input-feild-request" id="username" name="username" onChange={(e) => setUsername(e.target.value)} required/>
                                <label className="label-request" >Username</label>
                            </div>
                            <div className="input-box">
                                <input type="password" className="input-feild-request" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>    
                                <label className="label-request">Password</label>
                            </div>
                            <p>Your password needs <br/> 8+ characters and at least 1 number</p>
                            <button type="submit" id="send-button">Send</button>
                        </div>
                        <p>Already have an account ?</p><br/>
                        <Link to="/">Login here</Link>
                    </div>
                    <div className="image-zone-request">
                        <img src={backgroundLogin} alt="logoMonAmour" draggable="false" />
                    </div>
                </form>
            </div>
        </>
    );
}