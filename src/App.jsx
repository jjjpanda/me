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

import Cookie from 'js-cookie'

import IconMapBlack from '../docs/img/icons/iconMapBlack.svg'
import MapFilledBlack from '../docs/img/icons/mapFilledBlack.svg'
import MapEmptyBlack from '../docs/img/icons/mapEmptyBlack.svg'

import IconMapWhite from '../docs/img/icons/iconMapWhite.svg'
import MapFilledWhite from '../docs/img/icons/mapFilledWhite.svg'
import MapEmptyWhite from '../docs/img/icons/mapEmptyWhite.svg'

import { icons } from './css/theme.js';

const GlitchingLogo = () => {
    const icon = Math.floor(Math.random() * icons.length) 
    return (
        <div style={{position: "relative", width: "inherit", height: "inherit"}} className = {"easeOut"} >
            <img alt= "icon" src={`img/icons/${icons[(icon+0) % icons.length]}Icon.png`} className = {"icon"} />
            <img alt= "icon" src={`img/icons/${icons[(icon+1) % icons.length]}Icon.png`} className = {"icon glitch1"} style = {{left: "2px"}}/>
            <img alt= "icon" src={`img/icons/${icons[(icon+2) % icons.length]}Icon.png`} className = {"icon glitch2"} style = {{left: "-2px"}}/>
        </div>
    )
}

const BNWGlitchingLogo = () => (
    <div style={{position: "relative", width: "inherit", height: "inherit"}} className = {"easeOut"} >
        {Cookie.get('darkModeToggled') == 'true' ? [
            <IconMapWhite className = {"icon"} />,
            <MapEmptyWhite className = {"icon glitch1"} style = {{left: "2px"}}/>,
            <MapFilledWhite className = {"icon glitch2"} style = {{left: "-2px"}}/>
        ] : [
            <IconMapBlack className = {"icon"} />,
            <MapEmptyBlack className = {"icon glitch1"} style = {{left: "2px"}}/>,
            <MapFilledBlack className = {"icon glitch2"} style = {{left: "-2px"}}/>
        ]}
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
        {rand > 0.025 ? <GlitchingLogo /> : <BNWGlitchingLogo /> }
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
    <div style={{width: '100%', height: "100%", backgroundColor: (Cookie.get('darkModeToggled') == "true" ? "#000" : "#fff")}}>
        <LoadingLogo />
    </div>,
    document.getElementById('root'),
);

setTimeout(() => {
    ReactDOM.render(<ResponsiveMain />,
            document.getElementById('root'),
    );
}, 1100)