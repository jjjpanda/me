import React from 'react'

import { 
    Typography
} from 'antd'
import { 
    LeftOutlined, 
    RightOutlined 
} from '@ant-design/icons'

class SlideIndicator extends React.Component{
    render(){
        return [
            <div 
                style ={{
                    position: 'absolute',
                    top: '33%',
                    left: 0,
                    padding: "5px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    opacity: "0.9"
                }}
                onClick = {(e) => {
                    e.stopPropagation()
                    if(this.props.arrowEnabled){
                        this.props.toggleImage(false)
                    }
                }}
            >
                <LeftOutlined />
            </div>,
            <div 
                style ={{ 
                    position: 'absolute',
                    top: '33%',
                    right: 0,
                    padding: "5px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    opacity: "0.9"
                }}
                onClick = {(e) => {
                    e.stopPropagation()
                    if(this.props.arrowEnabled){
                        this.props.toggleImage(true)
                    }
                }}
            >
                <RightOutlined />
            </div>,
            <div 
                style ={{
                    position: 'relative',
                    top: "0%",
                    float: "right",
                    padding: "5px",
                    textAlign: "center",
                    borderRadius: "10px",
                    backgroundColor: "black",
                    opacity: "0.9" 
                }}
            >
                <Typography style={{color: "white"}}>
                    {this.props.index}/{this.props.slides}
                </Typography>
            </div>
        ]
    }
}

export default SlideIndicator