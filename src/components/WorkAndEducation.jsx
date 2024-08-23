import React, { forwardRef } from 'react'
import { Timeline, Space, Stack, Title, Group, Text} from '@mantine/core'
import { IconBriefcase, IconSparkles, IconVocabulary } from '@tabler/icons-react'
import HoverDarkeningIcon from './HoverDarkeningIcon.jsx'
import WorkAndEducationCard from './WorkAndEducationCard.jsx'
import ResumeCardLink from './ResumeCardLink.jsx'


const workAndEducationJSON = [
    {
        "title": "JPMorgan Chase & Co",
        "location": "Jersey City",
        "time": "Aug 2021 - Present",
        "icon": IconBriefcase,
        "description": "I've worked on the modernization of Chase authentication systems. This includes migrating legacy UIs to React and optimizing the firm's microservices architecture. I've also implemented comprehensive testing strategies, significantly enhancing code quality and deployment efficiency."
    },
    {
        "title": "Master of Science in Financial Engineering",
        "location": "Stevens Institute of Technology",
        "time": "May 2021",
        "icon": IconVocabulary,
        "description": "My degree covered stuff like stochastic calculus, derivatives pricing, and algorithmic trading strategies. This equipped me with the tools to analyze complex financial systems and market dynamics."
    },
    {
        "title": "National Security Innovation Network",
        "location": "Remote",
        "time": "Oct 2020 - Feb 2021",
        "icon": IconBriefcase,
        "description": "During my time with the NSIN, I developed a mobile application for the Department of Defense. The app, designed to assist injured Army Rangers with physical therapy, presented unique challenges in combining advanced technology with practical rehabilitation needs."
    },
    {
        "title": "Bachelor of Engineering in Software Engineering",
        "location": "Stevens Institute of Technology",
        "time": "May 2020",
        "icon": IconVocabulary,
        "description": "Graduated with high honors, it laid a strong foundation for my tech skills; it covered crucial areas such as object-oriented design, data structures, and software testing methodologies."
    },
    {
        "title": "Software Engineering Internship",
        "location": "Nokia Bell Labs Murray Hill",
        "time": "June 2017 - August 2017",
        "icon": IconBriefcase,
        "description": "Bell Labs introduced me to the intersection of robotics and voice recognition. I implemented voice control for a Turtlebot, integrating it with ongoing facial recognition research."
    },
    {
        "title": "Learned Java in high school AP Computer Science. Got a 5",
        "mini": true,
        "time": "May 2015"
    },
    {
        "title": "Started writing HTML and making basic websites",
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

            <Space my="md" />

            <Group justify='flex-start'>
               <ResumeCardLink mobile={props.mobile}/>
            </Group>

            <Space my="lg" />
        </Stack>
    )
})

export default WorkAndEducation