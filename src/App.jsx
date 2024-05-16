import React, { useEffect, useState } from 'react';

import * as FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

import ResponsiveMain from './components/ResponsiveMain.jsx';

import { icons } from './css/icons.js';
import { MantineProvider, createTheme } from '@mantine/core';

import '@mantine/core/styles.css';

const theme = createTheme({
/** Your theme override here */
});

const timeout = 1000

const shuffleArray = (arr) => {
    const array = [...arr]
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const App = () => {
    const [state, setState] = useState({
        icons: shuffleArray(icons),
        loaded: false,
        timestamp: new Date()
    })

    console.log("RENDER APP")

    useEffect(() => {
        setTimeout(() => {
            setState((oldState) => ({
                ...oldState,
                loaded: true
            }))
        }, Math.max(0, timeout - (new Date() - state.timestamp)))
    }, [])

    return (
        <MantineProvider defaultColorScheme="dark" theme={theme}>
            <ResponsiveMain 
                icons={state.icons} 
                loaded={state.loaded}
                timeout={timeout}
            />
        </MantineProvider>
    )
}

export default App