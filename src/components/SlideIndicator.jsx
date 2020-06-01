import React from 'react'

import BlackCircle from '../../docs/img/blackCircle.svg'
import GreyCircle from '../../docs/img/greyCircle.svg'
import { Typography } from 'antd'

class SlideIndicator extends React.Component{
    render(){
        return (
            <div style ={{ 
                position: 'relative', 
                top: "0", 
                float: "right",
                padding: "5px",
                textAlign: "center",
                display: "inline-block",
                borderRadius: "10px",
                backgroundColor: "black", 
            }}>
                <Typography style={{color: "white"}}>
                    {this.props.index}/{this.props.slides}
                </Typography>
            </div>
        )
    }
}

export default SlideIndicator