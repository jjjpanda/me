
import React, {useState} from 'react'

import { Button, Card, Group, Image, Stack, Text, Title, ActionIcon } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { IconExternalLink } from '@tabler/icons-react';
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

const tagColor =  {
    "Android": "#9e1068",
    "iOS": "#9e1068",
    "Web App": "#9e1068",
    "Mobile Web App": "#9e1068",
    "PC App": "#9e1068",

    "HTML": "#a8071a",
    "XML": "#a8071a",
    
    "C": "#ad2102",
    "C++": "#ad2102",
    "C#": "#ad2102",

    "MATLAB": "#d46b08",
    "R": "#d46b08",

    "MongoDB": "#d48806",
    "Firebase": "#d48806",
    "mySQL": "#d48806",
    "Excel": "#d48806",

    "Java": "#5b8c00",

    "CSS": "#389e0d",
    "Less": "#389e0d",
    "SASS": "#389e0d",

    "Node.js": "#0050b3",
    "ExpressJS": "#0050b3",

    "ReactJS": "#1d39c4",
    "AngularJS": "#1d39c4",
    "VueJS": "#1d39c4",

    "Python": "#08979c",
    "Bash": "#08979c",

    "TypeScript": "#531dab",
    "JavaScript": "#531dab",
    "JSON": "#531dab",
    "PHP": "#531dab",
}

const Project = (props) => {
    const {project} = props
    const {title, images, tags, subtitle, description, link} = project
    const [embla, setEmbla] = useState(null);

    return (
        <Card key={`card-project-${title}`} >
            <Card.Section
                p={"lg"}
            >
                <Group justify='space-between'>
                    <Title order={3}>
                        {title}
                    </Title>
                    <ActionIcon
                        variant="transparent" 
                        color="var(--mantine-color-orange-4)"
                        component='a' 
                        target="_blank"
                        href={link}
                        aria-label={`Open a new tab for ${link}`}
                    >
                        <IconExternalLink />
                    </ActionIcon>
                </Group>
            </Card.Section>
            <Card.Section>
                <Carousel
                    loop
                    withIndicators
                    controlsOffset={"xs"}
                    height={"20rem"}
                    getEmblaApi={setEmbla}
                >
                    {images.map((image, index) => <Carousel.Slide key={`image-${title}-${index}`}> 
                        <Image  
                            onClick={() => {
                                embla?.scrollNext();
                            }}
                            h="100%"
                            radius="lg" 
                            src={image} 
                        />
                    </Carousel.Slide>)}
                </Carousel>
            </Card.Section>
            <Card.Section
                p={"lg"}
            >
                <Stack>
                    <Text>
                        {subtitle}
                    </Text>
                    <Text>
                        {description}
                    </Text>
                </Stack>
            </Card.Section>
        </Card>
    )
}

export default Project