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
    ArrowDownOutlined
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
                        title: "Phone: (---) --- ----",
                        isLeaf: true
                    },
                    {
                        key: "email",
                        title: "Email",
                        children: [
                            {
                                key:"gmail",
                                icon: <MailOutlined />,
                                title: "jtpandya3@gmail.com",
                                isLeaf: true
                            },
                            {
                                key:"stevens",
                                icon: <MailOutlined />,
                                title: "jpandya3@stevens.edu",
                                isLeaf: true
                            },
                        ]
                    }
                ]
            },
            {
                key: "links",
                title: "Links",
                children: []
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

class Profile extends React.Component{
    render(){
        return (
            <Space direction="vertical">

                <Typography.Title>Bruh moment</Typography.Title>
                <Typography>I'm Jay</Typography>

                <Tree treeData={resume} showIcon switcherIcon={<ArrowDownOutlined />} />
            
            </Space>
        )
    }
}

export default Profile;