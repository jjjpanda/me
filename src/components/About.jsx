import React, { forwardRef } from "react";
import { Box, Group, rem, Title, Text } from "@mantine/core";
import TopIcon from "./TopIcon.jsx";

const About = forwardRef((props, ref) => {

    return (
        <Box px="xl" style={{width: "100%"}} ref={ref}>
            <Group align="center" gap="sm" wrap="nowrap">
                {!props.mobile && props.icons && (
                    <TopIcon 
                        icons={props.icons} 
                        style={{ width: rem(34), height: rem(34), cursor: 'pointer', flexShrink: 0 }} 
                    />
                )}
                <Title order={1}>Jay Pandya</Title>
            </Group>
            <Text 
                fw={500}
                variant="gradient"
                gradient={{ from: 'var(--mantine-color-red-4)', to: 'var(--mantine-color-orange-4)', deg: 0 }}
            >
                Software Engineer/Financial Engineer
            </Text>
        </Box>
    )
})

export default About
