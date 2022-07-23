import React from 'react'



import HomeStoryCard from './HomeStoryCard'
import { Grid } from '@mui/material'
import { HomeStoriesData } from './HomeStoriesData'

import './styles/App.css'


import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function HomeStories({home}) {
   
    return (
        <div style={{backgroundColor:'black'}}>
            <Grid container direction='row' data-aos='fade-right' data-aos-duration='1500'  >
                {HomeStoriesData.map(item => {
                    return (<HomeStoryCard
                        key={item.index}
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

export default HomeStories
