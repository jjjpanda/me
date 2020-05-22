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

class Home extends React.Component{
    render(){
        return (
            <Space direction="vertical">

                <Typography.Title>Hello world!</Typography.Title>
                <Typography>Oh, that's tacky.</Typography>
            
            </Space>
        )
    }
}

export default Home;