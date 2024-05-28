import React, { forwardRef } from 'react'
import { Stack, Divider, Space } from '@mantine/core'

const Preface = forwardRef((props, ref) => {
    return <Stack ref={ref} px="xl">
        
        <Divider my="md" />
        <Space my="lg" />
    </Stack>
})

export default Preface