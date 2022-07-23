import React from 'react'
import  {Mountains,Sunset, Voyage,Architec, World,Corners,King,Nowhere, Rage,Free, Waves,Waters, Milky,Forest,Beauty, Dreams} from './StoriesImg'
import  { MountainsM, SunsetM, VoyageM, ArchitecM, WorldM, CornersM, KingM, NowhereM, RageM, FreeM, WavesM, WatersM, MilkyM, ForestM, BeautyM, DreamsM } from './StoriesImgMob'

import ArrowD from './../images/shared/desktop/arrow.svg'
import ArrowL from './../images/shared/desktop/arrow copy.svg'

import {Grid} from '@mui/material/'
import {Button} from './Button'
import './styles/button.css'

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function HomeStoryCard(props) {
    const HomeStoriesIMGD = [
        Mountains,
        Sunset,
        Voyage,
        Architec,
        World,
        Corners,
        King,
        Nowhere,
        Rage,
        Free,
        Waves,
        Waters,
        Milky,
        Forest,
        Beauty,
        Dreams
    ];
    const HomeStoriesIMGM = [
        MountainsM,
        SunsetM,
        VoyageM,
        ArchitecM,
        WorldM,
        CornersM,
        KingM,
        NowhereM,
        RageM,
        FreeM,
        WavesM,
        WatersM,
        MilkyM,
        ForestM,
        BeautyM,
        DreamsM
    ];
  
    const Arrows = [ArrowL, ArrowD];

    return (

        <Grid item lg={3} md={3} sm={6} xs={12} className='story-cont' >
            <Grid container direction='row' >
                <div className='storyCol'>
                {/* <Grid item xs={12} className='img-cont'> */}
                    <img loading="lazy" src={HomeStoriesIMGD[props.index]}  srcSet={`${HomeStoriesIMGM[props.index]} 756w, ${HomeStoriesIMGD[props.index]} 1500w, ${HomeStoriesIMGD[props.index]} 1280w`} alt={props.alt}/>
                    <div className='text-col'>
                        <h4>{props.date}</h4>
                    <h3>
                        {props.title}
                    </h3>
                    <h4>{props.author}</h4>
                    <hr/>
                    <Button buttonSize='btn--wide' buttonStyle={props.btnStyle} link={props.link}>
                        <Grid container direction='row'>
                            <Grid item xs={9}>
                               READ STORY
                            </Grid>
                            <Grid item xs={3}>
                                <img loading="lazy" src={Arrows[props.arrow]} alt="arrow"/>

                            </Grid>
                        </Grid>

                    </Button>
                    </div>
              {/*   </Grid> */}
                </div>
               {/* <Grid item lg={12} className='text-col'>
                     <h4>{props.date}</h4>
                    <h3>
                        {props.title}
                    </h3>
                    <h4>{props.author}</h4>
                    <hr/>
                    <Button buttonSize='btn--wide' buttonStyle={props.btnStyle} link={props.link}>
                        <Grid container direction='row'>
                            <Grid item xs={8}>
                               READ STORY
                            </Grid>
                            <Grid item xs={4}>
                                <img loading="lazy" src={Arrows[props.arrow]} alt="arrow"/>

                            </Grid>
                        </Grid>

                    </Button> 
                </Grid>*/}
            </Grid>
        </Grid>

    )
}

export default HomeStoryCard
