import { Card, Stack, Image, Text, Group, Transition, ColorSwatch } from '@mantine/core'
import React from 'react'

const SectionLinks = (props) => {
    const {activeSection} = props
    console.log("ACTIVE SECTION", activeSection)

    const cardContents = [
        {
            key: "workedu",
            imageLink: "img/water.png",
            height: "4vh",
            altText: "bruh",
            title: "Work and Education",
            objectPosition: "100% 25%",
            active: false
        },
        {
            key: "project",
            imageLink: "img/stonks.png",
            height: "4vh",
            altText: "bruh",
            title: "Projects",
            objectPosition: "100% 33%",
            active: false
        },
        {
            key: "contact",
            imageLink: "img/cards.png",
            height: "4vh",
            altText: "bruh",
            title: "Contact Me",
            objectPosition: "100% 30%",
            active: false
        }
    ] 

    for(let section of cardContents){
        if(activeSection){
            if(activeSection === section.key){
                section.height= "17vh"
                section.active = true
            }
        }
    }

    const imageMiniComponent = (cardContent) => (transitionStyle) => <Image
        src={cardContent.imageLink}
        h={cardContent.height}
        radius="lg"
        alt={cardContent.altText}
        style={{ ...transitionStyle, objectPosition: cardContent.objectPosition }}
    />

    return <Stack
        align="stretch"
        justify="space-between"
        gap="sm"
        w="100%"
    >
        {cardContents.map((section) => {
            return <Card
                key={`section-card-${section.key}`}
                radius={"lg"}
                onClick={() => {
                    props.onClick(section.key)
                }}
                bg={"var(--mantine-color-coal)"}
            >
                <Stack justify='space-between' gap='xs'>
                    <Card.Section>
                        <Transition
                            mounted={section.active}
                            keepMounted
                            transition="fade-up"
                            duration={300}
                            exitDuration={50}
                            timingFunction="ease-out"
                        >
                            {imageMiniComponent(section)}
                        </Transition>
                        <Transition
                            mounted={activeSection ? !section.active : true}
                            keepMounted
                            transition="fade-down"
                            duration={200}
                            exitDuration={0}
                            timingFunction="ease-out"
                        >
                            {imageMiniComponent(section)}
                        </Transition>
                    </Card.Section>
                    <Group justify="space-between">
                        <Text >
                            {section.title}
                        </Text>
                        <ColorSwatch size={15} color={`var(--mantine-color-${section.key})`} />
                    </Group>
                </Stack>
                
                
            </Card>
        })}
        
    </Stack>
}

export default SectionLinks