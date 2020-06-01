import React from 'react';
import {
    Button,
    Icon,
    Layout,
    Affix,
    Space,
    Tree,
    Typography
} from 'antd'
import {
    GithubOutlined,
    MailOutlined,
    LinkedinOutlined,
    PhoneOutlined,
    ArrowDownOutlined,
    InstagramOutlined
} from '@ant-design/icons'

const resume = [
    {
        key: "info",
        title: "Me",
        children: [
            {
                key: "name",
                title: "Name: Jay Pandya",
                isLeaf: true
            },
            {
                key: "contact",
                title: "Contact Info",
                children: [
                    {
                        key: "phone",
                        icon: <PhoneOutlined />,
                        title: <a href="tel:---">Phone: (---) --- ----</a>,
                        isLeaf: true
                    },
                    {
                        key: "email",
                        icon: <MailOutlined />,
                        title: "Email",
                        children: [
                            {
                                key:"gmail",
                                title: <a href="mailto:jtpandya3@gmail.com">jtpandya3@gmail.com</a>,
                                isLeaf: true
                            },
                            {
                                key:"stevens",
                                title: <a href="mailto:jpandya3@stevens.edu">jpandya3@stevens.edu</a>,
                                isLeaf: true
                            },
                        ]
                    }
                ]
            },
            {
                key: "links",
                title: "Links",
                children: [
                    {
                        key: "github",
                        icon: <a href="https://www.github.com/jjjpanda"><GithubOutlined /></a>,
                        title: "jjjpanda",
                        isLeaf: true
                    },
                    {
                        key: "linkedin",
                        icon: <a href="https://www.linkedin.com/in/jay-pandya-25b814159/"><LinkedinOutlined /></a>,
                        title: "Jay Pandya",
                        isLeaf: true
                    },
                    {
                        key: "instagram",
                        icon: <a href="https://www.instagram.com/jthepanda"><InstagramOutlined /></a>,
                        title: "@jthepanda",
                        isLeaf: true
                    }
                ]
            }
        ]
    },
    {
        key: "education",
        title: "Education",
        children: []
    },
    {
        key: "workExperience",
        title: "Work Experience",
        children: []
    },
    {
        key: "otherExperience",
        title: "Other Experience",
        children: []
    },
    {
        key: "skills",
        title: "Technical Skills",
        children: []
    }
]

class ProfileMobile extends React.Component{
    render(){
        return (
            <Space direction="vertical">

                <Typography.Title>Bruh moment</Typography.Title>
                <Typography>I'm Jay</Typography>

                <Tree treeData={resume} showIcon selectable={false} switcherIcon={<ArrowDownOutlined />} />
            
            </Space>
        )
    }
}

export default ProfileMobile;