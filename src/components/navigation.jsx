import React from "react";
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../scripts/auth-signin';
import logo from "../assets/logoMonAmour.png"

import "../styles/components-styles/navigation.css";

export default function Navigation() {
    
    function logout() {
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("Logged out successfully");
            window.location.href = '/';
        }).catch((error) => {
            // An error happened.
            console.error("Error:", error);
        });
    }
    
    return (
        <>
            <div className="navigation">
                <a href="/Home" className="nav_Logo_link"><img src={logo} className="nav_Logo" draggable="false" alt="Logo" /></a>
                <div className="function_selector">
                    <div className="main_function">
                        <a className="function_selection" href="/Home">Kiểm kho</a>
                        <a className="function_selection" href="/Home">Sản phẩm</a>
                        <a className="function_selection" href="/Home">Nhân viên</a>
                        <a className="function_selection" href="/Home">Doanh thu</a>
                    </div>
                    <button onClick={logout} className="btn_logout">Logout</button>
                </div>
            </div>
        </>
    );
}