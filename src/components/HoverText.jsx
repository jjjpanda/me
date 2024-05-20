import React from 'react'
import { useHover } from '@mantine/hooks';
import { Text, Tooltip } from '@mantine/core';

const HoverText = (props) => {
    const {hovered, ref} = useHover();
    return (
        <Tooltip label={props.tooltipText} openDelay={500}>
            <Text
                ref={ref}
                variant={hovered ? "gradient" : ""}
                gradient={{ from: 'var(--mantine-color-orange-4)', to: 'var(--mantine-color-red-4)', deg: 90 }}
                {...props}
            >
                {props.text}
            </Text>
        </Tooltip>
    )
}

export default HoverText;