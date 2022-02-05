import React from 'react'

import { 
    Typography
} from 'antd'
import { 
    LeftOutlined, 
    RightOutlined 
} from '@ant-design/icons'

const SlideIndicator = (props) => {
    return [
        <div 
            style ={{
                position: 'absolute',
                top: '33%',
                left: 0,
                padding: "2px",
                borderRadius: "20px",
                backgroundColor: "white",
                color: "black",
                opacity: "0.77"
            }}
            onClick = {(e) => {
                e.stopPropagation()
                if(props.arrowEnabled){
                    props.toggleImage(false)
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
                padding: "2px",
                borderRadius: "20px",
                backgroundColor: "white",
                color: "black",
                opacity: "0.77"
            }}
            onClick = {(e) => {
                e.stopPropagation()
                if(props.arrowEnabled){
                    props.toggleImage(true)
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
                {props.index}/{props.slides}
            </Typography>
        </div>
    ]
}

export default SlideIndicator