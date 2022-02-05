import React, { useEffect, useState } from 'react'
import {
    NavBar,
    WingBlank,
    SwipeAction
} from 'antd-mobile';
import {
    useLocation, useNavigate
} from 'react-router-dom';

import TopIcon from './TopIcon.jsx'
import note from './note.jsx'

import Cookie from 'js-cookie'

let enter, exit = 0;

const MobileTopMenu = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [state, setState] = useState({
        swipe: [
            {
                text: ' ',
                style: {backgroundColor: "purple"}
            }
        ],
        paths: ["/", "/?about", "/?resume", "/?projects", "/?contact"],
        toggles: Cookie.get('swipeToggled') == 'toggled' ? NaN : 0,
    })

    useEffect(() => {
        if(state.swipe != undefined && state.swipe.length == 0 && state.toggles.isNaN()){
            setState((oldState) => ({
                ...oldState,
                swipe: [
                    {
                        text: ' ',
                        style: {backgroundColor: "purple"}
                    }
                ]
            }))
        }
    }, [state.swipe, state.toggles])

    const pathName = location.pathname+location.search
    return (
        <div 
            onTouchStart={(e) => {
                enter = e.touches[0].screenX
                //console.log(enter)
                if(state.toggles == 10){
                    note('info', "A Little Secret", 'Try swiping at the the top bar 😉', 5)
                }
                setState((oldState) => ({toggles: oldState.toggles+1}))
            }}
            onTouchMove={(e) => {
                exit = e.touches[0].screenX
                //console.log(exit)
            }}
        >
            <SwipeAction 
                autoClose
                onOpen={() => {
                    setState((oldState) => {
                        //console.log(enter, exit, exit > enter)
                        
                        Cookie.set("swipeToggled", 'toggled', {expires: 10000})
                        if(state.toggles < 10){
                            note('success', "Easter Egg Hunter", 'Yes, swiping at the the top bar will allow you to cycle through the pages.\n Let\'s see if you can find more secrets 😅', 7)
                        }
                       
                        navigate(state.paths[(state.paths.findIndex(p => p === pathName) + (enter > exit ? 1 : state.paths.length-1)) % state.paths.length])
                        return {...oldState, swipe: [], toggles: NaN}
                    })
                    
                }}
                right={state.swipe}
                left={state.swipe}
            >
                <NavBar 
                    mode={"dark"}
                    leftContent={<div style={{height: "inherit"}}> <TopIcon mobile icons={props.icons}/> </div>}
                />
            </SwipeAction>
        </div>
    )
}

export default MobileTopMenu