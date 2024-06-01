import React from 'react'
import { useHover } from '@mantine/hooks';
import { Card, Image, Text, Group, Transition, ColorSwatch, Stack, lighten } from '@mantine/core'

const SectionCard = (props) => {
    const { hovered, ref } = useHover();

    const imageMiniComponent = (cardContent) => (transitionStyle) => <Image
        src={cardContent.imageLink}
        h={cardContent.height}
        radius="lg"
        alt={cardContent.altText}
        style={{ ...transitionStyle, objectPosition: cardContent.objectPosition }}
    />

    return <Card
        key={`section-card-${props.section.key}`}
        radius={"lg"}
        onClick={() => {
            props.onClick(props.section.key)
        }}
        className='section-card'
        bg={hovered ? "var(--mantine-color-coal)" : lighten("var(--mantine-color-coal)", 0.05)}
        style={{overflow: "visible"}}
        ref={ref}
        withBorder={props.mobile}
    >
        <Stack justify='space-between' gap='xs'>
            <Card.Section>
                <Transition
                    mounted={props.section.active}
                    keepMounted
                    transition="fade-up"
                    duration={300}
                    exitDuration={50}
                    timingFunction="ease-out"
                >
                    {imageMiniComponent(props.section)}
                </Transition>
                <Transition
                    mounted={props.activeSection ? !props.section.active : true}
                    keepMounted
                    transition="fade-down"
                    duration={200}
                    exitDuration={0}
                    timingFunction="ease-out"
                >
                    {imageMiniComponent(props.section)}
                </Transition>
            </Card.Section>
            <Group justify="space-between" wrap="nowrap" >
                <Group justify='flex-start' gap="sm" wrap="nowrap">
                    {<props.section.icon 
                        stroke={hovered ? 2.25 : 1.75} 
                        color={hovered ? `var(--mantine-color-white)` : lighten(`var(--mantine-color-${props.section.key})`, 0.5)}
                    />}
                    <Text
                        c={hovered ? lighten(`var(--mantine-color-${props.section.key})`, 0.5) : `var(--mantine-color-white)`}
                    >
                        {props.section.title}
                    </Text>
                </Group>
                <ColorSwatch size={15} color={`var(--mantine-color-${props.section.key})`} />
            </Group>
        </Stack>
        
        
    </Card>
}

export default SectionCard