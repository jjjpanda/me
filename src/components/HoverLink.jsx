import React from 'react'
import { useHover } from '@mantine/hooks';
import { Text, Tooltip } from '@mantine/core';

const HoverLink = ({ 
    text,
    link,
    tooltiptext,
    endcolor,
    ...props 
}) => {
    const {hovered, ref} = useHover();
    return (
        <Tooltip 
            label={tooltiptext} 
            openDelay={500} 
            disabled={!tooltiptext}
        >
            <Text
                ref={ref}
                variant={hovered ? "gradient" : ""}
                gradient={{ 
                    from: 'var(--mantine-color-orange-4)', 
                    to: (endcolor ?? 'var(--mantine-color-red-4)'), 
                    deg: 90 
                }}
                component='a' 
                target="_blank"
                href={link}

                {...props}
            >
                {text}
            </Text>
        </Tooltip>
    )
}

export default HoverLink;