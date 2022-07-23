import React from 'react'
import { Grid } from '@mui/material'
import {IntroData} from './IntroData'

import Features from './../images/features/desktop/hero.jpg'
import Pricing from './../images/pricing/desktop/hero.jpg'

import FeaturesM from './../images/features/mobile/hero.jpg'
import PricingM from './../images/pricing/mobile/hero.jpg'

import FeaturesT from './../images/features/tablet/hero.jpg'
import PricingT from './../images/pricing/tablet/hero.jpg'

import './styles/App.css'


function IntroFeatPric(props) {
    const IntroImgD =[Features, Pricing];
    const IntroImgT =[FeaturesT, PricingT];
    const IntroImgM =[FeaturesM, PricingM];
    return (
        <div>
            <Grid container direction='row' className='feat-pric-intro'>
               
                <Grid item lg={5} sm={7} xs={12} className='text-col'>
                    <h2>
                        {IntroData[props.index].title}
                    </h2>
                    <p>{IntroData[props.index].text}</p>
                    
                </Grid>
                <Grid item lg={7} sm={5} xs={12} className='img-col'>
                    <img loading="lazy" src={IntroImgD[props.index]} srcSet={`${IntroImgM[props.index]} 756w, ${IntroImgD[props.index]} 1500w, ${IntroImgT[props.index]} 1280w`} alt=""/>
                </Grid>
            </Grid>
        </div>
    )
}

export default IntroFeatPric
