
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from '../screen/dashboard';
import Home from '../screen/home';
import Login from '../screen/login';
import Signup from '../screen/signup';


const Approute = () => {
  return (
    <>
    <Router>
        
        
        <Routes> 
            <Route path='home/:id' element={<Home />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='login' element={<Login />} />
            <Route path='/' element={<Signup />} />
        </Routes>
    </Router>
    </>
  )
}

export default Approute