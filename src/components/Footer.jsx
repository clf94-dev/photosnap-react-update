import React from 'react'
import { Grid} from '@mui/material'
import {NavLink} from 'react-router-dom';

import Logo from './../images/shared/desktop/logo copy.svg'
import { Button } from './Button';
import './styles/button.css'
import ArrowL from './../images/shared/desktop/arrow copy.svg'

function Footer() {
    return (
        <div>
            <Grid container direction='row' className='footer-cont'>
                <Grid item direction='column' md={3} xs={12}>
                <img loading="lazy" src={Logo} alt="logo"/> 

                    <Grid direction='row' className='social-row'>
                        <i className='fab fa-facebook faceb fa-gradient'></i>
                        <i className='fab fa-youtube yout'></i>
                        <i className='fab fa-twitter twitt'></i>
                        <i className='fab fa-pinterest pint'></i>
                        <i className='fab fa-instagram instag'></i>
                    </Grid>
                </Grid>
                <Grid item direction='column' md={3} xs={12} className='footer-links'>
                    <NavLink to='/'  className='single-link'>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to='/stories' className='single-link'>
                        <p>Stories</p>
                    </NavLink>
                    <NavLink to='/features' className='single-link'>
                        <p>Features</p>
                    </NavLink>
                    <NavLink to='/pricing' className='single-link'>
                        <p>Pricing</p>
                    </NavLink>

                </Grid>
                <Grid item direction='column' md={3} xs={12}></Grid>
                <Grid item direction='column' md={3} xs={12} className='copy-col'>
                    <Button buttonSize='btn--wide' buttonStyle='btn--read'><Grid container direction='row'>
                            <Grid item xs={8}>
                                GET AN INVITE
                            </Grid>
                            <Grid item xs={4}>
                                <img loading="lazy" src={ArrowL} alt="arrow"/>

                            </Grid>
                        </Grid></Button>

                    <p>
                        Copyright 2019. All Rights Reserved</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
