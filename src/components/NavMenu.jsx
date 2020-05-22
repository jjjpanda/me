import React from 'react';
import {
    Button,
    Icon,
    Layout,
    Affix,
    Space,
    Menu,
    Typography
} from 'antd'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Prompt,
    withRouter
} from 'react-router-dom';
import {
    HomeOutlined, 
    UserOutlined,  
    ProfileOutlined,             
    StarOutlined,
    CommentOutlined,
} from '@ant-design/icons'

//defaultSelectedKeys={this.props.location.pathname.match(/\/(.*[^\/])?/)}

class NavMenu extends React.Component{
    render() {
        return (
            <Menu 
                mode="inline"
            >
                
                <Menu.Item onClick={this.props.onItemClick}>
                    <Link to="/">
                        <HomeOutlined />
                        <Typography>Me</Typography>
                    </Link>
                </Menu.Item>

                <Menu.Item onClick={this.props.onItemClick}>
                    <Link to="/?about">
                        <UserOutlined />
                        <Typography>About</Typography>
                    </Link>
                </Menu.Item>

                <Menu.Item onClick={this.props.onItemClick}>
                    <Link to="/">
                        <ProfileOutlined />
                        <Typography>Resume</Typography>
                    </Link>
                </Menu.Item>

                <Menu.Item onClick={this.props.onItemClick}>
                    <Link to="/">
                        <StarOutlined />
                        <Typography>Projects</Typography>
                    </Link>
                </Menu.Item>

                <Menu.Item onClick={this.props.onItemClick}>
                    <Link to="/">
                        <CommentOutlined />
                        <Typography>Contact</Typography>
                    </Link>
                </Menu.Item>

            </Menu>
        )
    }
}

export default NavMenu;