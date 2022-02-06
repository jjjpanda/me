import React from 'react';

import IconMapBlack from '../../docs/img/icons/iconMapBlack.svg'
import MapFilledBlack from '../../docs/img/icons/mapFilledBlack.svg'
import MapEmptyBlack from '../../docs/img/icons/mapEmptyBlack.svg'

import IconMapWhite from '../../docs/img/icons/iconMapWhite.svg'
import MapFilledWhite from '../../docs/img/icons/mapFilledWhite.svg'
import MapEmptyWhite from '../../docs/img/icons/mapEmptyWhite.svg'

import Cookie from 'js-cookie'
import useDarkTheme from '../hooks/useDarkTheme';

const BNWGlitchingLogo = () => {
    const [isDarkTheme] = useDarkTheme();

    return <div style={{position: "relative", width: "inherit", height: "inherit"}} className = {"easeOut"} >
        {isDarkTheme ? [
            <IconMapWhite className = {"icon"} />,
            <MapEmptyWhite className = {"icon glitch1"} style = {{left: "2px"}}/>,
            <MapFilledWhite className = {"icon glitch2"} style = {{left: "-2px"}}/>
        ] : [
            <IconMapBlack className = {"icon"} />,
            <MapEmptyBlack className = {"icon glitch1"} style = {{left: "2px"}}/>,
            <MapFilledBlack className = {"icon glitch2"} style = {{left: "-2px"}}/>
        ]}
    </div>
}

export default BNWGlitchingLogo