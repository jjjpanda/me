import React from 'react';
import {
    Button,
    Layout,
    Affix,
    Space,
    Drawer,
    Popover,
    Typography
} from 'antd'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Prompt
} from 'react-router-dom';
import {
    GithubOutlined,
    MailOutlined,
    LinkedinOutlined,
    InstagramOutlined,
    PlayCircleOutlined
} from '@ant-design/icons'

import Home from './Home.jsx'
import About from './About.jsx'
import Resume from './Resume.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

import NavMenu from './NavMenu.jsx';
import TopIcon from './TopIcon.jsx';
import FooterBar from './FooterBar'

const Header = Layout.Header
const Content = Layout.Content

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
                            <div className={"header"}>
                                <Header style={{ padding: '0px 0px', color: "white" }}>
                                    
                                    <TopIcon />
                                    
                                    <div style={{float: 'right', display: 'inline-block'}}>
                                        <NavMenu mode="horizontal" />  
                                    </div>
                                                        
                                </Header>
                            </div>
                        </Affix>

                        <Content style={{ padding: '5px 20px' }}>
                            
                            <Route 
                                path="/" 
                                render={({location}) => {
                                    if(location.search == "?about") return ( <About /> )
                                    else if(location.search == "?resume") return ( <Resume /> )
                                    else if(location.search == "?projects") return ( <Projects /> )
                                    else if(location.search == "?contact") return ( <Contact /> )
                                    else return ( <Home /> )
                                }} 
                            />
                            
                        </Content>

                        <FooterBar />

                    </Layout>
                </Layout>
            </Router>
        )
    }
}

export default Main;