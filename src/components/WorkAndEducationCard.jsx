import React from 'react'
import { Text, Card, Stack, Title, Group, rem, darken, em } from '@mantine/core'
import { useHover, useMediaQuery } from "@mantine/hooks"
import { IconClock, IconMapPin } from '@tabler/icons-react'

const WorkAndEducationCard = (props) => {
    const {hovered, ref} = useHover();
    const { item } = props
    const isThin = useMediaQuery(`(max-width: ${em(1250)})`);

    const title = <Title order={4} >
        {item.title}
    </Title>
    const timeAndLocation = <Stack gap={0} align='flex-end' mt={0}>
        <Group gap={1}>
            <Text size="xs" >
                {item.location}
            </Text>
            <Text size="xs" >
                {item.location ? <IconMapPin style={{height: rem(10)}}/> : null}
            </Text>
        </Group>
        <Group gap={1}>
            <Text size="xs">
                {item.time}
            </Text>
            <Text size="xs">
                {item.time ? <IconClock style={{height: rem(10)}}/> : null}
            </Text>
        </Group>
    </Stack>

    return (
        <Card 
            p="xl"
            radius={"lg"}
            className='workedu-card'
            bg={hovered ? "var(--mantine-color-coal)" : darken("var(--mantine-color-red-9)", 0.75)}
            style={{overflow: "visible"}}
            ref={ref}
        >
            <Card.Section >
                <Stack gap="xs">
                    {isThin ? (
                        <Stack>
                            {title}
                            {timeAndLocation}
                        </Stack>
                    ) : (
                        <Group justify='space-between' grow>
                            {title}
                            {timeAndLocation}
                        </Group>
                    )}
                </Stack>
            </Card.Section>

            <Card.Section>
                <Text c="dimmed" size="sm" mt="sm">
                    {item.description}
                </Text>
            </Card.Section>
        </Card>
    )
}

export default WorkAndEducationCard