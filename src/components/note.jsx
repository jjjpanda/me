import React from 'react'
import {
    notification
} from 'antd'

const note = (type, message, description, duration, placement) => notification[type]({
    message,
    description,
    duration,
    placement
});

export default note