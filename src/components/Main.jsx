import React, {useRef} from 'react';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { AppShell, Box, Center, Grid, Stack, VisuallyHidden } from '@mantine/core';
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
            navbar={{ width: 60, breakpoint: 'xs'}}
            aside={{ width: 90, breakpoint: 'xs'}}
        >
            <AppShell.Navbar p={0} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <Box 
                    p="xs" 
                    style={{ 
                        backgroundColor: 'var(--mantine-color-body, #000)', 
                        zIndex: 2,
                        width: '100%',
                        borderBottom: '1px solid var(--mantine-color-dark-7, rgba(255, 255, 255, 0.08))'
                    }}
                >
                    <TopIcon icons={props.icons} style={{aspectRatio: "1/1", width: "100%"}}/>
                </Box>
                <Box 
                    className='aside_with_galaxy' 
                    style={{ 
                        flex: 1, 
                        width: '100%', 
                        height: '100%' 
                    }} 
                />
            </AppShell.Navbar>
            <AppShell.Main >
                <Grid>
                    <Grid.Col span={4.5} ref={leftColumnRef} p={0} >
                        <Box style={leftColumnStyle} px="xl">
                            <Stack 
                                align="center"
                                justify="space-between"
                                gap="sm" 
                                px="xl"
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
                    <Grid.Col span={7.5} p="xl">
                        <Box ref={mainContentRef} px="xl">
                            <Preface ref={prefaceContentRef} sectionJump={handleSectionJump}/>
                            <WorkAndEducation ref={workEduContentRef}/>
                            <Projects ref={projectContentRef}/>
                            <Contact ref={contactContentRef}/>
                        </Box>
                    </Grid.Col>
                </Grid>
            </AppShell.Main>
            <AppShell.Aside p="xs">
                <Center>
                    <MiniMap content={mainContentRef} sections={sectionHeights}/> 
                    <VisuallyHidden>
                        sections only appear after scrolling past SectionLinks
                    </VisuallyHidden>
                </Center>
            </AppShell.Aside>
        </AppShell>
    </Router>
}

export default Main