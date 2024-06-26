import React from 'react';

import LoadingLogo from './LoadingLogo.jsx';
import Main from './Main.jsx';
import MobileMain from './MobileMain.jsx';
import Cookie from 'js-cookie'
import { useMediaQuery } from '@mantine/hooks';
import { em } from '@mantine/core';

const ResponsiveMain = (props) => {
    const isTabletOrMobile = useMediaQuery(`(max-aspect-ratio: 5/4) or (max-height: ${em(600)})`) 
    if(props.loaded){
        if(isTabletOrMobile){
            return(
                <MobileMain icons={props.icons}/>
            )
        }
        else{
            return(
                <Main icons={props.icons}/>    
            )
        }
        
    } 
    else{
        return(
            <div style={{width: '100%', height: "100%", backgroundColor: (Cookie.get('darkModeToggled') == "true" ? "#000" : "#fff")}}>
                <LoadingLogo icons={props.icons} interval={Math.round(props.timeout)/2}/>
            </div>
        )
    }
}

export default ResponsiveMain