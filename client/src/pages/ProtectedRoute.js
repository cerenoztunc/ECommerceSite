import React from 'react';
import {useAuth} from '../contexts/AuthContext';
import Profile from '../pages/Profile';
import {
    Navigate
  } from "react-router-dom";

function ProtectedRoute() {
    const {loggedIn} = useAuth();

    if(loggedIn){
      return <Profile/>
     
    }
    else{
      <Navigate to="/" />;
    }
    
}

export default ProtectedRoute;
