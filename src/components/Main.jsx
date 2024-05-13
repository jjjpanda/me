import React, {useState} from 'react';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { AppShell } from '@mantine/core';
import TopIcon from './TopIcon.jsx';

const Main = (props) => {
    return <Router className="flex-container" >
        <AppShell
            layout="alt"
        >
            <AppShell.Navbar p="md">
                <TopIcon icons={props.icons} style={{aspectRatio: "1/1", width: "5vw"}} mobile/>
            </AppShell.Navbar>
            <AppShell.Main>
                Alt layout – Navbar and Aside are rendered on top on Header and Footer
            </AppShell.Main>
            <AppShell.Aside p="md">
                Aside
            </AppShell.Aside>
        </AppShell>
    </Router>
}

export default Main