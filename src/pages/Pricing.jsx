import React from 'react'
import Cta from './../components/Cta'
import IntroFeatPric from './../components/IntroFeatPric'
import Prices from './../components/Prices'

export default function Pricing() {
    return (
        <React.Fragment>
            <IntroFeatPric index='1'/>
            <Prices />
            <Cta/>
            </React.Fragment>
    )
}


