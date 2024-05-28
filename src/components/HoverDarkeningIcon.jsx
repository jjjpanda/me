import React from 'react'
import { useHover } from '@mantine/hooks';
import { ThemeIcon, rem } from '@mantine/core';

const HoverDarkeningIcon = (props) => {
    const { hovered, ref } = useHover();

    return <ThemeIcon 
        color={hovered ? "var(--mantine-color-dark-9)" : "var(--mantine-color-orange-2)"}
        c={hovered ? "var(--mantine-color-red-3)" : "var(--mantine-color-black)"}
        size={props.size ?? 24} 
        radius="xl"
        ref={ref}
        className='hover-darken-icon'
        {...(props.link ? {
            component: "a",
            href: props.link
        } : {})}
    >
        <props.icon style={{ width: rem(16), height: rem(16) }} />
    </ThemeIcon>
} 

export default HoverDarkeningIcon;