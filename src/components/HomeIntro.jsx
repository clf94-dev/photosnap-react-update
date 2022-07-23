import React from 'react'
import {HomeIntroData} from './HomeIntroData'
import HomeIntroCard from './HomeIntroCard'
import {Grid} from '@mui/material'

function HomeIntro() {
    return (
        <div>

            {HomeIntroData.map(item => {
                return (
                   
                        <HomeIntroCard key ={item.index}
                        index={item.index}
                        title={item.title}
                        text={item.text} 
                        classes={item.classes} 
                        btn={item.btn}
                        btnStyle={item.btnStyle}
                        arrow={item.arrow}
                        link={item.link} />
                 
                )
            })}

        </div>
    );
}

export default HomeIntro;
