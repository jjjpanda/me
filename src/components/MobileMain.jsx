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
    Prompt,
    Redirect
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

import MobileTopMenu from './MobileTopMenu.jsx'
import NavMenu from './NavMenu.jsx';
import FooterBar from './FooterBar.jsx'

class MobileMain extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            render : true
        }
    }

    render() {
        return (
            <Router basename={'/me'} className="flex-container" >
                <MobileTopMenu />

                <NavMenu updateParent={() => {this.setState(() => ({render: true}))}} mobile/>

                <WingBlank style={{minHeight: "100vh"}}>
                    <Route 
                        path="/" 
                        render={({location}) => {
                            if(location.search == "?about") return ( <About mobile/> )
                            else if(location.search == "?resume") return ( <Resume mobile/> )
                            else if(location.search == "?projects") return ( <Projects mobile/> )
                            else if(location.search == "?contact") return ( <Contact mobile/> )
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