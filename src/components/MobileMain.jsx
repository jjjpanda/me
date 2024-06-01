import React, {useRef} from 'react';
import { AppShell, Burger, Center, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import TopIcon from './TopIcon.jsx';

import {
    BrowserRouter as Router,
} from 'react-router-dom';
import ExternalLinks from './ExternalLinks.jsx';
import About from './About.jsx';
import Preface from './Preface.jsx';
import WorkAndEducation from './WorkAndEducation.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import SectionLinks from './SectionLinks.jsx';
import useSectionHeights from '../hooks/useSectionHeights.jsx';

const MobileMain = (props) => {
    const aboutContentRef = useRef(null);
    const prefaceContentRef = useRef(null);
    const workEduContentRef = useRef(null);
    const projectContentRef = useRef(null);
    const contactContentRef = useRef(null);

    const [opened, { toggle }] = useDisclosure();
    const [activeSection, sectionHeights, handleSectionJump] = useSectionHeights([
        {key: "about", ref: aboutContentRef, title: "About"},
        {key: "preface", ref: prefaceContentRef, title: "Preface"}, 
        {key: "workedu", ref: workEduContentRef, title: "Work & Education"}, 
        {key: "project", ref: projectContentRef, title: "Projects"}, 
        {key: "contact", ref: contactContentRef, title: "Contact Me"}
    ], true)

    console.log("section heights mobile", activeSection, sectionHeights)

    return <Router className="flex-container" >
        <AppShell
            header={{ height: { base: 60, md: 70, lg: 80 } }}
            aside={{
                breakpoint: '10000',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group justify="space-between" h="100%" px="md">
                    <TopIcon icons={props.icons} style={{aspectRatio: "1/1", height: "inherit"}} mobile/>
                    <Burger 
                        opened={opened} 
                        color={opened ? "var(--mantine-color-red-4)" : "var(--mantine-color-orange-2)"}
                        onClick={toggle} 
                        size="sm" 
                    />
                </Group>
            </AppShell.Header>
            <AppShell.Aside p="md">
                <Center h={"100%"}>
                    <SectionLinks 
                        mobile
                        onClick={(e) => {
                            handleSectionJump(e) 
                            toggle()
                        }}
                    />
                </Center>
            </AppShell.Aside>
            <AppShell.Main>
                <About ref={aboutContentRef} mobile />
                <Preface ref={prefaceContentRef} />
                <WorkAndEducation ref={workEduContentRef} mobile />
                <Projects ref={projectContentRef} mobile/>
                <Contact ref={contactContentRef} mobile />
            </AppShell.Main>
            
            <AppShell.Footer>
                <Center>
                    <ExternalLinks mobile />   
                </Center>
            </AppShell.Footer>
        </AppShell>
    </Router>
}

export default MobileMain