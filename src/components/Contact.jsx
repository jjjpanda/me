import React, { forwardRef, useState, useEffect } from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Group, Button, Textarea, Divider, Stack, ThemeIcon, Table, Text, CopyButton, ActionIcon, Tooltip, rem, Title, Space, Center } from '@mantine/core';
import { IconCopy, IconCheck, IconX, IconNumber1, IconNumber2, IconSend } from '@tabler/icons-react';
import ReCAPTCHA from "react-google-recaptcha";
import HoverEmailLink from './HoverEmailLink.jsx';
import Cookie from 'js-cookie'
import useContactWithReCaptcha from '../hooks/useContactWithReCaptcha.jsx';
import EmailTable from './EmailTable.jsx';

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

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          message: (value) => value.length < 1000 ? null : `Too many characters (${value.length - 1000} over)`
        },
    });

    const [recaptchaRef, onSubmitWithReCAPTCHA, sendRequestGenerate] = useContactWithReCaptcha();

    const [submitted, setSubmitted] = useState(Cookie.get('submitted') || '')
    const [timestamp, setTimestamp] = useState(Cookie.get('lastMessageTime') || '')
    const [recaptchaError, setRecaptchaError] = useState(false)

    useEffect(() => {
        if(submitted != "loading"){
            Cookie.set("submitted", submitted)
            Cookie.set("lastMessageTime", timestamp)
        }
    }, [submitted, timestamp])

    const afterSubmit = (code, timestamp) => {
        setSubmitted(() => code);
        setTimestamp(() => timestamp)
    }

    const onFinish = (values) => {
        if(recaptchaError){
            afterSubmit("error", generateTimestamp());
        }

        if( emails.findIndex((entry) => (entry.link === values.email)) !== -1 ) {
            //note('warning', 'Sending an Anonymous Message', "Identity theft is not a joke, Jim! 🙄", 5)
        }
        console.log("validation passed, sending message", values)

        setSubmitted(() => "loading");

        const sendRequest = sendRequestGenerate(values, afterSubmit);
    
        onSubmitWithReCAPTCHA(sendRequest, () => {
            console.log('error in getting recaptcha token')
            afterSubmit("error", generateTimestamp())
        })
    }

    console.log("contact me sending status", submitted)

    return (
        <Stack ref={ref}>
            
            <Divider my="md" />

            <Title order={2}>
                Contact Me
            </Title>

            <form onSubmit={
                form.onSubmit(onFinish)
            }>
                    <TextInput
                        label="Name"
                        key={form.key('name')}
                        {...form.getInputProps('name')}
                    />
                    <Space h="lg" />
                    <TextInput
                        label="Email"
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />
                    <Space h="lg" />
                    <Textarea
                        label="Message"
                        key={form.key('message')}
                        {...form.getInputProps('message')}
                    />
                <Group>
                    
                </Group>
                <Group justify="space-between" mt="xl">
                    {submitted == "loading" ? "Sending..." : (
                        submitted == "submitted" ? `Last message sent - ${timestamp}` : (
                            submitted == "error" ? `Message did not send - ${timestamp}` : null
                        )
                    )} 
                    {submitted === "submitted" ? (<Button leftSection={<IconCheck />} color="green">Sent!</Button>) : (
                        submitted === "error" ? (<Button leftSection={<IconX />} color='red'>Error</Button>) : (
                            <Button loading={submitted === "loading"} type="submit">Send</Button>
                        )
                    )}
                </Group>
            </form>

            <Center>
                <ReCAPTCHA
                    sitekey="6LfP0gYbAAAAAL_g7qg5yd_X-Xp_uV-GZQFaJ9Tc"
                    ref={recaptchaRef}
                    onErrored={() => {
                        setRecaptchaError(() => true)
                    }}
                    size="invisible"
                    theme={"dark"}
                    badge="inline"
                />
            </Center>

            <Title order={2}>
                Or Email Me
            </Title>

            <EmailTable emails={emails} />

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Stack>
        
    )
})

export default Contact