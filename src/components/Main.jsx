import React from 'react';
import {
    Button,
    Icon,
    Layout,
    Affix,
    Space
} from 'antd'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Prompt
} from 'react-router-dom';

console.log(`url(${window.location+"img/gradient.png"})`)

const Content = Layout.Content
const Footer = Layout.Footer

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Router basename={'/me'} >
                <Layout>
                                      
                    <Content>

                        <Affix offsetTop={0}>
                            <div style={{backgroundImage: `url(${window.location+"img/gradient.png"})`}}>
                                <img style = {{height: "50px", width: "50px"}} src = "/me/img/blackIcon.png" />
                            </div>
                        </Affix>  

                        <Space direction="vertical">
                            
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>

                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>
                            <Button>Bruh</Button>

                        </Space>
                        
                    </Content>

                    <Footer style={{textAlign: "center", color: "black"}}>
                        Jay Pandya
                    </Footer>

                </Layout>
            </Router>
        )
    }
}

export default Main;