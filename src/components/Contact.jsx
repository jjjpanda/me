import React, { forwardRef } from 'react'
import { Divider, Stack, Title, Space, Image, Center } from '@mantine/core';

import ContactForm from './ContactForm.jsx';

const Contact = forwardRef((props, ref) => {
    return (
        <Stack ref={ref} px="xl">

            <Divider my="md" />
            <Space my="lg" />

            <Title order={2}>
                Contact Me
            </Title>

            <ContactForm />
        </Stack>

    )
})

export default Contact
