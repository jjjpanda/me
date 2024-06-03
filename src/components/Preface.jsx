import React, { forwardRef } from 'react'
import { Stack, Space, Text } from '@mantine/core'
import HoverLink from './HoverLink.jsx'

const Preface = forwardRef((props, ref) => {
    return <Stack ref={ref} px="xl">
        
        <Text>
            Hello! I'm Jay, a software engineer and financial engineer based in the NYC Metro area. 
            With nearly a decade of experience in tech, four years professionally and countless hours on personal projects, 
            I thrive on automating the mundane and crafting custom, minimalistic experiences that make life simpler.
        </Text>
        <Text>
            Currently at 
            <HoverLink 
                text=" JPMorgan Chase"
                baseColor={'var(--mantine-color-orange-2)'}
                endcolor={'var(--mantine-color-blue-2)'}
                onClick={() => props.sectionJump("workedu")} 
                span    
            />
            , I've migrated outdated UIs into React applications and enhanced our CI/CD pipelines with additional tests, 
            significantly improving deployment efficiency and reducing defects. Driven by perfectionism, simplicity, 
            and a passion for continuous learning, I'm always ready for the next big challenge.
        </Text>
        <Text>
            Outside of work, I spend time on side projects like creating a 
            <HoverLink 
                text=" microservices-based IP camera security system "
                link={"https://github.com/jjjpanda/Chimera"}
                baseColor={'var(--mantine-color-orange-2)'}
                endcolor={'var(--mantine-color-yellow-2)'}
                span    
            />
            or an 
            <HoverLink 
                text=" options profit/loss calculator"
                link={"https://github.com/jjjpanda/OutsmartOptions"}
                baseColor={'var(--mantine-color-orange-2)'}
                endcolor={'var(--mantine-color-green-2)'}
                span    
            />
            . I also extend my master's research in financial engineering to 
            analyze trade data and identify informed trades. But life isn't <Text fw={700} span>all</Text> about tech and finance; 
            I also love learning about topics ranging from 
            <HoverLink 
                text=" astrophysics "
                link={"https://www.nj.com/hudson/2016/04/jersey_city_liberty_science_center_experiment.html"}
                baseColor={'var(--mantine-color-white)'}
                endcolor={'var(--mantine-color-violet-3)'}
                span    
            />
            and engineering to theology and politics.
        </Text>
        <Text>
            When I'm not coding or learning, you might find me brewing kombucha, playing poker, or making 
            <HoverLink 
                text=" music "
                link={"https://soundcloud.com/whoamistupid"}
                baseColor={'var(--mantine-color-white)'}
                endcolor={'var(--mantine-color-white)'}
                span    
            /> 
            <Text c="dimmed" span> (like mashups that will never see the light of day due to copyright law)</Text>. Or I might be playing video games, 
            often in Hyrule, experimenting with glitches or 100%-ing (yes, that included all Korok seeds—<Text fw={700} span>in both games</Text>).
        </Text>
        <Space my="lg" />
        
    </Stack>
})

export default Preface