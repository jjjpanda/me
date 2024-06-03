import React, { forwardRef } from "react";
import { Box, ScrollArea, Space, Title, Text } from "@mantine/core";
import TimeBasedMiniBio from "./TimeBasedMiniBio.jsx";

const About = forwardRef((props, ref) => {

    return (
        <Box px="xl" style={{width: "100%"}} ref={ref}>
            <Title order={1}>Jay Pandya</Title>
            <Text 
                fw={500}
                variant="gradient"
                gradient={{ from: 'var(--mantine-color-red-4)', to: 'var(--mantine-color-orange-4)', deg: 0 }}
            >
                Software Engineer/Financial Engineer
            </Text>
            <Space my="sm" />
            {props.mobile ? (
                <TimeBasedMiniBio />
            ) : (
                <ScrollArea
                    h={"20vh"}
                >
                    <TimeBasedMiniBio />
                </ScrollArea>
            )}
        </Box>
    )
})

export default About