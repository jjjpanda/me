import React from "react";

import { Group } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBrandSoundcloud, IconCertificate } from '@tabler/icons-react';
import ExternalLink from "./ExternalLink.jsx";

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
        icon: IconCertificate,
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
            {externalLinks.map(link => <ExternalLink 
                key={`${link.title}-Link-Icon`}
                title={link.title}
                href={link.href}
                icon={link.icon}
            />)}
        </Group>
    )
}

export default ExternalLinks