import React, {useState} from 'react';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { AppShell } from '@mantine/core';

const Main = (props) => {
    return <AppShell
        layout="alt"
    >
        <AppShell.Main>
        Alt layout – Navbar and Aside are rendered on top on Header and Footer
        </AppShell.Main>
        <AppShell.Aside p="md">Aside</AppShell.Aside>
    </AppShell>
}

export default Main