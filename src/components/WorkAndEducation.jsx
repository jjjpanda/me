import React, { forwardRef } from 'react'
import { Timeline, Space, Stack, Title, Divider, Group, Text } from '@mantine/core'
import { IconBriefcase, IconSparkles, IconVocabulary } from '@tabler/icons-react'
import HoverDarkeningIcon from './HoverDarkeningIcon.jsx'
import WorkAndEducationCard from './WorkAndEducationCard.jsx'

const workAndEducationJSON = [
    {
        "title": "JPMorgan Chase & Co",
        "location": "Jersey City",
        "time": "Aug 2021 - Present",
        "icon": IconBriefcase
    },
    {
        "title": "Master of Science in Financial Engineering",
        "location": "Stevens Institute of Technology",
        "time": "May 2021",
        "icon": IconVocabulary
    },
    {
        "title": "National Security Innovation Network",
        "location": "Remote",
        "time": "Oct 2020 - Feb 2021",
        "icon": IconBriefcase
    },
    {
        "title": "Bachelor of Engineering in Software Engineering",
        "location": "Stevens Institute of Technology",
        "time": "May 2020",
        "icon": IconVocabulary
    },
    {
        "title": "Software Engineering Internship",
        "location": "Nokia Bell Labs Murray Hill",
        "time": "June 2017 - August 2017",
        "icon": IconBriefcase
    },
    {
        "title": "Learned Java in AP Computer Science. Got a 5",
        "mini": true,
        "time": "May 2015"
    },
    {
        "title": "Started writing HTML and basic websites",
        "mini": true,
        "time": "July 2011"
    },
    {
        "title": "Touched a computer",
        "mini": true,
        "time": "2003"
    }
]


const WorkAndEducation = forwardRef((props, ref) => {
    
    return (
        <Stack ref={ref} px="xl">
            <Divider my="md" />
            <Space my="lg" />

            <Title order={2}>
                Work & Education
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
                            {
                                item.mini ?
                                    <Group>
                                        <Text>{item.title}</Text>
                                        <Text c="dimmed" size="sm">
                                            {item.time}
                                        </Text>
                                    </Group> :
                                    <WorkAndEducationCard item={item} /> 
                            }
                        </Timeline.Item>
                    )
                })}
            </Timeline>

            <Space my="lg" />
        </Stack>
    )
})

export default WorkAndEducation