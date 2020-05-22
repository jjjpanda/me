import React from 'react';
import {
    Button,
    Layout,
    Affix,
    Space,
    Drawer,
    Popover
} from 'antd'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Prompt
} from 'react-router-dom';
import {
    UnorderedListOutlined,
    GithubOutlined,
    MailOutlined,
    LinkedinOutlined,
    InstagramOutlined
} from '@ant-design/icons'

import Music from '../../docs/img/music.svg'

import Home from './Home.jsx'
import About from './About.jsx'
import Profile from './Profile.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

import SideDrawer from './SideDrawer.jsx'
import NavMenu from './NavMenu.jsx';

console.log(`url(${window.location+"img/gradient.png"})`)

const Header = Layout.Header
const Content = Layout.Content
const Footer = Layout.Footer

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            hoverMenuVisible: false
        }
    }

    closeDrawer = () => {
        this.setState({
            visible: false,
        });
    };

    openDrawer = () => {
        this.setState({
            visible: true,
        })
    }

    handleHoverMenuChange = visible => {
        this.setState({
            hoverMenuVisible: visible
        });
    };

    render() {
        return (
            <Router basename={'/me'} >

                <SideDrawer openDrawer={this.openDrawer} closeDrawer={this.closeDrawer} visible={this.state.visible} />

                <Layout style={{ minHeight: "100vh" }}>

                    <Header style={{ padding: '0px 5px', color: "white" }}>
                        <Popover 
                            placement="bottom"
                            content={
                                <NavMenu onItemClick={() => {this.setState({hoverMenuVisible: false})}}/>
                            }
                            trigger="hover"
                            onClick = {() => {
                                this.handleHoverMenuChange(false)
                            }}
                            visible={this.state.hoverMenuVisible}
                            onVisibleChange={this.handleHoverMenuChange}
                            mouseEnterDelay = {0.68}
                        >
                            <Space onClick={this.openDrawer}>
                                <UnorderedListOutlined />
                                <Affix offsetTop={0}>
                                    <img  style = {{height: "50px", width: "50px"}} src = "/me/img/blackIcon.png" />
                                </Affix>
                            </Space>
                        </Popover>
                    </Header>
                                      
                    <Content style={{ padding: '5px 20px' }}>
                        
                        <Route 
                            path="/" 
                            render={({location}) => {
                                if(location.search == "?about"){
                                    return (
                                        <About />
                                    )
                                }
                                else if(location.search == "?profile"){
                                    return (
                                        <Profile />
                                    )
                                }
                                else if(location.search == "?projects"){
                                    return (
                                        <Projects />
                                    )
                                    
                                }
                                else if(location.search == "?contact"){
                                    return (
                                        <Contact />
                                    )
                                }
                                else {
                                    return (
                                        <Home />
                                    )
                                }
                            }} 
                        />
                        
                    </Content>

                    <Footer style={{ padding: '0px 5px', textAlign: "center", color: "black" }}>
                        
                        Jay Pandya

                        <br />

                        <Space>
                            <GithubOutlined />
                            <MailOutlined />
                            <InstagramOutlined />
                            <LinkedinOutlined />
                            <Music />
                        </Space>
                       
                    </Footer>

                </Layout>
            </Router>
        )
    }
}

export default Main;