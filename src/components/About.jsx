import React from 'react';
import {
    Button,
    Icon,
    Layout,
    Affix,
    Space,
    Drawer,
    Typography
} from 'antd'

class About extends React.Component{
    render(){
        return (
            <Space direction="vertical">

                <Typography.Title>About me</Typography.Title>
                <Typography>I'm Jay</Typography>
            
            </Space>
        )
    }
}

export default About;