import React from 'react';
import {useAuth} from '../contexts/AuthContext';
import {
    Navigate
  } from "react-router-dom";
import Admin from './Admin';

function AdminRoute() {
    const {user} = useAuth();

    if(user === null || user.role !== 'admin'){
        return <Navigate to="/" />;
    }
    else{
        return <Admin/>
    }
    
}

export default AdminRoute;





