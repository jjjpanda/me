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

import IconText from './IconText.jsx'

//

class Nav extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Menu 
                defaultSelectedKeys={(this.props.location.pathname+this.props.location.search).match(/\/(.*[^\/])?/)}
                mode="inline"
            >
                
                <Menu.Item key="/" onClick={this.props.onItemClick}>
                    <IconText to="/" text={"Home"} icon={<HomeOutlined />} />    
                </Menu.Item>

                <Menu.Item key="/?about" onClick={this.props.onItemClick}>
                    <IconText to="/?about" text={"About"} icon={<UserOutlined />} />
                </Menu.Item>

                <Menu.Item key="/?profile" onClick={this.props.onItemClick}>
                    <IconText to="/?profile" text={"Resume"} icon={<ProfileOutlined />} />
                </Menu.Item>

                <Menu.Item key="/?projects" onClick={this.props.onItemClick}>
                    <IconText to="/?projects" text={"Projects"} icon={<StarOutlined />} />
                </Menu.Item>

                <Menu.Item key="/?contact" onClick={this.props.onItemClick}>
                    <IconText to="/?contact" text={"Contact"} icon={<CommentOutlined />} />
                </Menu.Item>

            </Menu>
        )
    }
}

const NavMenu = withRouter(props => <Nav {...props} />)
export default NavMenu;