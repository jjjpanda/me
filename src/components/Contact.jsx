import React, { forwardRef } from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Group, Button, Textarea, Divider, Stack, ThemeIcon, Table, Text, CopyButton, ActionIcon, Tooltip, rem } from '@mantine/core';
import { IconCopy, IconCheck, IconNumber1, IconNumber2, IconSend } from '@tabler/icons-react';
import HoverText from './HoverText.jsx';

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
        },
    });

    return (
        <Stack ref={ref}>
            <form onSubmit={
                form.onSubmit((values) => console.log(values))
            }>

                CONTACT
                <br />
                <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="Name"
                    key={form.key('name')}
                    {...form.getInputProps('name')}
                />
                <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                />
                <Textarea
                    withAsterisk
                    label="Message"
                    placeholder="message"
                    key={form.key('message')}
                    {...form.getInputProps('message')}
                />
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>

            <Divider my="md" />

            <Table>
                <Table.Thead>
                    <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Email</Table.Th>
                    <Table.Th></Table.Th>
                    <Table.Th></Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {emails.map((email, index) => (
                        <Table.Tr key={`email-table-row-${index}`}>
                            <Table.Td>
                                <ThemeIcon color="orange" size={24} radius="xl">
                                    <email.icon style={{ width: rem(16), height: rem(16) }} />
                                </ThemeIcon>
                            </Table.Td>
                            <Table.Td>
                                <Stack gap="xs">
                                    <HoverText 
                                        text={email.link} 
                                        tooltipText={email.title}
                                        component='a' 
                                        href={`mailto:${props.text}`}
                                    />
                                    <Text size="sm" c="dimmed">
                                        {email.description}
                                    </Text>
                                </Stack>
                            </Table.Td>
                            <Table.Td>
                                <CopyButton value={email.link} >
                                    {({ copied, copy }) => (
                                        <Tooltip label={copied ? 'Copied' : 'Copy'} >
                                            <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                                { copied ? (<IconCheck style={{ width: rem(16) }} />) : (<IconCopy style={{ width: rem(16) }} />) }
                                            </ActionIcon>
                                        </Tooltip>
                                    )}
                                </CopyButton>
                            </Table.Td>
                            <Table.Td>
                                <Tooltip label="Send Email">
                                    <ActionIcon variant="subtle" component='a' href={`mailto:${email.link}`}>
                                        <IconSend style={{ width: rem(16) }} />
                                    </ActionIcon>
                                </Tooltip>
                            </Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>

           
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