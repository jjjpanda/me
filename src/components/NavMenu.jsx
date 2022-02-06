import React, { useEffect, useRef } from 'react';
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

import Cookie from 'js-cookie'
import useDarkTheme from '../hooks/useDarkTheme';

const NavMenu = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isDarkTheme, toggleTheme] = useDarkTheme()

    const firstUpdate = useRef(true);

    useEffect(() => {
        if(firstUpdate.current){
            firstUpdate.current = false; 
            return
        }
        toggleTheme(() => {
            props.updateParent()
        })
    }, [isDarkTheme])

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
                    key="/?projects"
                    title={"Projects"}
                    selected = {pathName === "/?projects"}  
                    icon={<StarOutlined />} 
                    selectedIcon={<StarOutlined />}
                    onPress={() => {
                        iconClick("/?projects")
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
                    title={isDarkTheme ? "Light" : " Dark" }
                    selected = {false} 
                    icon={isDarkTheme ? <BulbFilled /> : <BulbOutlined />}
                    selectedIcon={isDarkTheme ? <BulbFilled /> : <BulbOutlined />}
                    onPress={toggleTheme}
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

                <Menu.Item key="/?projects" icon={<StarOutlined />} onClick={props.onItemClick}>
                    <Link to="/?projects" >
                        Projects
                    </Link>
                </Menu.Item>

                <Menu.Item key="/?contact" icon={<CommentOutlined />} onClick={props.onItemClick}>
                    <Link to="/?contact" >
                        Contact
                    </Link>
                </Menu.Item>

                <Menu.Item key="dark" icon={isDarkTheme ? <BulbFilled /> : <BulbOutlined />} onClick={() => {
                    toggleTheme()
                }}>
                    {""}
                </Menu.Item>

            </Menu>
        )
    }
}

export default NavMenu;