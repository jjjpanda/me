import React, {useState} from 'react';
import {
    WingBlank
} from 'antd-mobile';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Home from './Home.jsx'
import About from './About.jsx'
import Resume from './Resume.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

import MobileTopMenu from './MobileTopMenu.jsx'
import NavMenu from './NavMenu.jsx';
import FooterBar from './FooterBar.jsx'

const MobileMain = (props) => {
    const [render, setRender] = useState(true)

    return (
        <Router className="flex-container" >
            <MobileTopMenu icons={props.icons}/>

            <NavMenu updateParent={() => {setRender(true)}} mobile/>

            <WingBlank style={{minHeight: "100vh"}}>
                <Route 
                    path="/" 
                    render={({location}) => {
                        if(location.search == "?about") return ( <About mobile/> )
                        else if(location.search == "?resume") return ( <Resume mobile/> )
                        else if(location.search == "?projects") return ( <Projects mobile/> )
                        else if(location.search == "?contact") return ( <Contact mobile icons={props.icons}/> )
                        else return ( <Home mobile/> )
                    }} 
                />
            </WingBlank>

            <FooterBar mobile />
        </Router>
    )
}

export default MobileMain;