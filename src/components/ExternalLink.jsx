import React from "react";
import { ActionIcon, Tooltip } from "@mantine/core";
import { useHover } from "@mantine/hooks";

const ExternalLink = ({title, href, icon: Icon, invertColor}) => {
    const {hovered, ref} = useHover();

    return (<ActionIcon 
        ref={ref}
        variant="transparent" 
        aria-label={title}
        component="a"
        target="_blank"
        href={href}
        color={(invertColor ^ hovered) ? "var(--mantine-color-white)" : "var(--mantine-color-orange-4)"}
    >
        <Tooltip 
            label={title}
            events={{ hover: true, touch: true }}
        >
            <Icon 
                style={{ width: '100%', height: '100%' }} 
                stroke={1.75} 
            />
        </Tooltip>
    </ActionIcon>)
}

export default ExternalLink