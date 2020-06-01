import React from 'react';
import {
    Layout,
    Space,
    Typography
} from 'antd'
import {
    TabBar
} from 'antd-mobile';
import {
    GithubOutlined,
    MailOutlined,
    LinkedinOutlined,
    InstagramOutlined,
    PlayCircleOutlined
} from '@ant-design/icons'

const Footer = Layout.Footer

import LinkIcon from './LinkIcon.jsx'

class FooterBar extends React.Component{

    render(){
        if(this.props.mobile){
            return (
                <TabBar
                    barTintColor={"transparent"}
                    tabBarPosition="bottom"
                >
                    <TabBar.Item 
                        key="github" 
                        title={"Github"}
                        selected = {false} 
                        icon={<GithubOutlined />} 
                        selectedIcon={<GithubOutlined />}
                        onPress = {() => {
                            window.open("https://www.github.com/jjjpanda", "_blank")
                        }}
                    />
                    <TabBar.Item 
                        key="linkedin" 
                        title={"LinkedIn"}
                        selected = {false} 
                        icon={<LinkedinOutlined />} 
                        selectedIcon={<LinkedinOutlined />}
                        onPress = {() => {
                            window.open("https://www.linkedin.com/in/jay-pandya-25b814159/", "_blank")
                        }}
                    />
                    <TabBar.Item 
                        key="email" 
                        title={"Email"}
                        selected = {false} 
                        icon={<MailOutlined />} 
                        selectedIcon={<MailOutlined />}
                        onPress = {() => {
                            window.open("mailto:jtpandya3@gmail.com", "_blank")
                        }}
                    />
                    <TabBar.Item 
                        key="instagram" 
                        title={"Instagram"}
                        selected = {false} 
                        icon={<InstagramOutlined />} 
                        selectedIcon={<InstagramOutlined />}
                        onPress = {() => {
                            window.open("https://www.instagram.com/jthepanda", "_blank")
                        }}
                    />
                    <TabBar.Item 
                        key="music" 
                        title={"Music"}
                        selected = {false} 
                        icon={<PlayCircleOutlined />} 
                        selectedIcon={<PlayCircleOutlined />}
                        onPress = {() => {
                            window.open("https://www.soundcloud.com/whoamistupid", "_blank")
                        }}
                    />
                </TabBar>
            )
        }
        else{
            return (
                <Footer style={{ padding: '0px 5px', textAlign: "center"}}>

                <Space >
                    <LinkIcon 
                        title={"github ( jjjpanda )"} 
                        href="https://www.github.com/jjjpanda" 
                        icon={<GithubOutlined />} 
                    /> 
                    <LinkIcon 
                        title={"linkedin ( Jay Pandya )"} 
                        href="https://www.linkedin.com/in/jay-pandya-25b814159/" 
                        icon={<LinkedinOutlined />} 
                    />
                    <LinkIcon 
                        title={"email ( jtpandya3@gmail.com )"} 
                        href="mailto:jtpandya3@gmail.com" 
                        icon={<MailOutlined />} 
                    />
                    <LinkIcon 
                        title={"instagram ( jthepanda )"} 
                        href="https://www.instagram.com/jthepanda" 
                        icon={<InstagramOutlined />} 
                    /> 
                    <LinkIcon 
                        title={"soundcloud ( J The Panda )"} 
                        href="https://www.soundcloud.com/whoamistupid" 
                        icon={<PlayCircleOutlined />} 
                    />
                </Space>
                <br/>
                <Typography.Text strong style={{color: "black"}}>Jay Pandya</Typography.Text>

                </Footer>
            )
        }
    }
}

export default FooterBar