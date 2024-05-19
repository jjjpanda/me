import React from 'react'
import { useHover } from '@mantine/hooks';
import { Card, Image, Text, Group, Transition, ColorSwatch, Stack } from '@mantine/core'
import "../css/card.less"

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
        bg={hovered ? "var(--mantine-color-gray-9)" : "var(--mantine-color-coal)"}
        style={{overflow: "visible"}}
        ref={ref}
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
            <Group justify="space-between">
                {hovered ? <Text td="underline">
                    {props.section.title}
                </Text> : <Text>
                    {props.section.title}
                </Text>}
                <ColorSwatch size={15} color={`var(--mantine-color-${props.section.key})`} />
            </Group>
        </Stack>
        
        
    </Card>
}

export default SectionCard