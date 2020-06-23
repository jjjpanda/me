import React from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive'

import * as FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

import Main from './components/Main.jsx'
import MobileMain from './components/MobileMain.jsx'

import './css/antd.less'

import IconMap from '../docs/img/icons/iconMap.svg'
import MapBlack from '../docs/img/icons/mapBlack.svg'
import MapWhite from '../docs/img/icons/mapWhite.svg'

const icons = ["red", "violet", "yellow", "black", "green", "orange", "blue"]

const GlitchingLogo = () => {
    const icon = Math.floor(Math.random() * icons.length) 
    return (
        <div style={{position: "relative", width: "inherit", height: "inherit"}} >
            <img alt= "icon" src={`/me/img/icons/${icons[(icon+0) % icons.length]}Icon.png`} className = {"icon"} />
            <img alt= "icon" src={`/me/img/icons/${icons[(icon+1) % icons.length]}Icon.png`} className = {"icon glitch1"} style = {{left: "2px"}}/>
            <img alt= "icon" src={`/me/img/icons/${icons[(icon+2) % icons.length]}Icon.png`} className = {"icon glitch2"} style = {{left: "-2px"}}/>
        </div>
    )
}

const BNWGlitchingLogo = () => (
    <div style={{position: "relative", width: "inherit", height: "inherit"}} >
        <IconMap className = {"icon"} />
        <MapWhite className = {"icon glitch1"} style = {{left: "2px"}}/>
        <MapBlack className = {"icon glitch2"} style = {{left: "-2px"}}/>
    </div>
)

const rand = Math.random()
const LoadingLogo = () => (
    <div style={{
        width: "25vh",
        height: "25vh",
        position: "fixed",
        top: "50%",
        left: "50%",
        /* bring your own prefixes */
        transform: "translate(-50%, -50%)"  
    }}>
        {rand > 0.10 ? <GlitchingLogo /> : <BNWGlitchingLogo /> }
    </div>
)

const ResponsiveMain = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    if(isTabletOrMobileDevice){
        return <MobileMain />
    }
    else{
        return <Main />
    }
    
}

ReactDOM.render(
    <div className = {"easeOut"} style={{width: '100%', height: "100%"}}>
        <LoadingLogo />
    </div>,
    document.getElementById('root'),
);

setTimeout(() => {
ReactDOM.render(<ResponsiveMain />,
        document.getElementById('root'),
    );
}, 1000)