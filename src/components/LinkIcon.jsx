import React from 'react';
import {
    Tooltip
} from 'antd'

class LinkIcon extends React.Component{
    render() {
        return (
            <Tooltip placement="top" title={this.props.title} mouseEnterDelay={0.300}>
                <a target="_blank" style={{fontSize: "2vh"}} href={this.props.href} >
                    {this.props.icon}
                </a>
            </Tooltip>
        )
    }
}

export default LinkIcon