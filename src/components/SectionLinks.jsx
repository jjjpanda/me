import { Card, Stack } from '@mantine/core'
import React from 'react'

const SectionLinks = (props) => {
    return <Stack
        align="stretch"
        justify="space-between"
        gap="sm"
        w="100%"
    >
        <Card>
            Work and Education
        </Card>
        <Card>
            Projects
        </Card>
        <Card>
            Contact Me
        </Card>
    </Stack>
}

export default SectionLinks