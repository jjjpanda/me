import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main.jsx'

import './css/animation.less'

import IconMap from '../docs/img/iconMap.svg'
import MapBlack from '../docs/img/mapBlack.svg'
import MapWhite from '../docs/img/mapWhite.svg'

const icons = ["red", "violet", "yellow", "black", "green", "orange", "blue"]

const GlitchingLogo = () => {
    const icon = Math.floor(Math.random() * icons.length) 
    return (
        <div style={{position: "relative", width: "100px", height: "100px"}} >
            <img src={`/me/img/${icons[(icon+0) % icons.length]}Icon.png`} className = {"icon"} />
            <img src={`/me/img/${icons[(icon+1) % icons.length]}Icon.png`} className = {"icon glitch1"} />
            <img src={`/me/img/${icons[(icon+2) % icons.length]}Icon.png`} className = {"icon glitch2"} />
        </div>
    )
}

const BNWGlitchingLogo = () => (
    <div style={{position: "relative", width: "100px", height: "100px"}} >
        <IconMap className = {"icon"} />
        <MapWhite className = {"icon glitch1"} />
        <MapBlack className = {"icon glitch2"} />
    </div>
)

const rand = Math.random()
const LoadingLogo = () => (
    <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        /* bring your own prefixes */
        transform: "translate(-50%, -50%)"  
    }}>
        {rand > 0.10 ? <GlitchingLogo /> : <BNWGlitchingLogo /> }
    </div>
)

ReactDOM.render(
    <div>
        <LoadingLogo className = {"easeOut"} />
    </div>,
    document.getElementById('root'),
);

setTimeout(() => {
    ReactDOM.render(
        <div>
            <Main className= {"easeIn"} />
        </div>,
        document.getElementById('root'),
    );
}, 1000)

setTimeout(() => {
    ReactDOM.render(<Main />,
        document.getElementById('root'),
    );
}, 2000)