import React from 'react'
import FeatureCard from './FeatureCard'
import {Grid} from '@mui/material'
import { HomeFeaturesData } from './HomeFeaturesData'

function HomeFeatures() {
    return (
        
            <Grid container direction='row' className='feat-cont'>
                {HomeFeaturesData.map(item => {
                    return (<FeatureCard
                    home='false'
                        key={item.index}
                        index={item.index}
                        title={item.title}
                        text={item.text}/>)
                })}
            </Grid>
        
    )
}

export default HomeFeatures
