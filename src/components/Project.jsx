
import React, {useState} from 'react'

import { Card, Group, Image, Stack, Text, Title, ActionIcon, Badge, darken, Tooltip } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel'
import { IconExternalLink } from '@tabler/icons-react';
import HoverLink from './HoverLink.jsx';

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
    const { hovered: cardHovered, ref: cardRef } = useHover();
    const { hovered: iconHovered, ref: iconRef } = useHover();
    const { hovered: titleHovered, ref: titleRef } = useHover();

    return (
        <Card 
            m="0"
            radius={"lg"}
            className='project-card'
            key={`card-project-${title}`} 
            bg={cardHovered ? "var(--mantine-color-coal)" : darken("var(--mantine-color-red-9)", 0.65)}
            style={{overflow: "visible"}}
            ref={cardRef}
        >
            <Card.Section
                p={"lg"}
            >
                <Group 
                    justify='space-between'  
                    preventGrowOverflow={false}
                    wrap='nowrap'
                >
                    <Title
                        ref={titleRef}
                        order={3} 
                        c={titleHovered ? "var(--mantine-color-orange-4)" : "var(--mantine-color-white)"}
                        onClick={() => {
                            window.open(link, "_blank");
                        }}
                    >
                        {title}
                    </Title>
                    <ActionIcon
                        ref={iconRef}
                        variant="transparent" 
                        color={iconHovered ? "var(--mantine-color-white)" : "var(--mantine-color-orange-4)"}
                        component='a' 
                        target="_blank"
                        href={link}
                        aria-label={`Open a new tab for ${link}`}
                    >
                        <Tooltip 
                            label={"Visit"}
                            events={{ hover: true, touch: true }}
                        >
                            <IconExternalLink />
                        </Tooltip>
                    </ActionIcon>
                </Group>
            </Card.Section>
            <Card.Section>
                <Carousel
                    loop
                    withIndicators
                    controlsOffset={"xs"}
                    height={"12rem"}
                    getEmblaApi={setEmbla}
                >
                    {images.map((image, index) => <Carousel.Slide key={`image-${title}-${index}`}> 
                        <Image  
                            onClick={() => {
                                embla?.scrollNext();
                            }}
                            h="100%"
                            radius="0" 
                            src={image} 
                        />
                    </Carousel.Slide>)}
                </Carousel>
            </Card.Section>
            <Card.Section
                p={"lg"}
            >
                <Stack>
                    <HoverLink 
                        text={subtitle}
                        link={link}
                        fw={500}
                    />
                    <Text
                        size="sm"
                    >
                        {description}
                    </Text>
                    <Group gap="xs">
                        {tags.map(tag => {
                            return <Badge
                                radius="md"
                                size="xs" 
                                key={`badge-${tag}-${title}`}
                                color={tagColor[tag]}
                            >
                                {tag}
                            </Badge>
                        })}
                    </Group>
                </Stack>
            </Card.Section>
        </Card>
    )
}

export default Project