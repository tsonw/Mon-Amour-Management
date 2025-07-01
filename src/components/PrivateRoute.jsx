import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../scripts/onAuthStateChanged";

function PrivateRoute({ children }) {
    const { user, loading } = useAuth();
    console.log('PrivateRoute user:', user, 'loading:', loading);
    
    if (loading) return <div>Loading...</div>;

    if (!user) return <Navigate to="/" replace />;

    return children;
}

export default PrivateRoute;