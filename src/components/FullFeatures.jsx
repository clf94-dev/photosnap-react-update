import React from 'react'
import FeatureCard from './FeatureCard'
import {Grid} from '@mui/material'
import { FeaturesData } from './FeaturesData'



function FullFeatures() {
    return (
        <div>
            <Grid container direction='row' className='feat-cont'>
                {FeaturesData.map(item => {
                    return (<FeatureCard
                    home='true'
                        key={item.index}
                        index={item.index}
                        title={item.title}
                        text={item.text}
                        />)
                })}
            </Grid>
        </div>
    )
}

export default FullFeatures
