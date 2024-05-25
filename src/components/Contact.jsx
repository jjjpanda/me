import React, { forwardRef } from 'react'
import { Divider, Stack, Title, Space } from '@mantine/core';
import { IconNumber1, IconNumber2 } from '@tabler/icons-react';

import EmailTable from './EmailTable.jsx';
import ContactForm from './ContactForm.jsx';

const emails = [
    {
        title: "Personal Email Address",
        link: "jtpandya3@gmail.com",
        description: "Email address open for inquiries or questions.",
        icon: IconNumber1
    },
    {
        title: "Alumni Email Address",
        link: "jpandya@alumni.stevens.edu",
        description: "My Stevens Institute of Technology email address.",
        icon: IconNumber2
    }
]

const Contact = forwardRef((props, ref) => {

    return (
        <Stack ref={ref} px="xl">
            
            <Divider my="md" />

            <Title order={2}>
                Contact Me
            </Title>

            <ContactForm emails={emails} />
            
            <Space my="xl" />

            <Title order={2}>
                Or Email Me
            </Title>

            <EmailTable emails={emails} />

        </Stack>
        
    )
})

export default Contact