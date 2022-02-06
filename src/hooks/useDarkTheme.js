import {useState} from 'react'
import { Modal } from "antd"
import Cookie from 'js-cookie'

const useDarkTheme = () => {
    const [isDarkTheme] = useState(Cookie.get('darkModeToggled') == 'true')
    
    const toggleTheme = (callback) => {
        Cookie.set('darkModeToggled', !isDarkTheme, {expires: 100000})
        callback()
        window.location.reload(false)
    }

    const triggerToggleTheme = () => {
        Modal.confirm({
			title: `Switch to ${isDarkTheme ? "light" : "dark"} theme?`,
			okText: "Yes",
			cancelText: "No",
			onOk: toggleTheme
		})
    }

    return [isDarkTheme, triggerToggleTheme]
}

export default useDarkTheme