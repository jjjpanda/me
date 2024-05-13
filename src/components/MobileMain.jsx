import React, {useState} from 'react';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import TopIcon from './TopIcon.jsx';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

const MobileMain = (props) => {
    const [opened, { toggle }] = useDisclosure();


    return <Router className="flex-container" >
        <AppShell
            header={{ height: { base: 60, md: 70, lg: 80 } }}
            aside={{
                width: { base: 200, md: 300, lg: 400 },
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group justify="space-between" h="100%" px="md">
                    <TopIcon icons={props.icons} style={{aspectRatio: "1/1", height: "inherit"}} mobile/>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                </Group>
            </AppShell.Header>
            <AppShell.Aside p="md">
                Navbar
            </AppShell.Aside>
            <AppShell.Main>
                Main
            </AppShell.Main>
            
            <AppShell.Footer>
                footer
            </AppShell.Footer>
        </AppShell>
    </Router>
}

export default MobileMain