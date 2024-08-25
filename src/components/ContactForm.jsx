import React, {useState, useEffect} from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import Cookie from 'js-cookie'
import useContactWithReCaptcha from '../hooks/useContactWithReCaptcha.jsx';
import { useForm } from '@mantine/form';
import { TextInput, Group, Button, Textarea, Space, Center, Card, darken, Box, em } from '@mantine/core';
import { useHover, useMediaQuery } from '@mantine/hooks';
import { IconCheck, IconX } from '@tabler/icons-react';

const RECAPTCHA_SITE_KEY = "6LfP0gYbAAAAAL_g7qg5yd_X-Xp_uV-GZQFaJ9Tc"

const ContactForm = (props) => {
    const {emails} = props
    
    const { hovered, ref } = useHover();
    const isThin = useMediaQuery(`(max-width: ${em(1250)})`);

    const [recaptchaRef, onSubmitWithReCAPTCHA, sendRequestGenerate] = useContactWithReCaptcha();
    const [recaptchaError, setRecaptchaError] = useState(false)
    const [submitted, setSubmitted] = useState(Cookie.get('submitted') || '')
    const [timestamp, setTimestamp] = useState(Cookie.get('lastMessageTime') || '')

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

    const lastAttemptMessage = (submitted == "loading" ? "Sending..." : (
        submitted == "submitted" ? `Last message sent - ${timestamp}` : (
            submitted == "error" ? `Message did not send - ${timestamp}` : null
        )
    ))

    const actionButton = (<Group justify='flex-end'>
        {submitted === "submitted" ? (<Button leftSection={<IconCheck />} color="green">Sent!</Button>) : (
            submitted === "error" ? (<Button leftSection={<IconX />} color='red'>Error</Button>) : (
                <Button loading={submitted === "loading"} type="submit">Send</Button>
            )
        )}
    </Group>)

    console.log("contact me | sending status", submitted)

    return (
        <form 
            onSubmit={
                form.onSubmit(onFinish)
            }
        >
        <Card
            radius={"lg"}
            className='contact-card'
            bg={hovered ? "var(--mantine-color-coal)" : darken("var(--mantine-color-red-9)", 0.65)}
            style={{overflow: "visible"}}
            ref={ref}
        >
            <Card.Section p={'md'}>
                
                    <TextInput
                        className="contact-form-input"
                        label="Name"
                        key={form.key('name')}
                        {...form.getInputProps('name')}
                    />
                    <Space h="lg" />
                    <TextInput
                        className="contact-form-input"
                        label="Email"
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />
                    <Space h="lg" />
                    <Textarea
                        className="contact-form-input"
                        label="Message"
                        key={form.key('message')}
                        {...form.getInputProps('message')}
                    />
            </Card.Section>

            <Card.Section p={'md'}>
                <Center>
                    {isThin ? (
                        <Box mt="xl">
                            {lastAttemptMessage}
                            {actionButton}
                        </Box>
                    ) : (
                        <Group justify="space-between" mt="xl">
                            {lastAttemptMessage}
                            {actionButton}
                        </Group>
                    )}
                </Center>
            </Card.Section>

            <Card.Section p={'md'}>
                <Space my="lg" />
                <Center>
                    <ReCAPTCHA
                        sitekey={RECAPTCHA_SITE_KEY}
                        ref={recaptchaRef}
                        onErrored={() => {
                            setRecaptchaError(() => true)
                        }}
                        size="invisible"
                        theme={"dark"}
                        badge="inline"
                    />
                </Center>
                <Space my="lg" />
            </Card.Section>
        </Card>
        
        </form>
    )
}

export default ContactForm