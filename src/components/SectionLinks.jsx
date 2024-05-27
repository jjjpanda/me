import { Stack } from '@mantine/core'
import React from 'react'
import SectionCard from './SectionCard.jsx'
import { IconBriefcase, IconBulb, IconMail } from '@tabler/icons-react'

const SectionLinks = (props) => {
    const {activeSection} = props
    console.log("ACTIVE SECTION", activeSection)

    const cardContents = [
        {
            key: "workedu",
            imageLink: "img/water.png",
            icon: IconBriefcase,
            height: props.mobile ? "20vh" : "4vh",
            altText: "bruh",
            title: "Work and Education",
            objectPosition: "100% 25%",
            active: false
        },
        {
            key: "project",
            imageLink: "img/stonks.png",
            icon: IconBulb,
            height: props.mobile ? "20vh" : "4vh",
            altText: "bruh",
            title: "Projects",
            objectPosition: "100% 31%",
            active: false
        },
        {
            key: "contact",
            imageLink: "img/cards.png",
            icon: IconMail,
            height: props.mobile ? "20vh" : "4vh",
            altText: "bruh",
            title: "Contact Me",
            objectPosition: "100% 30%",
            active: false
        }
    ] 

    for(let section of cardContents){
        if(activeSection){
            if(activeSection === section.key){
                section.height= "17vh"
                section.active = true
            }
        }
    }

    return <Stack
        align="stretch"
        justify="space-between"
        gap="sm"
        w="100%"
        px="xl"
    >
        {cardContents.map((section) => {
            return <SectionCard 
                key={`section-card-${section.key}`}
                section={section}
                onClick={props.onClick}
                activeSection={activeSection}
            />
        })}
        
    </Stack>
}

export default SectionLinks