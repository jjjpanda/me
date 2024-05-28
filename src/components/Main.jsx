import React, {useRef} from 'react';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { AppShell, Box, Center, Grid, Space, Stack, VisuallyHidden } from '@mantine/core';
import TopIcon from './TopIcon.jsx';
import MiniMap from './MiniMap.jsx';

import Preface from './Preface.jsx';
import WorkAndEducation from './WorkAndEducation.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import ExternalLinks from './ExternalLinks.jsx';
import SectionLinks from './SectionLinks.jsx';
import useFixedLeftColumn from '../hooks/useFixedLeftColumn.jsx';
import useSectionHeights from '../hooks/useSectionHeights.jsx';

const Main = (props) => {
    const mainContentRef = useRef(null);
    const prefaceContentRef = useRef(null);
    const workEduContentRef = useRef(null);
    const projectContentRef = useRef(null);
    const contactContentRef = useRef(null);

    const [leftColumnRef, leftColumnStyle] = useFixedLeftColumn();
    const [activeSection, sectionHeights, handleSectionJump] = useSectionHeights([
        {key: "preface", ref: prefaceContentRef, title: "Preface"}, 
        {key: "workedu", ref: workEduContentRef, title: "Work & Education"}, 
        {key: "project", ref: projectContentRef, title: "Projects"}, 
        {key: "contact", ref: contactContentRef, title: "Contact Me"}
    ])

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
                                h={"85vh"}
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
                    <Grid.Col span={7} p="xl">
                        <Box ref={mainContentRef}>
                            <Preface ref={prefaceContentRef}/>
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