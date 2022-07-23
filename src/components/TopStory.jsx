import React from 'react'
import {Grid} from '@mui/material'
import './styles/App.css'
import TopStoryIMG from './../images/stories/desktop/moon-of-appalacia.jpg'
import TopStoryIMGT from './../images/stories/tablet/moon-of-appalacia.jpg'
import TopStoryIMGM from './../images/stories/mobile/moon-of-appalacia.jpg'

import ArrowL from './../images/shared/desktop/arrow copy.svg'
import { Button } from './Button'
import './styles/button.css'


function TopStory() {
    return (
        <div>
            <Grid container direction='row' className='topStory-cont'>
                <Grid item sm={6} xs={12} className='text-col'>
                    <h3 className='intro-p'>Last month's featured story</h3>
                    <h2>Hazy full moon of Appalachia</h2>
                    <Grid container direction='row'>
                        <p>
                            March 2nd 2020</p>
                        <p className='author-p'>by John Appleseed</p>
                    </Grid>
                    <p>
                        The dissected plateau area, while not actually made up of geological mountains,
                        is popularly called "mountains," especially in eastern Kentucky and West
                        Virginia, and while the ridges are not high, the terrain is extremely rugged.
                    </p>
                    <Button buttonSize='btn--wide' buttonStyle='btn--read' >
                        <Grid container direction='row'>
                            <Grid item xs={8}>
                                READ THE STORY
                            </Grid>
                            <Grid item xs={4}>
                                <img loading="lazy" src={ArrowL} alt="arrow"/>

                            </Grid>
                        </Grid>

                    </Button>

                </Grid>
                <Grid item md={6} xs={12} className='img-col'>
                    <img loading="lazy" src={TopStoryIMG} srcSet={`${TopStoryIMGM} 756w, ${TopStoryIMG} 1500w, ${TopStoryIMGT} 1280w`} alt="moon of appalacia"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default TopStory
