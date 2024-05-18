import React, {useState, useRef, useEffect} from 'react';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { AppShell, Box, Center, Grid, Space, Stack } from '@mantine/core';
import TopIcon from './TopIcon.jsx';
import MiniMap from './MiniMap.jsx';

import "../css/aside.less"
import GiantSection from './GiantSection.jsx';
import WorkAndEducation from './WorkAndEducation.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import ExternalLinks from './ExternalLinks.jsx';
import SectionLinks from './SectionLinks.jsx';

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
                    <MiniMap content={mainContentRef} sections={sectionHeights}/> //sections only appear after scrolling past SectionLinks
                </Center>
            </AppShell.Navbar>
            <AppShell.Main >
                <Grid>
                    <Grid.Col span={6} ref={leftColumnRef} >
                        <Box style={leftColumnStyle}>
                            <Stack 
                                align="stretch"
                                justify="space-between"
                                gap="xs"
                                h={"90vh"}
                            >
                                <About />
                                <Grid>
                                    <Grid.Col span={8}>
                                        picutre
                                    </Grid.Col>
                                    <Grid.Col span={4}>
                                        <ExternalLinks />
                                    </Grid.Col>
                                </Grid>
                            </Stack>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={6} >
                        <Box ref={mainContentRef}>
                            <SectionLinks />
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