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

import '../css/animation.less'

class Home extends React.Component{
    render(){
        return (
            <Space direction="vertical">

                <Typography.Title>Hello world!</Typography.Title>
                <Typography>Oh, that's tacky.</Typography>

                <div className="" >
                    <img src={'/me/img/redIcon.png'} id={"spinningFlicker1"} style={{ width: '30vh', height: 'auto'}}/>
                    <img src={'/me/img/blackIcon.png'} id={"spinningFlicker2"} style={{ width: '30vh', height: 'auto'}}/>
                    <img src={'/me/img/blueIcon.png'} id={"spinningFlicker3"} style={{ width: '30vh', height: 'auto'}}/>
                </div>
                
            
                    
            </Space>
        )
    }
}

export default Home;