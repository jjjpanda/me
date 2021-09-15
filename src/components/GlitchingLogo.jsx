import React from 'react';

const GlitchingLogo = (props) => {
    const icons = props.icons
    const icon = Math.floor(Math.random() * icons.length) 
    return (
        <div style={{position: "relative", width: "inherit", height: "inherit"}} className = {"easeOut"} >
            <img alt= "icon" src={`img/icons/${icons[(icon+0) % icons.length]}Icon.png`} className = {"icon"} />
            <img alt= "icon" src={`img/icons/${icons[(icon+1) % icons.length]}Icon.png`} className = {"icon glitch1"} style = {{left: "2px"}}/>
            <img alt= "icon" src={`img/icons/${icons[(icon+2) % icons.length]}Icon.png`} className = {"icon glitch2"} style = {{left: "-2px"}}/>
        </div>
    )
}

export default GlitchingLogo