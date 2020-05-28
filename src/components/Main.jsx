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

import NavMenu from './NavMenu.jsx';
import TopIcon from './TopIcon.jsx';

console.log(`url(${window.location+"img/gradient.png"})`)

const Header = Layout.Header
const Content = Layout.Content
const Footer = Layout.Footer

class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Router basename={'/me'} >

                <Layout style={{ minHeight: "100vh" }}>

                    <Layout >
                    
                        <Affix offsetTop={0}>
                            <Header style={{ padding: '0px 0px', color: "white" }}>
                                
                                <TopIcon />
                                
                                <div style={{float: 'right', display: 'inline-block'}}>
                                    <NavMenu mode="horizontal" />  
                                </div>
                                                     
                            </Header>
                        </Affix>

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
                </Layout>
            </Router>
        )
    }
}

export default Main;