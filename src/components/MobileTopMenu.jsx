import React, { useEffect, useState } from 'react'
import {
    NavBar,
    SwipeAction
} from 'antd-mobile';
import {
    useLocation, useNavigate
} from 'react-router-dom';

import TopIcon from './TopIcon.jsx'
import note from './note.jsx'

import Cookie from 'js-cookie'

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
        paths: ["/", "/?about", "/?resume", "/?contact"],
        toggles: Cookie.get('swipeToggled') == 'toggled' ? NaN : 0,
    })

    useEffect(() => {
        if(state.swipe != undefined && state.swipe.length == 0 && isNaN(state.toggles)){
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
        <SwipeAction 
            autoClose
            onOpen={() => {
                setState((oldState) => {
                    //console.log(enter, exit, exit > enter)
                    
                    Cookie.set("swipeToggled", 'toggled', {expires: 10000})
                    if(!isNaN(state.toggles) && state.toggles < 10){
                        note('success', "Easter Egg Hunter", 'Yes, swiping at the the top bar will allow you to cycle through the pages.\n Let\'s see if you can find more secrets 😅', 7)
                    }
                    const enter = 1
                    const exit = 0
                    
                    navigate(state.paths[(state.paths.findIndex(p => p === pathName) + (enter > exit ? 1 : state.paths.length-1)) % state.paths.length])
                    return {...oldState, swipe: [], toggles: NaN}
                })
                
            }}
            right={state.swipe}
        >
            <NavBar 
                mode={"dark"}
                backArrow={<div style={{height: "90%", width: "90%"}}> <TopIcon mobile icons={props.icons}/> </div>}
            />
        </SwipeAction>
    )
}

export default MobileTopMenu