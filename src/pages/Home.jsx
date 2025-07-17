import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../scripts/auth-signin';
import { Link } from 'react-router-dom';

export default function Home() {
    function handleClick() {
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
        <div>
            <br />
            <h1>Trang chủ nèee 🏠</h1>
            <p>Chào mừng bạn đến với Mon Amour 💖</p>
            <p>Hãy cùng khám phá những điều thú vị nhé!</p>
            <p>Chúc bạn có một ngày tuyệt vời!</p>
            <Link to="/about"> About</Link>
            <br />
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}