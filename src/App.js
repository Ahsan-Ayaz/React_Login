//import logo from './logo.svg';
import React from 'react';
import './App.scss';
import './css/sb-admin-2.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomScript.js';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginScreen from './components/LoginScreen'
import MainPage from './components/MainPage';
import ContactUs from './components/ContactUs';
import Dashboard from './components/Dashboard';
import Page404 from './components/pages/Page404';


function App() {

  //const isAuthenticated = true; // check if the user is authenticated

  return (
    <Router>
        {/*<Route path="/" element={<LoginScreen />} />*/}
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<MainPage/>}/>
          </Route>
          <Route exact path='/login' element={<LoginScreen />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/page-not-found' element={<Page404 />} />
        </Routes>
        </Router>
  );
}
export default App;
