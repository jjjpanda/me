import React, {useState} from 'react';
import {
    Layout,
    Affix,
} from 'antd'
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import NavMenu from './NavMenu.jsx';
import TopIcon from './TopIcon.jsx';
import FooterBar from './FooterBar.jsx'
import Page from './Page.jsx';

const Header = Layout.Header
const Content = Layout.Content

const Main = (props) => {
    const [render, setRender] = useState(true)

    return (
        <Router >
            
            <Layout style={{ minHeight: "100vh" }}>

                <Layout >
                    
                    <Affix offsetTop={0}>
                        <div className={"header"}>
                            <Header style={{ padding: '0px 0px', color: "white" }}>
                                
                                <TopIcon icons={props.icons}/>
                                
                                <div style={{float: 'right', display: 'inline-block'}}>
                                    <NavMenu updateParent={() => {setRender(true)}} mode='horizontal'/>  
                                </div>
                                                    
                            </Header>
                        </div>
                    </Affix>

                    <Content style={{ padding: '5px 20px' }}>
                        <Page icons={props.icons}/>
                    </Content>

                    <FooterBar />

                </Layout>
            </Layout>
        </Router>
    )
}

export default Main;