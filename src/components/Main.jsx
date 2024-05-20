import React, {useState, useRef, useEffect, useCallback} from 'react';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { AppShell, Box, Center, Grid, Space, Stack, VisuallyHidden } from '@mantine/core';
import { useWindowEvent, useWindowScroll  } from '@mantine/hooks';
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
    const prefaceContentRef = useRef(null);
    const workEduContentRef = useRef(null);
    const projectContentRef = useRef(null);
    const contactContentRef = useRef(null);

    const [scroll, scrollTo] = useWindowScroll();

    const [leftColumnStyle, setLeftColumnStyle] = useState({});
    const [sectionHeights, setSectionHeights] = useState([])
    
    const updateLeftColumnFixedPosition = useCallback(() => {
        if(leftColumnRef.current){
            setLeftColumnStyle(() => ({
                position: "fixed", 
                width: leftColumnRef.current.clientWidth, 
                height: leftColumnRef.current.clientHeight,
                padding: "var(--grid-col-padding)"
            }))
        }
    }, [leftColumnRef])

    const updateSectionHeights = useCallback(() => {
        if(prefaceContentRef.current && workEduContentRef.current && projectContentRef.current && contactContentRef){
            const heights = [
                {key: "workedu", value: workEduContentRef.current.clientHeight, title: "Work and Education"},
                {key: "project", value: projectContentRef.current.clientHeight, title: "Projects"},
                {key: "contact", value: contactContentRef.current.clientHeight, title: "Contact Me"}
            ]
            let sum = prefaceContentRef.current.clientHeight; // one extra pixel to start 
            for(let heightEntry of heights){
                heightEntry.height = sum;
                sum += heightEntry.value
            }
            setSectionHeights(() => heights)
        }
    }, [prefaceContentRef, workEduContentRef, projectContentRef, contactContentRef])

    useEffect(updateLeftColumnFixedPosition, [leftColumnRef])
    useWindowEvent("resize", updateLeftColumnFixedPosition)

    useEffect(updateSectionHeights, [prefaceContentRef, workEduContentRef, projectContentRef, contactContentRef])
    useWindowEvent("resize", updateSectionHeights)

    console.log("section scrolling", scroll, sectionHeights)

    const handleSectionJump = useCallback((sectionKey) => {
        if(sectionHeights.length > 0){
            scrollTo({x: 0, y: sectionHeights.find(section => section.key === sectionKey).height + 1})
        }
    }, [prefaceContentRef, activeSection, sectionHeights])

    const isActiveSectionPossible = sectionHeights.length > 0 && scroll.y > 0;
    let activeSection;
    if(isActiveSectionPossible){
        activeSection = sectionHeights.reduce((possibleKey, currentSection) => {
            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            if(scroll.y > currentSection.height - windowHeight/3){ //66% of scroll box is within section
                return currentSection.key
            }
            else{
                return possibleKey
            }
        }, null)
    }

    return <Router className="flex-container" >
        <AppShell
            layout="alt"
            padding="md"
            navbar={{ width: 90, breakpoint: 'xs'}}
            aside={{ width: 60, breakpoint: 'xs'}}
        >
            <AppShell.Navbar p="xs">
                <TopIcon icons={props.icons} style={{aspectRatio: "1/1", width: "100%"}}/>
                <Center>
                    <MiniMap content={mainContentRef} sections={sectionHeights}/> 
                    <VisuallyHidden>
                        sections only appear after scrolling past SectionLinks
                    </VisuallyHidden>
                </Center>
            </AppShell.Navbar>
            <AppShell.Main >
                <Grid>
                    <Grid.Col span={5} ref={leftColumnRef} p={0} >
                        <Box style={leftColumnStyle}>
                            <Stack 
                                align="center"
                                justify="space-between"
                                gap="sm"
                                h={"95vh"}
                                w="100%"
                            >
                                <About />

                                <SectionLinks 
                                    activeSection={activeSection}
                                    onClick={handleSectionJump}
                                />

                                <ExternalLinks />
                            </Stack>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={7} >
                        <Box ref={mainContentRef}>
                            <GiantSection ref={prefaceContentRef}/>
                            <WorkAndEducation ref={workEduContentRef}/>
                            <Projects ref={projectContentRef}/>
                            <Contact ref={contactContentRef}/>
                        </Box>
                    </Grid.Col>
                </Grid>
            </AppShell.Main>
            <AppShell.Aside p="xs" className='aside_with_galaxy' />
        </AppShell>
    </Router>
}

export default Main