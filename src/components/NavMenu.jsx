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
                    <Link to="/">
                        <HomeOutlined />
                        <Typography>Me</Typography>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/?about" onClick={this.props.onItemClick}>
                    <Link to="/?about">
                        <UserOutlined />
                        <Typography>About</Typography>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/?profile" onClick={this.props.onItemClick}>
                    <Link to="/?profile">
                        <ProfileOutlined />
                        <Typography>Resume</Typography>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/?projects" onClick={this.props.onItemClick}>
                    <Link to="/?projects">
                        <StarOutlined />
                        <Typography>Projects</Typography>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/?contact" onClick={this.props.onItemClick}>
                    <Link to="/?contact">
                        <CommentOutlined />
                        <Typography>Contact</Typography>
                    </Link>
                </Menu.Item>

            </Menu>
        )
    }
}

const NavMenu = withRouter(props => <Nav {...props} />)
export default NavMenu;