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

import IconMap from '../../docs/img/iconMap.svg'
import MapBlack from '../../docs/img/mapBlack.svg'
import MapWhite from '../../docs/img/mapWhite.svg'

class About extends React.Component{
    render(){
        return (
            <Space direction="vertical">

                <Typography.Title>About me</Typography.Title>
                <Typography>I'm Jay</Typography>

                <MapWhite id={"spinningFlicker1"} style={{ width: '30vh', height: 'auto'}}/>
                <IconMap id={"spinningFlicker2"} style={{ width: '30vh', height: 'auto'}}/>
                <MapBlack id={"spinningFlicker3"} style={{ width: '30vh', height: 'auto'}}/>
            
            </Space>
        )
    }
}

export default About;