
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, isLoading, admin} = useAuth();
    let location = useLocation();
    if(isLoading){
        return 
    }
    if(user.email && admin){
      return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
    
};

export default AdminRoute;