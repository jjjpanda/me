
import React from 'react'

import { Button, Card, Group, Image, Stack, Text, Title } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

/**
 * 
 *{
        title: "Chimera",
        images: [
            'img/projects/chimera/chimera_0.png',
            'img/projects/chimera/chimera_1.png',
            'img/projects/chimera/chimera_2.png',
            'img/projects/chimera/chimera_3.png',
            'img/projects/chimera/chimera_4.png'
        ],
        logo: "img/projects/chimera/chimera.png",
        tags: ["Mobile Web App", "HTML", "JavaScript", "Node.js", "ExpressJS", "CSS", "Less", "ReactJS", "Ant D", "IP Camera", "TMUX"],
        subtitle: "Motion Security Camera Dashboard",
        description: "A motion security camera dashboard and server system that works with Motion Project to save images and generate videos from IP cameras.",
        link: "https://www.github.com/jjjpanda/Chimera"
    }
 */

const Project = (props) => {
    const {project} = props
    const {title, images, tags, subtitle, description, link} = project

    return (<Card>
        <Card.Section>
            <Group justify='space-between'>
                <Title>
                    {title}
                </Title>
                <Button component='a' href={link} />
            </Group>
        </Card.Section>
        <Card.Section>
            <Carousel>
                {images.map(image => <Carousel.Slide>
                    <Image src={image} />
                </Carousel.Slide>)}
            </Carousel>
        </Card.Section>
        <Card.Section>
            <Stack>
                <Text>
                    {subtitle}
                </Text>
                <Text>
                    {description}
                </Text>
            </Stack>
        </Card.Section>
    </Card>)
}

export default Project