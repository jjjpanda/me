import React from 'react';

import { useMediaQuery } from 'react-responsive'

import Main from './Main.jsx'
import MobileMain from './MobileMain.jsx'
import LoadingLogo from './LoadingLogo.jsx';

import useDarkTheme from "../hooks/useDarkTheme"

const ResponsiveMain = (props) => {
    const [isDarkTheme] = useDarkTheme();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' }) 
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
            <div style={{width: '100%', height: "100%", backgroundColor: (isDarkTheme ? "#000" : "#fff")}}>
                <LoadingLogo icons={props.icons} interval={Math.round(props.timeout)/2}/>
            </div>
        )
    }
}

export default ResponsiveMain