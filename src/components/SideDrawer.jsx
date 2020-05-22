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
import {
    BrowserRouter as Router,
    Link,
    Route,
    Prompt
} from 'react-router-dom';
import {
    HomeOutlined, 
    UserOutlined,  
    ProfileOutlined,             
    StarOutlined,
    CommentOutlined,
} from '@ant-design/icons'

import NavMenu from './NavMenu.jsx';

class SideDrawer extends React.Component{
    render(){
        return (
            <Drawer
                title={<img onClick={this.props.closeDrawer} style = {{height: "50px", width: "50px"}} src = "/me/img/redIcon.png" />}
                width={"15vh"}
                placement="left"
                closable={true}
                drawerStyle={{ textAlign: "center" }}
                onClose={this.props.closeDrawer}
                visible={this.props.visible}
            >
                <NavMenu onItemClick={this.props.closeDrawer}/>
            </Drawer>
        )
    }
}

export default SideDrawer;