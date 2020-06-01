import React from 'react'
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
    CommentOutlined
} from '@ant-design/icons'

class Bar extends React.Component {
    constructor(props){
        super(props)
    }

    iconClick = (path) => {
        this.props.history.push(path)
    }

    render() {
        const pathName = this.props.location.pathname+this.props.location.search
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
                    key="/?profile" 
                    title={"Resume"}
                    selected = {pathName === "/?profile"} 
                    icon={<ProfileOutlined />} 
                    selectedIcon={<ProfileOutlined />}
                    onPress={() => {
                        this.iconClick("/?profile")
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
                    selected = {pathName === "/?contacts"} 
                    icon={<CommentOutlined />} 
                    selectedIcon={<CommentOutlined />}
                    onPress={() => {
                        this.iconClick("/?contact")
                    }} 
                />         
            </TabBar>
        )
    }
}

const NavMenuMobile = withRouter((props) => <Bar {...props} />)

export default NavMenuMobile