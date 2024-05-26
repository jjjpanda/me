import React, { forwardRef } from 'react'
import { Timeline, Stack, Title, Divider } from '@mantine/core'
import { IconBriefcase, IconSparkles, IconVocabulary } from '@tabler/icons-react'
import HoverDarkeningIcon from './HoverDarkeningIcon.jsx'
import WorkAndEducationCard from './WorkAndEducationCard.jsx'

const workAndEducationJSON = [
    {
        "title": "JPMorgan Chase & Co",
        "location": "Jersey City",
        "time": "Aug 2021 - Present",
        "color": "green",
        "icon": IconBriefcase
    },
    {
        "title": "Got a Master of Science in Financial Engineering",
        "location": "Stevens Institute of Technology",
        "time": "May 2021",
        "color": "grey",
        "icon": IconVocabulary
    },
    {
        "title": "National Security Innovation Network",
        "location": "Remote",
        "time": "Oct 2020 - Feb 2021",
        "color": "green",
        "icon": IconBriefcase
    },
    {
        "title": "Started Masters in Financial Engineering",
        "location": "Stevens Institute of Technology",
        "time": "August 2020",
        "color": "grey",
        "icon": IconVocabulary
    },
    {
        "title": "Got Bachelors of Engineering in Software Engineering",
        "location": "Stevens Institute of Technology",
        "time": "May 2020",
        "color": "red",
        "icon": IconVocabulary
    },
    {
        "title": "Started trading options",
        "time": "April 2018"
    },
    {
        "title": "Started investing",
        "time": "November 2017"
    },
    {
        "title": "Software Engineering Internship",
        "location": "Nokia Bell Labs Murray Hill",
        "time": "June 2017 - August 2017",
        "color": "green",
        "icon": IconBriefcase
    },
    {
        "title": "Started Undergraduate Degree",
        "location": "Stevens Institute of Technology",
        "time": "August 2016",
        "color": "red",
        "icon": IconVocabulary
    },
    {
        "title": "Learned Java in AP Computer Science. Got a 5",
        "time": "May 2015"
    },
    {
        "title": "Started writing HTML and basic websites",
        "time": "July 2011"
    },
    {
        "title": "Touched a computer",
        "time": "2003"
    }
]


const WorkAndEducation = forwardRef((props, ref) => {
    
    return (
        <Stack ref={ref} px="xl">
            <Divider my="md" />

            <Title order={2}>
                Work and Education
            </Title>

            <Timeline 
                lineWidth={2} 
                bulletSize={30} 
            >
                {workAndEducationJSON.map((item, index) => {
                    return (
                        <Timeline.Item 
                            key={`timeline-item-${index}`}
                            bullet={<HoverDarkeningIcon size={29} icon={item.icon ?? IconSparkles} />} 
                        >
                            <WorkAndEducationCard item={item}/>
                        </Timeline.Item>
                    )
                })}
            </Timeline>
        </Stack>
    )
})

export default WorkAndEducation