import React from 'react';
import { useLocation } from "react-router-dom"

import Home from './Home.jsx'
import About from './About.jsx'
import Resume from './Resume.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

const Page = (props) => {
    const location = useLocation()

    switch(location.search){
        case "?about":
            return <About mobile={props.mobile}/>
        case "?resume":
            return <Resume mobile={props.mobile}/>
        case "?contact":
            return <Contact mobile={props.mobile} icons={props.icons}/>
        default: 
            return <Home mobile={props.mobile}/>
    }
}

export default Page