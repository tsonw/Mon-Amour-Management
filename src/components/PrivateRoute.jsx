import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../scripts/onAuthStateChanged";

import "../styles/components-styles/loading.css";

import logo from "../assets/iconMA.png"

function PrivateRoute({ children }) {
    const { user, loading } = useAuth();
    
    if (loading) {
        return (
            <>
                <div className="main-loading">
                    <div className="loading-box">
                        <img className="loading-img" src={logo} alt="icon" draggable="false" />
                    </div>
                </div>
            </>
        );
    }

    // Kiểm tra user đã đăng nhập hay chưa nếu chưa thì đưa về trang Login
    if (!user) return <Navigate to="/" replace />;

    return children;
}

export default PrivateRoute;