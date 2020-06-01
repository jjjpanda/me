import React from 'react';
import {
    NavBar,
    WingBlank,
    TabBar
} from 'antd-mobile';
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
import Profile from './Profile.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

import TopIcon from './TopIcon.jsx'
import NavMenu from './NavMenu.jsx';
import FooterBar from './FooterBar.jsx'

class MobileMain extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Router basename={'/me'} className="flex-container" >
                <NavBar 
                    mode={"dark"}
                    leftContent={<div style={{height: "inherit"}}> <TopIcon mobile /> </div>}
                />

                <NavMenu mobile/>

                <WingBlank style={{minHeight: "100vh"}}>
                    <Route 
                        path="/" 
                        render={({location}) => {
                            if(location.search == "?about") return ( <About /> )
                            else if(location.search == "?profile") return ( <Profile /> )
                            else if(location.search == "?projects") return ( <Projects /> )
                            else if(location.search == "?contact") return ( <Contact /> )
                            else return ( <Home mobile/> )
                        }} 
                    />
                </WingBlank>

                <FooterBar mobile />
            </Router>
        )
    }
}

export default MobileMain;