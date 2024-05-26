import React from 'react';

import IconMapBlack from '../../docs/img/icons/iconMapBlack.svg'
import MapFilledBlack from '../../docs/img/icons/mapFilledBlack.svg'
import MapEmptyBlack from '../../docs/img/icons/mapEmptyBlack.svg'

import IconMapWhite from '../../docs/img/icons/iconMapWhite.svg'
import MapFilledWhite from '../../docs/img/icons/mapFilledWhite.svg'
import MapEmptyWhite from '../../docs/img/icons/mapEmptyWhite.svg'

import Cookie from 'js-cookie'

const BNWGlitchingLogo = () => (
    <div style={{width: "inherit", height: "inherit"}} className = {"icon-parent easeOut"}  >
        {Cookie.get('darkModeToggled') == 'true' ? [
            <IconMapWhite key= {`white-icon`} className = {"icon"} />,
            <MapEmptyWhite key= {`white-icon-glitch-1`} className = {"icon glitch1"} style = {{left: "2px"}}/>,
            <MapFilledWhite key= {`white-icon-glitch-2`} className = {"icon glitch2"} style = {{left: "-2px"}}/>
        ] : [
            <IconMapBlack key= {`black-icon`} className = {"icon"} />,
            <MapEmptyBlack key= {`black-icon-glitch-1`} className = {"icon glitch1"} style = {{left: "2px"}}/>,
            <MapFilledBlack key= {`black-icon-glitch-2`} className = {"icon glitch2"} style = {{left: "-2px"}}/>
        ]}
    </div>
)

export default BNWGlitchingLogo