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
    TabBar
} from 'antd-mobile'
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
    BulbOutlined,
    BulbFilled
} from '@ant-design/icons'

import { darkTheme, lightTheme } from '../css/theme.js';
import Cookie from 'js-cookie'
import note from './note.jsx'

let themeChange;
try {
  themeChange = window.less.modifyVars;
} catch (e) {
  themeChange = () => Promise.reject(e);
}

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggleDarkMode: Cookie.get('darkModeToggled') == 'true'
        }
        themeChange(
            this.state.toggleDarkMode ? darkTheme : lightTheme,
        ).then((e) => console.log(e), (e) => console.log('error', e));
    }

    toggleDarkMode = () => {
        this.setState((state) => ({
            toggleDarkMode: !state.toggleDarkMode,
        }), () => {
            themeChange(
                this.state.toggleDarkMode ? darkTheme : lightTheme,
            ).then((e) => {
                console.log(e)
                if(this.state.toggleDarkMode && Cookie.get('darkModeEverToggled') != 'true'){
                    Cookie.set('darkModeEverToggled', true, {expires: 1000})
                    note('info', "Turn the Lights Down Low", "Dark mode delivered for those who so prefer.", 4)
                }
                Cookie.set('darkModeToggled', this.state.toggleDarkMode, {expires: 1000})
                this.props.updateParent()
            }, (e) => console.log('error', e));
        });
    }

    iconClick = (path) => {
        this.props.history.push(path)
    }

    render() {
        console.log(this.props.location.pathname+this.props.location.search)
        const pathName = this.props.location.pathname+this.props.location.search
        if(this.props.mobile){
            return (
                <TabBar
                    barTintColor={"transparent"}
                    tabBarPosition="top"
                    
                >  
                    <TabBar.Item 
                        key="/" 
                        title={"Home"}
                        selected = {pathName === "/"} 
                        icon={<HomeOutlined />} 
                        selectedIcon={<HomeOutlined />}
                        onPress={() => {
                            this.iconClick("/")
                        }} 
                    />
                    <TabBar.Item 
                        key="/?about" 
                        title={"About"}
                        selected = {pathName === "/?about"} 
                        icon={<UserOutlined />} 
                        selectedIcon={<UserOutlined />}
                        onPress={() => {
                            this.iconClick("/?about")
                        }} 
                    />
                    <TabBar.Item 
                        key="/?resume" 
                        title={"Resume"}
                        selected = {pathName === "/?resume"} 
                        icon={<ProfileOutlined />} 
                        selectedIcon={<ProfileOutlined />}
                        onPress={() => {
                            this.iconClick("/?resume")
                        }} 
                    />
                    <TabBar.Item 
                        key="/?projects"
                        title={"Projects"}
                        selected = {pathName === "/?projects"}  
                        icon={<StarOutlined />} 
                        selectedIcon={<StarOutlined />}
                        onPress={() => {
                            this.iconClick("/?projects")
                        }} 
                    />
                    <TabBar.Item 
                        key="/?contact" 
                        title={"Contact"}
                        selected = {pathName === "/?contact"} 
                        icon={<CommentOutlined />} 
                        selectedIcon={<CommentOutlined />}
                        onPress={() => {
                            this.iconClick("/?contact")
                        }} 
                    />
                    <TabBar.Item 
                        key="dark"
                        title={this.state.toggleDarkMode ? "Light" : " Dark" }
                        selected = {false} 
                        icon={this.state.toggleDarkMode ? <BulbFilled /> : <BulbOutlined />}
                        selectedIcon={this.state.toggleDarkMode ? <BulbFilled /> : <BulbOutlined />}
                        onPress={() => {
                            this.toggleDarkMode()
                        }}
                    />         
                </TabBar>
            )
        }
        else{
            return (
                <Menu 
                    defaultSelectedKeys={(this.props.location.pathname+this.props.location.search).match(/\/(.*[^\/])?/)}
                    selectedKeys={(this.props.location.pathname+this.props.location.search).match(/\/(.*[^\/])?/)}
                    mode={this.props.mode}
                    theme={'dark'}
                >

                    <Menu.Item key="/" icon={<HomeOutlined />} onClick={this.props.onItemClick}>
                        <Link to="/" >
                            Home
                        </Link>    
                    </Menu.Item>

                    <Menu.Item key="/?about" icon={<UserOutlined />} onClick={this.props.onItemClick}>
                        <Link to="/?about" >
                            About
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="/?resume" icon={<ProfileOutlined />} onClick={this.props.onItemClick}>
                        <Link to="/?resume" >
                            Resume
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="/?projects" icon={<StarOutlined />} onClick={this.props.onItemClick}>
                        <Link to="/?projects" >
                            Projects
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="/?contact" icon={<CommentOutlined />} onClick={this.props.onItemClick}>
                        <Link to="/?contact" >
                            Contact
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="dark" icon={this.state.toggleDarkMode ? <BulbFilled /> : <BulbOutlined />} onClick={() => {
                        this.toggleDarkMode()
                    }}>
                        {""}
                    </Menu.Item>

                </Menu>
            )
        }
    }
}

const NavMenu = withRouter(props => <Nav {...props} />)
export default NavMenu;