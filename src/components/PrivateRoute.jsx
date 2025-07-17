import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../scripts/onAuthStateChanged";

function PrivateRoute({ children }) {
    const { user, loading } = useAuth();
    
    if (loading) return <div>Loading...</div>;

    // Kiểm tra user đã đăng nhập hay chưa nếu chưa thì đưa về trang Login
    if (!user) return <Navigate to="/" replace />;

    return children;
}

export default PrivateRoute;