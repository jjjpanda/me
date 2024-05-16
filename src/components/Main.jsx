import React, {useState, useRef} from 'react';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { AppShell, Center, Grid } from '@mantine/core';
import TopIcon from './TopIcon.jsx';
import MiniMap from './MiniMap.jsx';

import "../css/aside.less"
import GiantSection from './GiantSection.jsx';

const Main = (props) => {
    const mainContentRef = useRef(null);

    return <Router className="flex-container" >
        <AppShell
            layout="alt"
            padding="md"
            navbar={{ width: 90, breakpoint: 'xs'}}
            aside={{ width: 80, breakpoint: 'xs'}}
        >
            <AppShell.Navbar p="xs">
                <TopIcon icons={props.icons} style={{aspectRatio: "1/1", width: "100%"}} mobile/>
                <Center>
                    <MiniMap content={mainContentRef}/>
                </Center>
            </AppShell.Navbar>
            <AppShell.Main >
                <Grid>
                    <Grid.Col span={6} >
                        1
                    </Grid.Col>
                    <Grid.Col span={6} >
                        <GiantSection  ref={mainContentRef}/>
                    </Grid.Col>
                </Grid>
            </AppShell.Main>
            <AppShell.Aside p="xs" />
        </AppShell>
    </Router>
}

export default Main