import React from 'react'

import { Stack, List, Text, CopyButton, ActionIcon, rem, Space } from '@mantine/core';
import { IconCopy, IconCheck, IconSend } from '@tabler/icons-react';
import HoverLink from "./HoverLink.jsx";

const EmailList = (props) => {
    return (
        <List size="lg">
            {props.emails.map(email => {
                return (
                    <List.Item
                        key={`email-list-item-${email.link}`}
                        icon={
                            <Stack gap="sm">
                                <Space my="sm"/>
                                <CopyButton value={email.link} >
                                    {({ copied, copy }) => (
                                        <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                            { copied ? (<IconCheck style={{ width: rem(16) }} />) : (<IconCopy style={{ width: rem(16) }} />) }
                                        </ActionIcon>
                                    )}
                                </CopyButton>
                                <ActionIcon variant="subtle" component='a' href={`mailto:${email.link}`}>
                                    <IconSend style={{ width: rem(16) }} />
                                </ActionIcon>
                                <Space my="sm"/>
                            </Stack>
                        }
                    >
                         <Stack gap="xs">
                            <HoverLink 
                                text={email.link} 
                                link={`mailto:${email.link}`}
                                tooltiptext={email.title}
                                td="underline"
                            />
                            <Text size="sm" c="dimmed" >
                                {email.description}
                            </Text>
                        </Stack>
                    </List.Item>
                )
            })}
        </List>
    )
}

export default EmailList;