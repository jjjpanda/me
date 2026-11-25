import React, { forwardRef, useEffect, useState } from 'react'
import { ActionIcon, Box, Stack, Text, Title, rem, Group, Divider, } from '@mantine/core'
import { IconChevronCompactDown, IconChevronLeft, IconChevronRight, IconPointFilled } from '@tabler/icons-react'
import HoverLink from './HoverLink.jsx'
import { useWindowScroll } from '@mantine/hooks'

const simulations = [
    {
        name: 'cosmordial',
        description: 'a simulation of gravity, matter, and evolving cells',
        href: 'https://jjjpanda.github.io/cosmordial/',
        src: 'https://jjjpanda.github.io/cosmordial/embed/?preset=binary&speed=48&transparent=true'
    },
    {
        name: 'symbiosim',
        description: 'an interactive kombucha fermentation simulation',
        href: 'https://jjjpanda.github.io/symbiosim/',
        src: 'https://jjjpanda.github.io/symbiosim/embed/?preset=balanced&theme=dark&speed=12&transparent=true'
    },
    {
        name: 'logocausal',
        description: 'logic gates that feed, divide, rewire, and form feedback loops',
        href: 'https://jjjpanda.github.io/logocausal/',
        src: 'https://jjjpanda.github.io/logocausal/embed/?theme=dark&speed=8&transparent=true'
    },
    {
        name: 'kyonami',
        description: 'a quantum wave/particle simulation',
        href: 'https://jjjpanda.github.io/kyonami/',
        src: 'https://jjjpanda.github.io/kyonami/embed/?preset=causal-crystal&theme=cyber&autoplay=true&transparent=true'
    },
    {
        name: 'hearsay',
        description: 'a synthetic order-book market with informed traders',
        href: 'https://jjjpanda.github.io/hearsay/',
        src: 'https://jjjpanda.github.io/hearsay/embed/?preset=balanced&theme=dark&speed=16&transparent=true'
    }
];

let savedSlide = Math.floor(Math.random() * simulations.length)

const Preface = forwardRef((props, ref) => {
    const [scroll] = useWindowScroll();
    const scrolledEnough = scroll.y > ref.current?.clientHeight * 0.33;

    const [activeSlide, setActiveSlide] = useState(savedSlide)
    useEffect(() => { savedSlide = activeSlide }, [activeSlide])
    const simulation = simulations[activeSlide]
    const step = (delta) => setActiveSlide(i => (i + delta + simulations.length) % simulations.length)
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

    const simulationFigure = (
        <Box component="figure" className="simulation">
            <iframe
                key={simulation.name}
                className="simulation__frame"
                src={simulation.src}
                title={`${simulation.name}: ${simulation.description}`}
                allowFullScreen
            />
            <Box component="figcaption" mt="xs">
                <Text size="xs" c="dimmed">{simulation.description}</Text>
                <Group justify="space-between" mt={4} gap="xs">
                    <Group gap={2} className="simulation__nav">
                        <ActionIcon variant="transparent" size="sm" onClick={() => step(-1)} aria-label="previous simulation">
                            <IconChevronLeft style={{ width: rem(14), height: rem(14) }} />
                        </ActionIcon>
                        {simulations.map((s, i) => (
                            <ActionIcon
                                key={s.name}
                                variant="transparent"
                                size="xs"
                                data-active={i === activeSlide || undefined}
                                onClick={() => setActiveSlide(i)}
                                aria-label={s.name}
                            >
                                <IconPointFilled style={{ width: rem(12), height: rem(12) }} />
                            </ActionIcon>
                        ))}
                        <ActionIcon variant="transparent" size="sm" onClick={() => step(1)} aria-label="next simulation">
                            <IconChevronRight style={{ width: rem(14), height: rem(14) }} />
                        </ActionIcon>
                    </Group>
                    <HoverLink
                        text={`explore ${simulation.name}`}
                        link={simulation.href}
                        rel="noreferrer"
                        size="xs"
                        td="underline"
                        baseColor={'var(--mantine-color-orange-2)'}
                        endcolor={'var(--mantine-color-red-3)'}
                    />
                </Group>
            </Box>
        </Box>
    )

    return <Stack ref={ref} px="xl">
        {!props.mobile && simulationFigure}
        <Title order={2}>About me</Title>
        <Text>
            Hello! I'm Jay, a software engineer based in the East Coast. 
            With over a decade of experience in tech, more than five years professionally and countless hours on personal projects, 
            I thrive on automating the mundane and crafting custom, minimalistic experiences that make life simpler.
        </Text>
        <Text>
            Now at{' '}
            <HoverLink
                text="Intuit"
                baseColor={'var(--mantine-color-orange-2)'}
                endcolor={'var(--mantine-color-blue-2)'}
                onClick={() => props.sectionJump("workedu")}
                span
            />
            , I'm working across a microfrontend architecture in TypeScript to grow QuickBooks. Previously at Chase, I built identity verification flows for bank branches and call centers and modernized authentication UIs.
        </Text>
        <Text>
            It's not all{' '}
            <HoverLink
                text="tech and finance and side projects"
                baseColor={'var(--mantine-color-orange-2)'}
                endcolor={'var(--mantine-color-project)'}
                onClick={() => props.sectionJump("project")}
                span
            />
            ! I love learning about astrophysics, quantum mechanics, engineering, history of religion, and linguistics, and philosophy, and theories of consciousness. Think stuff like YouTube videos about black holes, lectures on philosophical idealism, or how blue LEDs are made, or visualizations of lambda calculus, or arbitrary code execution in Ocarina of Time speedruns, or derivatives pricing. Wait, that's tech and finance again, whoops!
        </Text>
        <Text>
            Besides all of that, I might also be brewing kombucha or making{' '}
            <HoverLink
                text="music"
                link={"https://soundcloud.com/whoamistupid"}
                baseColor={'var(--mantine-color-white)'}
                endcolor={'var(--mantine-color-white)'}
                span
            />{' '}
            <Text c="dimmed" span>(like mashups that will never see the light of day due to copyright law)</Text>. Or I might be playing poker (maybe a combo of go-fish and texas hold'em), listening to 80s Japanese city-pop, or maybe just playing Tetris.
        </Text>
        {props.mobile && simulationFigure}

        {props.mobile ? null : scrollText}

        <Divider my="md"/>

    </Stack>
})

export default Preface
