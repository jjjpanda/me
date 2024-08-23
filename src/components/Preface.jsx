import React, { forwardRef } from 'react'
import { Stack, Space, Text, Divider, rem, Group, Transition } from '@mantine/core'
import { IconChevronCompactDown } from '@tabler/icons-react'
import HoverLink from './HoverLink.jsx'
import { useWindowScroll } from '@mantine/hooks'

const Preface = forwardRef((props, ref) => {
    const [scroll] = useWindowScroll();

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
            analyze trade data and identify informed trades. I don't just focus on tech and finance though; 
            I love learning about topics ranging from 
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
            <Text c="dimmed" span> (like mashups that will never see the light of day due to copyright law)</Text>. Or I might be exploring Hyrule, replicating bugs and experimenting with glitches.
        </Text>
        <Space my="xs" />
        <Group 
            justify='center' 
            gap='xs' 
            className='scroll-indicator'
            style={{opacity: scroll.y > ref.current?.clientHeight * 0.50 ? 0 : 1}}
        >
            <IconChevronCompactDown style={{ width: rem(22), height: rem(22)}}/>
            <IconChevronCompactDown style={{ width: rem(22), height: rem(22)}}/>
            <IconChevronCompactDown style={{ width: rem(22), height: rem(22)}}/>
        </Group>
        <Divider my="md"/>
    </Stack>
})

export default Preface