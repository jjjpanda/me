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

class Home extends React.Component{
    render(){
        return (
            <Space direction="vertical">

                <Typography.Title>Hello world!</Typography.Title>
                <Typography>Oh, that's tacky.</Typography>

            
                <IconMap style={{ width: '10vh', height: 'auto'}}/>
                <MapBlack style={{ width: '10vh', height: 'auto'}}/>
                <MapWhite style={{ width: '10vh', height: 'auto'}}/>
            
                    
            </Space>
        )
    }
}

export default Home;