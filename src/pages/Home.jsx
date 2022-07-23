import React from 'react'

import HomeIntro from './../components/HomeIntro'
import HomeStories from './../components/HomeStories';
import HomeFeatures from './../components/HomeFeatures';

import './../components/styles/App.css'


export default function Home() {
    return (
    <React.Fragment>
       <HomeIntro />
       <HomeStories/>
       <HomeFeatures/>

       </React.Fragment>
    );
}

