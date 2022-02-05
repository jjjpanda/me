import React from 'react';
import {
    Tooltip
} from 'antd'

const LinkIcon = (props) => {
    return (
        <Tooltip placement="top" title={props.title} mouseEnterDelay={0.300}>
            <a target="_blank" style={{fontSize: "2vh"}} href={props.href} >
                {props.icon}
            </a>
        </Tooltip>
    )
}

export default LinkIcon