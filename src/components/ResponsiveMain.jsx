import React from 'react';

import { useMediaQuery } from 'react-responsive'

import Main from './Main.jsx'
import MobileMain from './MobileMain.jsx'
import LoadingLogo from './LoadingLogo.jsx';

import Cookie from 'js-cookie'

const ResponsiveMain = (props) => {
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
            <div style={{width: '100%', height: "100%", backgroundColor: (Cookie.get('darkModeToggled') == "true" ? "#000" : "#fff")}}>
                <LoadingLogo icons={props.icons}/>
            </div>
        )
    }
}

export default ResponsiveMain