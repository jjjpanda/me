import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import * as FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

import ResponsiveMain from './components/ResponsiveMain';

import { icons } from './css/theme.js';
const timeout = 1500

import useDarkTheme from './hooks/useDarkTheme';

const App = (props) => {
    const [isDarkTheme] = useDarkTheme();
    if( isDarkTheme ) {
        import("antd/dist/antd.dark.css")
    }
    else{
        import("antd/dist/antd.css")
    }
    import('./css/antd.less')

    const [state, setState] = useState({
        icons: icons,
        loaded: false,
        timestamp: new Date(),
        key: 1
    })

    useEffect(() => {
        getIcons().then(res => {
            console.log('response', res)
            setState((oldState) => ({...oldState, icons: res, key: oldState.key + 1}))
        })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setState((oldState) => ({
                ...oldState,
                loaded: true
            }))
        }, Math.max(0, timeout - (new Date() - state.timestamp)))
    }, [state.icons])

    const getIcons = () => {
        return fetch("https://jaeme.herokuapp.com/icons", {
            method: "GET",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            mode: "cors"
        }).then(res => {
            if(res && res.status == 200){
                return res.json();
            }
            else{
                return state.icons
            }
        }, (err)=> {
            console.log('err', err)
            return state.icons
        })
    }

    return (
        <ResponsiveMain 
            icons={state.icons} 
            loaded={state.loaded}
            timeout={timeout}
        />
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
);