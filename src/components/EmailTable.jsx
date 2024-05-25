import React from "react"

import { Stack, Table, Text, CopyButton, ActionIcon, Tooltip, rem } from '@mantine/core';
import { IconCopy, IconCheck, IconSend } from '@tabler/icons-react';
import HoverEmailLink from "./HoverEmailLink.jsx";
import HoverDarkeningIcon from "./HoverDarkeningIcon.jsx";

const EmailTable = (props) => {
    const {emails} = props
    return (
        <Table>
            <Table.Tbody>
                {emails.map((email, index) => (
                    <Table.Tr key={`email-table-row-${index}`}>
                        <Table.Td>
                            <HoverDarkeningIcon 
                                link={`mailto:${email.link}`}
                                icon={email.icon} 
                            />
                        </Table.Td>
                        <Table.Td>
                            <Stack gap="xs">
                                <HoverEmailLink 
                                    text={email.link} 
                                    tooltiptext={email.title}
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
    )
}

export default EmailTable;