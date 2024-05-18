import { Grid } from '@mantine/core'
import React from 'react'

const SectionLinks = (props) => {
    return <Grid>
        <Grid.Col span={4}>
            work
        </Grid.Col>
        <Grid.Col span={4}>
            projects
        </Grid.Col>
        <Grid.Col span={4}>
            contact
        </Grid.Col>
    </Grid>
}

export default SectionLinks