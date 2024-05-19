import React from "react";

import { Group, ActionIcon, Tooltip } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconList } from '@tabler/icons-react';

const externalLinks = [
    {
        icon: IconMail,
        title: "Email",
        href: "mailto:jtpandya3@gmail.com"
    },
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
        icon: IconList,
        title: "Resume",
        href: "img/JayPandyaResume.pdf"
    }
]

const ExternalLinks = () => {
    return (
        <Group>
            {externalLinks.map(link => <ActionIcon 
                variant="filled" 
                aria-label={link.title}
                component="a"
                target="_blank"
                href={link.href}
                color="var(--mantine-color-orange-6)"
            >
                <Tooltip label={link.title}>
                    <link.icon 
                        style={{ width: '70%', height: '70%' }} 
                        stroke={1.5} 
                    />
                </Tooltip>
            </ActionIcon>)}
        </Group>
    )
}

export default ExternalLinks