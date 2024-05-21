import React from 'react'
import { useHover } from '@mantine/hooks';
import { Text, Tooltip } from '@mantine/core';

const HoverEmailLink = (props) => {
    const {hovered, ref} = useHover();
    return (
        <Tooltip label={props.tooltiptext} openDelay={500}>
            <Text
                ref={ref}
                variant={hovered ? "gradient" : ""}
                td="underline"
                gradient={{ from: 'var(--mantine-color-orange-4)', to: 'var(--mantine-color-red-4)', deg: 90 }}
                component='a' 
                href={`mailto:${props.text}`}
            >
                {props.text}
            </Text>
        </Tooltip>
    )
}

export default HoverEmailLink;