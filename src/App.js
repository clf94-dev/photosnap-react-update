import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './components/styles/App.css'

export default function App() {
    return (
     
    <React.Fragment>
                <Navbar/>
                <Routes>
                    <Route path="" element={<Home/>}/ >
                    <Route path="/stories" element={<Stories/>}/>
                    <Route path="/features" element={<Features/>} />
                    <Route path="/pricing" element={<Pricing/>} />
                    
                </Routes>
                <Footer/>
                </React.Fragment>
      
   
    )
}


