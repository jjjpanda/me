import React from 'react';

import GlitchingLogo from './GlitchingLogo.jsx';
import BNWGlitchingLogo from './BNWGlitchingLogo.jsx';
import { Space } from 'antd';
import TextLoop from "react-text-loop";
import Cookies from 'js-cookie';

const LoadingLogo = (props) => {
    const rand = Math.random()
    return (<div style={{
        width: "25vh",
        height: "25vh",
        position: "fixed",
        top: "50%",
        left: "50%",
        /* bring your own prefixes */
        transform: "translate(-50%, -50%)"
    }}>
        {rand > 0.025 ? <GlitchingLogo icons={props.icons} /> : <BNWGlitchingLogo /> }
        <Space align="center" style={{color: Cookies.get("darkModeToggled") === "true" ? "#dddddd" : "#000000"}} >
            <TextLoop 
                interval={props.interval} 
                children={["LOADING...", "JUST A SEC...", "STILL LOADING...", "HOLD ON..."]}
            />
        </Space>
    </div>)
}

export default LoadingLogo