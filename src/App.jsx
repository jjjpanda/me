import React from 'react';
import ReactDOM from 'react-dom';

import * as FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

import ResponsiveMain from './components/ResponsiveMain';

import { icons } from './css/theme.js';
const timeout = 1100

import './css/antd.less'
class App extends React.Component{

    constructor(props){
        super(props)   
        this.state = {
            icons: icons,
            loaded: false,
            timestamp: new Date(),
            key: 1
        }
    }

    getIcons = () => {
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
                return this.state.icons
            }
        }, (err)=> {
            console.log('err', err)
            return this.state.icons
        })
    }

    componentDidMount() {
        this.getIcons().then(res => {
            console.log('response', res)
            this.setState((oldState) => ({icons: res, key: oldState.key + 1}), () => {
                //console.log(this.state)
                setTimeout(() => {
                    this.setState(() => ({
                        loaded: true
                    }))
                }, Math.max(0, timeout - (new Date() - this.state.timestamp)))
            })
            
        })
    }

    render() {
        return (
            <ResponsiveMain 
                icons={this.state.icons} 
                loaded={this.state.loaded}
            />
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('root')
);