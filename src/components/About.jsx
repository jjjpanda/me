import React, { forwardRef } from "react";
import { Box, ScrollArea, Space, Title, Text } from "@mantine/core";

const About = forwardRef((props, ref) => {

    const contents = (
        <>
            <Text>Yogurt is a fantastic choice for a snack or part of a meal. It’s rich in protein, calcium, and probiotics, which are beneficial for gut health.</Text>
            <Space my="xs" />
            <Text fw={500}>Sorry, what I meant to say was:</Text>
            <Text>
                I code. I'm a software engineer/financial engineer based in New Jersey.
            </Text>
        </>
    )
    return (
        <Box px="xl" ref={ref}>
            <Title order={1}>Jay Pandya</Title>
            <br />
            {props.mobile ? (
                <Box >
                    {contents}
                </Box>
            ) : (
                <ScrollArea
                    h={"20vh"}
                >
                    {contents}
                </ScrollArea>
            )}
        </Box>
    )
})

export default About