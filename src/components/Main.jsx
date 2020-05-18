import React from 'react';
import {
    Button,
    Icon,
    Layout
} from 'antd'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Prompt
} from 'react-router-dom';

console.log(window.location)

const Content = Layout.Content

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Router basename={'/me'} >
                <Layout style={{ minHeight: '100vh', height:'100vh' }}>
                    <Content>
                        <div>
                            me
                        </div>
                    </Content>
                </Layout>
            </Router>
        )
    }
}

export default Main;