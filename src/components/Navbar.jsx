import React, { useState } from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import Logo from './../images/shared/desktop/logo.svg'

import './styles/App.css'

function Navbar({active}) {
    const [click, setClick] = useState(false);

const handleClick=() =>setClick(!click);
const closeMobileMenu=(  )=> setClick(false);
    return (<div>
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className='navbar-logo' onClick={closeMobileMenu}>
                 
                <img loading="lazy" src={Logo} alt="logo"/>  
                </NavLink>
                <div className="menu-icon" onClick={handleClick}>
                    <i
                        className={click
                        ? 'fas fa-times'
                        : 'fas fa-bars'}></i>

                </div>
                <ul
                    className={click
                    ? 'nav-menu active'
                    : 'nav-menu'}>
                    <li className="nav-item" >
                        <NavLink to='/stories' className='nav-links' onClick={closeMobileMenu} style={{color: active === "stories"? '#5fb4a2' :'#203A4C'}}>Stories</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/features' className='nav-links' onClick={closeMobileMenu} style={{color: active === "features"? '#5fb4a2' :'#203A4C'}}>Features</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/pricing' className='nav-links' onClick={closeMobileMenu} style={{color: active === "pricing"? '#5fb4a2' :'#203A4C'}}>Pricing</NavLink>
                    </li>
                    <li className="nav-item">
                    <button className='mobile-btn'>Get an Invite</button>
                    </li>
                </ul>
                <button className='desktop-btn' >Get an Invite</button>
            </div>
        </nav>
        <Outlet/>
        </div>
    )
}

export default Navbar
