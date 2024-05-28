import React from 'react';

import GlitchingLogo from './GlitchingLogo.jsx';
import BNWGlitchingLogo from './BNWGlitchingLogo.jsx';

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
    </div>)
}

export default LoadingLogo