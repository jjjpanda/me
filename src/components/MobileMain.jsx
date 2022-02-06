import React, {useState} from 'react';
import {
    Space
} from 'antd-mobile';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import MobileTopMenu from './MobileTopMenu.jsx'
import NavMenu from './NavMenu.jsx';
import FooterBar from './FooterBar.jsx'
import Page from './Page.jsx';

const MobileMain = (props) => {
    const [render, setRender] = useState(true)

    return (
        <Router className="flex-container" >
            <MobileTopMenu icons={props.icons}/>

            <NavMenu updateParent={() => {setRender(true)}} mobile/>

            <Space style={{minHeight: "100vh"}}>
                <Page mobile icons={props.icons}/>
            </Space>

            <FooterBar mobile />
        </Router>
    )
}

export default MobileMain;