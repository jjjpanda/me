import React, {useState, useRef, useEffect} from 'react';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { Affix, AppShell, Box, Center, Grid } from '@mantine/core';
import TopIcon from './TopIcon.jsx';
import MiniMap from './MiniMap.jsx';

import "../css/aside.less"
import GiantSection from './GiantSection.jsx';
import WorkAndEducation from './WorkAndEducation.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Links from './Links.jsx';

const Main = (props) => {
    const leftColumnRef = useRef(null);
    const mainContentRef = useRef(null);
    const workEduContentRef = useRef(null);
    const projectContentRef = useRef(null);
    const contactContentRef = useRef(null);

    const [leftColumnStyle, setLeftColumnStyle] = useState({});
    const [sectionHeights, setSectionHeights] = useState([])

    useEffect(() => {
        if(leftColumnRef.current){
            setLeftColumnStyle(() => ({position: "fixed", width: leftColumnRef.current.clientWidth, height: leftColumnRef.current.clientHeight}))
        }
    }, [leftColumnRef])

    useEffect(() => {
        if(workEduContentRef.current && projectContentRef.current && contactContentRef){
            const heights = [
                {key: "workedu", value: workEduContentRef.current.clientHeight, title: "Work and Education"},
                {key: "project", value: projectContentRef.current.clientHeight, title: "Projects"},
                {key: "contact", value: contactContentRef.current.clientHeight, title: "Contact Me"}
            ]
            let sum = 0;
            for(let heightEntry of heights){
                heightEntry.height = sum;
                sum += heightEntry.value
            }
            setSectionHeights(() => heights)
        }
    }, [workEduContentRef, projectContentRef, contactContentRef])

    return <Router className="flex-container" >
        <AppShell
            layout="alt"
            padding="md"
            navbar={{ width: 90, breakpoint: 'xs'}}
            aside={{ width: 80, breakpoint: 'xs'}}
        >
            <AppShell.Navbar p="xs">
                <TopIcon icons={props.icons} style={{aspectRatio: "1/1", width: "100%"}} mobile/>
                <Center>
                    <MiniMap content={mainContentRef} sections={sectionHeights}/>
                </Center>
            </AppShell.Navbar>
            <AppShell.Main >
                <Grid>
                    <Grid.Col span={6} ref={leftColumnRef} >
                        <Box style={leftColumnStyle}>
                            
                            <About />
                            <Links />
                        </Box>
                      
                    </Grid.Col>
                    <Grid.Col span={6} >
                        <Box ref={mainContentRef}>
                            <WorkAndEducation ref={workEduContentRef}/>
                            <Projects ref={projectContentRef}/>
                            <Contact ref={contactContentRef}/>
                            <GiantSection />
                        </Box>
                    </Grid.Col>
                </Grid>
            </AppShell.Main>
            <AppShell.Aside p="xs" className='aside_with_galaxy' />
        </AppShell>
    </Router>
}

export default Main