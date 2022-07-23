import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/ >
                    <Route path="/stories" element={<Stories/>}/>
                    <Route path="/features" element={<Features/>} />
                    <Route path="/pricing" element={<Pricing/>} />
                    
                </Routes>
                <Footer/>
  </BrowserRouter>

);


