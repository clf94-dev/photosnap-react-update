import React from 'react'

import Create from './../images/home/desktop/create-and-share.jpg'
import Stories from './../images/home/desktop/beautiful-stories.jpg'
import Designed from './../images/home/desktop/designed-for-everyone.jpg'

import CreateT from './../images/home/tablet/create-and-share.jpg'
import StoriesT from './../images/home/tablet/beautiful-stories.jpg'
import DesignedT from './../images/home/tablet/designed-for-everyone.jpg'

import CreateM from './../images/home/mobile/create-and-share.jpg'
import StoriesM from './../images/home/mobile/beautiful-stories.jpg'
import DesignedM from './../images/home/mobile/designed-for-everyone.jpg'


import {Grid} from '@mui/material'
import {Button} from './Button'
import './styles/button.css'

import ArrowD from './../images/shared/desktop/arrow.svg'
import ArrowL from './../images/shared/desktop/arrow copy.svg'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function HomeIntroCard(props) {
    const IntroIMGD = [Create, Stories, Designed]
    const IntroIMGT = [CreateT, StoriesT, DesignedT]
    const IntroIMGM = [CreateM, StoriesM, DesignedM]
    const Arrows=[ArrowL, ArrowD];

    return (
        <div>
            <Grid container direction='row' className={props.classes} data-aos='fade-up' data-aos-duration='1500'>
                <Grid item lg={7} sm={5} xs={12} className='img-col'>
                    <img loading="lazy" src={IntroIMGD[props.index]} srcSet={`${IntroIMGM[props.index]} 756w, ${IntroIMGD[props.index]} 1500w, ${IntroIMGT[props.index]} 1280w`} alt=""/>
                </Grid>
                <Grid item lg={5} sm={7} xs={12} className='text-col'>
                    <h2>
                        {props.title}
                    </h2>
                    <p>{props.text}</p>
                 <Button buttonSize='btn--wide' buttonStyle={props.btnStyle} link={props.link}>
                        <Grid container direction='row'>
                            <Grid item xs={8}>
                                {props.btn}
                            </Grid>
                            <Grid item xs={4}>
                                <img loading="lazy" src={Arrows[props.arrow]} alt="arrow"/>

                            </Grid>
                        </Grid>

                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeIntroCard
