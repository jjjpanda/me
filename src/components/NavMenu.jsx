import React, { useEffect, useState } from 'react';
import {
    Menu,
    Typography
} from 'antd'
import {
    TabBar
} from 'antd-mobile'
import {
    BrowserRouter as Router,
    Link,
    useLocation, useNavigate
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

const NavMenu = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isDarkMode, setDarkMode] = useState(Cookie.get('darkModeToggled') == 'true')

    useEffect(() => {
        themeChange(
            isDarkMode ? darkTheme : lightTheme,
        ).then((e) => {
            console.log(e)
            if(isDarkMode && Cookie.get('darkModeEverToggled') != 'true'){
                Cookie.set('darkModeEverToggled', true, {expires: 1000})
                note('info', "Turn the Lights Down Low", "Dark mode delivered for those who so prefer.", 4)
            }
            Cookie.set('darkModeToggled', isDarkMode, {expires: 1000})
            props.updateParent()
        }, (e) => console.log('error', e));
    }, [isDarkMode])

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }

    const iconClick = (path) => {
        navigate(path)
    }

    console.log(location.pathname+location.search)
    const pathName = location.pathname+location.search
    if(props.mobile){
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
                        iconClick("/")
                    }} 
                />
                <TabBar.Item 
                    key="/?about" 
                    title={"About"}
                    selected = {pathName === "/?about"} 
                    icon={<UserOutlined />} 
                    selectedIcon={<UserOutlined />}
                    onPress={() => {
                        iconClick("/?about")
                    }} 
                />
                <TabBar.Item 
                    key="/?resume" 
                    title={"Resume"}
                    selected = {pathName === "/?resume"} 
                    icon={<ProfileOutlined />} 
                    selectedIcon={<ProfileOutlined />}
                    onPress={() => {
                        iconClick("/?resume")
                    }} 
                />
                <TabBar.Item 
                    key="/?contact" 
                    title={"Contact"}
                    selected = {pathName === "/?contact"} 
                    icon={<CommentOutlined />} 
                    selectedIcon={<CommentOutlined />}
                    onPress={() => {
                        iconClick("/?contact")
                    }} 
                />
                <TabBar.Item 
                    key="dark"
                    title={isDarkMode ? "Light" : " Dark" }
                    selected = {false} 
                    icon={isDarkMode ? <BulbFilled /> : <BulbOutlined />}
                    selectedIcon={isDarkMode ? <BulbFilled /> : <BulbOutlined />}
                    onPress={toggleDarkMode}
                />         
            </TabBar>
        )
    }
    else{
        return (
            <Menu 
                defaultSelectedKeys={(location.pathname+location.search).match(/\/(.*[^\/])?/)}
                selectedKeys={(location.pathname+location.search).match(/\/(.*[^\/])?/)}
                mode={props.mode}
                theme={'dark'}
                disabledOverflow
            >

                <Menu.Item key="/" icon={<HomeOutlined />} onClick={props.onItemClick}>
                    <Link to="/" >
                        Home
                    </Link>    
                </Menu.Item>

                <Menu.Item key="/?about" icon={<UserOutlined />} onClick={props.onItemClick}>
                    <Link to="/?about" >
                        About
                    </Link>
                </Menu.Item>

                <Menu.Item key="/?resume" icon={<ProfileOutlined />} onClick={props.onItemClick}>
                    <Link to="/?resume" >
                        Resume
                    </Link>
                </Menu.Item>

                <Menu.Item key="/?contact" icon={<CommentOutlined />} onClick={props.onItemClick}>
                    <Link to="/?contact" >
                        Contact
                    </Link>
                </Menu.Item>

                <Menu.Item key="dark" icon={isDarkMode ? <BulbFilled /> : <BulbOutlined />} onClick={() => {
                    toggleDarkMode()
                }}>
                    {""}
                </Menu.Item>

            </Menu>
        )
    }
}

export default NavMenu;