import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
// import { auth } from './FireBase';
import Signout from './Signout';
import Page from './Page';


function Routing() {
  

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />}/>
          <Route path='/page' element={<Page />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<Signout />} />

        </Routes>
      </div>
    </>
  );
}

export default Routing;
