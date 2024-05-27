import React, { useEffect, useState } from 'react';

import * as FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

import ResponsiveMain from './components/ResponsiveMain.jsx';

import { icons } from './css/icons.js';
import { MantineProvider, createTheme } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './css/index.less'

const theme = createTheme({
    "scale": 1,
    "focusRing": "auto",
    "white": "#EFEEFF",
    "black": "#100103",
    "colors": {
        "dark": [
            "#EEEEFF",
            "#D1D1E6",
            "#B4B4CC",
            "#9797B3",
            "#7A7A99",
            "#234556",
            "#091a32",
            "#060d12",
            "#00000F",
            "#000000"
        ],
        "red": [
            "#ebd1d8",
            "#e1bac5",
            "#ce8c9f",
            "#ba5e78",
            "#b04765",
            "#9c193e",
            "#7d1432",
            "#6d122b",
            "#3e0a19",
            "#1f050c"
        ],
        "orange": [
            "#fce5dd",
            "#f9cabb",
            "#f6b098",
            "#f5a387",
            "#f39576",
            "#f07b54",
            "#c06243",
            "#904a32",
            "#441e08",
            "#1d0a04"
        ]
    },
    "primaryShade": {
        "light": 6,
        "dark": 8
    },
    "primaryColor": "orange",
    "cursorType": "default",
    "defaultGradient": {
        "from": "red",
        "to": "orange",
        "deg": 72
    },
    "other": {
        "workedu": "#4ab3d7",
        "project": "#ee71f2",
        "contact": "#ffda8b",
        "coal": "#090909"
    },
    "components": {}
});

const resolver = (theme) => ({
    variables: {
      '--mantine-color-workedu': theme.other.workedu,
      '--mantine-color-project': theme.other.project,
      '--mantine-color-contact': theme.other.contact,
      '--mantine-color-coal': theme.other.coal,
    }
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
        <MantineProvider 
            defaultColorScheme="dark" 
            theme={theme}
            cssVariablesResolver={resolver}
        >
            <ResponsiveMain
                icons={state.icons}
                loaded={state.loaded}
                timeout={timeout}
            />
        </MantineProvider>
    )
}

export default App