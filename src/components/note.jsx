import React from 'react'
import {
    notification
} from 'antd'

const note = (type, message, description, duration) => notification[type]({
    message,
    description,
    duration,
    placement: "topRight"
});

export default note