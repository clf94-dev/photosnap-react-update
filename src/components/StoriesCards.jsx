import React from 'react'


import HomeStoryCard from './HomeStoryCard'
import { Grid } from '@mui/material'

import './styles/App.css'
import { FullStoriesData } from './FullStoriesData'

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function StoriesCards() {
    return (
        <div>
             <Grid container direction='row' data-aos='fade-up' data-aos-duration='1500'>
                {FullStoriesData.map(item => {
                    return (<HomeStoryCard
                        key={item.index}
                        date={item.date}
                        index={item.index}
                        title={item.title}
                        author={item.author}
                        alt={item.imgALT}
                        btnStyle={item.btnStyle} 
                        arrow={item.arrow}
                        link={item.link} />)
                })}
            </Grid>
        </div>
    )
}

export default StoriesCards
