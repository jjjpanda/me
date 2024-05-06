import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Link,
    useLocation, useNavigate
} from 'react-router-dom';

import note from './note.jsx'

import Cookie from 'js-cookie'

const TopIcon = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [state, setState] = useState({
        paths: ["/", "/?about", "/?resume", "/?contact"],
        iconIndex: 3,
        iconLoading: false,
        toggles: Cookie.get('ctrlToggled') == 'toggled' ? NaN : 0,
    })

    const toggleLogo = (event) => {
        event.stopPropagation();
        const ctrlKey = event.ctrlKey
        const isHome = location.search == ""
        if(!props.mobile){
            if(state.toggles == 5){
                note('info', "A Little Secret", 'Try clicking the icon while holding CTRL 😉', 5)
            }
            else if(ctrlKey){
                Cookie.set("ctrlToggled", 'toggled', {expires: 10000})
                if(state.toggles < 5){
                    note('success', "Easter Egg Hunter", 'Yes, holding CTRL while clicking the icon will allow you to cycle through the pages.\n Let\'s see if you can find more secrets 😅', 7)
                }
            }
        }

        const doneLoading = () => {
            setState((oldState) => ({...oldState, iconLoading: false}))
            if(ctrlKey){
                navigate(state.paths[ (state.paths.findIndex(path => location.pathname+location.search === path) + 1) % state.paths.length ])
            }
            else{
                if(!isHome){
                    navigate('/')
                }
            }
        }
        
        if(state.iconLoading){
            return
        }
        else{
            setState(oldState => {
                setTimeout(doneLoading, 300)
                return {
                    ...oldState,
                    iconLoading: true, 
                    iconIndex: ((oldState.iconIndex+1) % props.icons.length),
                    toggles: (ctrlKey ? NaN : oldState.toggles+1)
                }
            })
        }
        
    }

    useEffect(() => {
        
    },  [state.iconLoading])

    const rand = Math.random()
    const img1 = rand > 0.33 ? (rand > 0.66 ? "easeOutForward" : "easeOutBackward") : "glitch1"
    const img2 = rand > 0.33 ? (rand > 0.66 ? "easeInForward" : "easeInBackward") : "glitch2"

    if(state.iconLoading){
        return (
            <div style={{position: 'absolute', float: 'left', display: 'inline-block', width: "auto", height: "inherit"}}>
                <img 
                    alt="top icon"
                    src={`img/icons/${props.icons[(state.iconIndex+props.icons.length-1) % props.icons.length]}Icon.png`} 
                    className = {`icon ${ img1 }` }
                    style= {img1 == 'glitch1' ? {left: "-1px"} : {}}
                />
                <img 
                    alt="top icon"
                    src={`img/icons/${props.icons[(state.iconIndex) % props.icons.length]}Icon.png`} 
                    className = {`icon ${ img2 }` }
                    style= {img2 == 'glitch2' ? {left: "1px"} : {}}
                />
            </div>
        )
    }
    else{
        return (
            <div style={{position: 'absolute', float: 'left', display: 'inline-block', width: "auto", height: "inherit"}}>
                <img 
                    alt= "top icon"
                    className = {"icon"} 
                    src = {`img/icons/${props.icons[state.iconIndex]}Icon.png`} 
                    onClick={(event) => {
                        toggleLogo(event)
                    }}
                />
            </div>
        )
    }
}

export default TopIcon