import React from 'react'
import Cta from '../components/Cta'
import FullFeatures from './../components/FullFeatures'
import IntroFeatPric from './../components/IntroFeatPric'


export default function Features() {
    return (
      <React.Fragment>
          <IntroFeatPric index='0'/>
          <FullFeatures/>
          <Cta/>  
      </React.Fragment>
    )
}


