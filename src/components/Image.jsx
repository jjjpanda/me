import React, {useEffect, useState, useRef} from 'react'

import Cookie from 'js-cookie'
import useDarkTheme from '../hooks/useDarkTheme'

const Image = (props) => {
    const [clicked, setClicked] = useState(false)
    const isDarkTheme = useDarkTheme();
    
    const firstUpdate = useRef(true);

    useEffect(() => {
        if(firstUpdate.current){
            firstUpdate.current = false; 
            return
        }
        if(clicked){
            if(props.onClick) {
                props.onClick()
            }
            setTimeout(() => {
                setClicked(false)
            }, 1600)
        }
        else{
            if(props.onEnd){
                props.onEnd()
            }
        }
    }, [clicked])

    const click = () => {
        if(!clicked){
            setClicked(true)
        }
    }

    const styleDiv = {
        ...props.style,
        filter: `drop-shadow(0 0 0.9vh ${isDarkTheme ? "#ffeeff" : "#040002"})`,
    }
    if(clicked){
        return (
            <div className={"fitDiv"} style={styleDiv}>
                <img 
                    className= {"iconNoPos"} 
                    src={props.src} 
                    alt={props.alt} 
                />
                <img 
                    className= {"icon glitch1"} 
                    src={props.src} 
                    alt={props.alt} 
                    style={{
                        left: "2px", 
                        filter: "hue-rotate(45deg)"
                    }}
                />
                <img 
                    className= {"icon glitch2"} 
                    src={props.src} 
                    alt={props.alt} 
                    style={{
                        left: "-1px", 
                        filter: "hue-rotate(180deg)"
                    }}
                />
            </div>
        )
    }
    else{
        return <img 
            className={"fitDiv"}
            src={props.src} 
            alt={props.alt} 
            style={styleDiv}
            onClick = {click}
        />
    }
}

export default Image