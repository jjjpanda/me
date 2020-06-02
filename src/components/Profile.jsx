import React from 'react';
import {
    Button,
    Icon,
    Layout,
    Affix,
    Space,
    Tree,
    Typography,
    Row, 
    Col,
    Modal
} from 'antd'
import {
    GithubOutlined,
    MailOutlined,
    LinkedinOutlined,
    PhoneOutlined,
    InstagramOutlined,
    DownCircleFilled,
    DownloadOutlined,
    LoadingOutlined,
    FileOutlined,
    DoubleRightOutlined
} from '@ant-design/icons'
import {
    Document,
    Page
} from 'react-pdf'
import { SwipeAction, WingBlank } from 'antd-mobile';

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
                        icon: <GithubOutlined />,
                        title: <a href="https://www.github.com/jjjpanda">jjjpanda</a>,
                        isLeaf: true
                    },
                    {
                        key: "linkedin",
                        icon: <LinkedinOutlined />,
                        title: <a href="https://www.linkedin.com/in/jay-pandya-25b814159/">Jay Pandya</a>,
                        isLeaf: true
                    },
                    {
                        key: "instagram",
                        icon: <InstagramOutlined />,
                        title: <a href="https://www.instagram.com/jthepanda">@jthepanda</a>,
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

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pdfVisible: false,
            pdfWidth: Math.floor(window.innerWidth * 0.66)
        }
    }

    setPDFVisible = (visible) => {
        this.setState(() => ({pdfVisible: visible}))
    }

    downloadPDF = () => {

    }

    swipeResumeActions = [
        {
            text: "Preview",
            onPress: () => {this.setPDFVisible(true)},
            style: { backgroundColor: '#03f', color: 'white' },
        },
        {
            text: "Download",
            onPress: () => {this.downloadPDF},
            style: { backgroundColor: '#f25', color: 'white' },
        }
    ]

    componentDidMount(){
        window.addEventListener('resize', () => {
            this.setState({pdfWidth: Math.floor(window.innerWidth * 0.66)})
        })
    }

    render(){
        return (
            <Space direction="vertical" style={{width: '100%'}}>

                <Row>
                    <Col span={20}>
                        <Typography.Title>Bruh moment</Typography.Title>
                        <Typography>I'm Jay</Typography>
                    </Col>
                    <Col span={4} >
                        {!this.props.mobile ? <div style={{float: "right"}}>
                            <Button icon={<FileOutlined />} onClick={() => {
                                this.setPDFVisible(true)
                            }}>
                                Open Preview
                            </Button>
                            <Button icon={<DownloadOutlined />} onClick={this.downloadPDF}>
                                Download Resume
                            </Button>
                        </div> : null}
                    </Col>
                </Row>
                
                <Space style={{justifyContent: 'left', width: '100%'}}>
                    <Tree  
                        treeData={resume} 
                        showIcon 
                        selectable={false} 
                        defaultExpandAll
                        switcherIcon={<DownCircleFilled />} 
                    />  
                </Space>

                {this.props.mobile ? <WingBlank>
                    <SwipeAction 
                        autoClose
                        right ={this.swipeResumeActions}
                        left ={this.swipeResumeActions}
                    >
                        <Space style={{justifyContent: 'right', width: '100%'}}>
                            <Typography.Text>Resume PDF</Typography.Text>
                            <DoubleRightOutlined />
                        </Space>
                    </SwipeAction>
                </WingBlank> : null}
                
                <Modal 
                    footer={null}
                    title={"Resume"}
                    onCancel={() => {
                        this.setPDFVisible(false)
                    }}
                    maskClosable
                    closable
                    visible={this.state.pdfVisible}
                    width={this.props.mobile ? "100%" : "90%"}
                >
                    <Document 
                        file={"/me/img/example.pdf"} 
                        height={"100%"}
                        error={<DownloadOutlined />}
                        loading={<LoadingOutlined />}
                        externalLinkTarget={"_blank"}
                    >   
                        <Page pageNumber={1} className={"pdf"} width={this.state.pdfWidth}/>
                    </Document>
                </Modal>        
            </Space>
        )
    }
}

export default Profile;