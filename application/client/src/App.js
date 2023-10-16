import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header  from './Components/Header';
import ToDo from './Components/ToDo';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import Card from './Components/Card';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';



function App() {

  
  return (
    <Router>
      <Header />

      <Routes> 
                <Route exact path='/' element={<Home />}></Route> 
                <Route exact path='/login' element={<Login />}></Route> 
                <Route exact path='/signup' element={< Signup />}></Route> 
        </Routes>
    </Router>
  );
}

export default App;
