import React from "react";

import { Group, ActionIcon, Tooltip } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBrandSoundcloud, IconList } from '@tabler/icons-react';

const externalLinks = [
    {
        icon: IconBrandGithub, 
        title: "Github",
        href: "https://www.github.com/jjjpanda"
    },
    {
        icon: IconBrandLinkedin,
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/j-pandya/"
    },
    {
        icon: IconBrandSoundcloud,
        title: "Soundcloud",
        href: "https://soundcloud.com/whoamistupid"
    },
    {
        icon: IconList,
        title: "Resume",
        href: "img/JayPandyaResume.pdf"
    }
]

const ExternalLinks = (props) => {
    return (
        <Group 
            w={props.mobile ? "90vw" : ""}
            justify={props.mobile ? "space-between" : "center"}
        >
            {externalLinks.map(link => <ActionIcon 
                key={`${link.title}-Link-Icon`}
                variant="transparent" 
                aria-label={link.title}
                component="a"
                target="_blank"
                href={link.href}
                color="var(--mantine-color-orange-4)"
            >
                <Tooltip 
                    label={link.title}
                    events={{ hover: true, touch: true }}
                >
                    <link.icon 
                        style={{ width: '100%', height: '100%' }} 
                        stroke={1.75} 
                    />
                </Tooltip>
            </ActionIcon>)}
        </Group>
    )
}

export default ExternalLinks