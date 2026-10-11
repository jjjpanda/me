import React, { forwardRef, useEffect, useState } from 'react'
import { Stack, Text, rem, Group, Divider, } from '@mantine/core'
import { IconChevronCompactDown } from '@tabler/icons-react'
import HoverLink from './HoverLink.jsx'
import { useWindowScroll } from '@mantine/hooks'

const Preface = forwardRef((props, ref) => {
    const [scroll] = useWindowScroll();
    const scrolledEnough = scroll.y > ref.current?.clientHeight * 0.33;

    const [timeToShowScrollMore, setTimeToShowScrollMore] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setTimeToShowScrollMore(() => true)
        }, 10000)
    }, [])
    
    const scrollText = (
        <Group
            justify='center' 
            gap='xs' 
            className={scrolledEnough ? 'scroll-indicator' : 'delayed-opacity'}
            style={{opacity: scrolledEnough ? 0 : (+timeToShowScrollMore)}}
        >
           <Text size={"sm"} c="grey">scroll for more</Text>
           <IconChevronCompactDown color="grey" stroke="1.25" style={{ width: rem(15), height: rem(15)}}/>
        </Group>
    )

    return <Stack ref={ref} px="xl">
        
        <Text>
            Hello! I'm Jay, a software engineer and financial engineer based in the NYC Metro area. 
            With over a decade of experience in tech, five years professionally and countless hours on personal projects, 
            I thrive on automating the mundane and crafting custom, minimalistic experiences that make life simpler.
        </Text>
        <Text>
            Now at <Text fw={700} span>Intuit</Text>, I'm working across a microfrontend architecture in TypeScript to grow QuickBooks. Previously at 
            <HoverLink 
                text=" Chase"
                baseColor={'var(--mantine-color-orange-2)'}
                endcolor={'var(--mantine-color-blue-2)'}
                onClick={() => props.sectionJump("workedu")} 
                span    
            />
            , I built identity verification flows for bank branches and call centers and modernized authentication UIs.
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
            . My master's in financial engineering covered topics like derivatives pricing and analyzing trade data for signals of informed trading. I don't just focus on tech and finance though; 
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

        {props.mobile ? null : scrollText}

        <Divider my="md"/>

    </Stack>
})

export default Preface