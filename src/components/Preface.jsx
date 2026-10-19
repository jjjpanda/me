import React, { forwardRef, useEffect, useState } from 'react'
import { Anchor, Box, Stack, Text, Title, rem, Group, Divider, } from '@mantine/core'
import { IconChevronCompactDown } from '@tabler/icons-react'
import HoverLink from './HoverLink.jsx'
import { useWindowScroll } from '@mantine/hooks'

const simulations = [
    {
        name: 'Cosmordial',
        title: 'Cosmordial: a simulation of gravity, matter, and evolving cells',
        href: 'https://jjjpanda.github.io/cosmordial/',
        src: 'https://jjjpanda.github.io/cosmordial/embed/?preset=binary&theme=amber&speed=12&transparent=true'
    },
    {
        name: 'Symbiosim',
        title: 'Symbiosim: an interactive kombucha fermentation simulation',
        href: 'https://jjjpanda.github.io/symbiosim/',
        src: 'https://jjjpanda.github.io/symbiosim/embed/?preset=balanced&theme=dark&speed=12&transparent=true'
    }
];

// Choose once per page load, including across desktop/mobile layout changes.
const simulation = simulations[Math.floor(Math.random() * simulations.length)];

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
        <Box component="figure" className="simulation">
            <iframe
                className="simulation__frame"
                src={simulation.src}
                title={simulation.title}
                allowFullScreen
            />
            <Text component="figcaption" size="xs" c="dimmed" ta="right" mt="xs">
                <Anchor href={simulation.href} target="_blank" rel="noreferrer" size="xs" c="dimmed">
                    Explore {simulation.name}
                </Anchor>
            </Text>
        </Box>

        <Title order={2}>About me</Title>
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
                text=" astrophysics"
                link={"https://www.nj.com/hudson/2016/04/jersey_city_liberty_science_center_experiment.html"}
                baseColor={'var(--mantine-color-white)'}
                endcolor={'var(--mantine-color-violet-3)'}
                span    
            />
            , quantum mechanics, and engineering to theology and politics.
        </Text>
        <Text>
            A typical workday starts with getting ready, coding through stand-up, and catching up on emails about
            production issues. Protein bars fuel pull request reviews before I get in the zone closing Jira tickets.
            On the drive home, I switch between podcasts about the philosophy of religion and 80s Japanese city-pop.
            Dinner often comes with a deep dive into black holes, how blue LEDs are made, or arbitrary code execution
            in an Ocarina of Time speedrun. Then it's time for Coding After Dark: refactoring a likelihood estimation
            function, chasing a stubborn bug, or following an idea until sleep finally wins. Sometimes even my dreams
            are about code, math, or quantum mechanics.
        </Text>
        <Text>
            Weekends might start with breakfast over broken code and brewing tea for my kombucha SCOBY at the
            fermentation station. I try to get away from my desk, but a eureka moment for some code or a funny idea
            for a song can pull me back into a side project for the afternoon and late into the night.
            When I'm not coding or learning, you might find me playing poker or making
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
