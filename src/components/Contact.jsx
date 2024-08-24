import React, { forwardRef } from 'react'
import { Divider, Stack, Title, Space, Image, Center, em } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';

import EmailTable from './EmailTable.jsx';
import EmailList from './EmailList.jsx';
import ContactForm from './ContactForm.jsx';
import { useMediaQuery } from '@mantine/hooks';

const emails = [
    {
        title: "Personal Email Address",
        link: "jtpandya3@gmail.com",
        description: "Email address open for inquiries or questions.",
        icon: IconMail
    }
]

const Contact = forwardRef((props, ref) => {
    const isThin = useMediaQuery(`(max-width: ${em(600)})`);

    return (
        <Stack ref={ref} px="xl">
            
            <Divider my="md" />
            <Space my="lg" />

            <Title order={2}>
                Contact Me
            </Title>

            <ContactForm emails={emails} />
            
            <Space my="xl" />

            <Title order={2}>
                Or Email Me
            </Title>

            {isThin ? (
                <EmailList emails={emails} />
            ) : (
                <EmailTable emails={emails}/>
            )}
            
            <Space my="lg" />

            {/* <Center>
                <Image 
                    radius="lg"
                    className="eclipse-img"
                    width={"70%"}
                    src={"img/eclipse.png"}
                />
            </Center> */}
            
            <Space my="lg" />
        </Stack>
        
    )
})

export default Contact