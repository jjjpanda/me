import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

let IconHover = (props) => {
    return (
        <Link to={props.to} >
            {props.icon}
            {props.text}
        </Link>
    )
}

export default IconHover