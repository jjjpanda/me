import React, {useState} from 'react';
import {
    Layout,
    Affix,
} from 'antd'
import {
    BrowserRouter as Router,
    Route,
    Prompt
} from 'react-router-dom';

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

const Main = (props) => {
    const [render, setRender] = useState(true)

    return (
        <Router >
            
            <Layout style={{ minHeight: "100vh" }}>

                <Layout >
                    
                    <Affix offsetTop={0}>
                        <div className={"header"}>
                            <Header style={{ padding: '0px 0px', color: "white" }}>
                                
                                <TopIcon icons={props.icons}/>
                                
                                <div style={{float: 'right', display: 'inline-block'}}>
                                    <NavMenu updateParent={() => {setRender(true)}} mode='horizontal'/>  
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
                                else if(location.search == "?contact") return ( <Contact icons={props.icons}/> )
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

export default Main;