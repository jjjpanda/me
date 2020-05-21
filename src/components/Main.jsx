import React from 'react';
import {
    Button,
    Icon,
    Layout,
    Affix,
    Space,
    Drawer,
    Typography
} from 'antd'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Prompt
} from 'react-router-dom';
import {
    UnorderedListOutlined,
    GithubOutlined,
    MailOutlined,
    LinkedinOutlined,
    InstagramOutlined,
    FireOutlined,
    HomeOutlined, 
    UserOutlined,  
    ProfileOutlined,             
    StarOutlined,
    CommentOutlined,
} from '@ant-design/icons'

console.log(`url(${window.location+"img/gradient.png"})`)

const Header = Layout.Header
const Content = Layout.Content
const Footer = Layout.Footer

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false
        }
    }

    closeDrawer = () => {
        this.setState({
            visible: false,
        });
    };

    openDrawer = () => {
        this.setState({
            visible: true,
        })
    }

    render() {
        return (
            <Router basename={'/me'} >

                <Drawer
                    title={<img onClick={this.closeDrawer} style = {{height: "50px", width: "50px"}} src = "/me/img/redIcon.png" />}
                    width={"15vh"}
                    placement="left"
                    closable={false}
                    drawerStyle={{ textAlign: "center" }}
                    onClose={this.closeDrawer}
                    visible={this.state.visible}
                >
                    <Space direction={"vertical"}>
                        <HomeOutlined />
                        <UserOutlined />
                        <ProfileOutlined />
                        <StarOutlined />
                        <CommentOutlined />
                    </Space>
                </Drawer>

                <Layout style={{ minHeight: "100vh" }}>

                    <Header style={{ padding: '0px 5px', color: "white" }}>
                        <Space onClick={this.openDrawer}>
                            <UnorderedListOutlined />
                            <Affix offsetTop={0}>
                                <img  style = {{height: "50px", width: "50px"}} src = "/me/img/blackIcon.png" />
                            </Affix>
                        </Space>
                    </Header>
                                      
                    <Content style={{ padding: '5px 20px' }}>

                        <Space direction="vertical">

                            <Typography>Hello world!</Typography>
                            <Typography>Oh, that's tacky.</Typography>
                        
                        </Space>
                        
                    </Content>

                    <Footer style={{ padding: '0px 5px', textAlign: "center", color: "black" }}>
                        
                        Jay Pandya

                        <br />

                        <Space>
                            <GithubOutlined />
                            <MailOutlined />
                            <InstagramOutlined />
                            <LinkedinOutlined />
                            <FireOutlined />
                        </Space>
                       
                    </Footer>

                </Layout>
            </Router>
        )
    }
}

export default Main;