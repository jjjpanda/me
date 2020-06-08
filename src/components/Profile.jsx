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
    DoubleRightOutlined,
    ReadOutlined,
    EnvironmentOutlined,
    ClockCircleOutlined,
    DesktopOutlined,
    FontColorsOutlined,
    CodeOutlined,
    BookOutlined
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
        children: [
            {
                key: "stevensLocation",
                icon: <EnvironmentOutlined />,
                title: "Stevens Institute of Technology - Hoboken, New Jersey",
                children: [
                    {
                        key: "masters",
                        icon: <ReadOutlined />,
                        title: "Master of Science in Financial Engineering",
                        children: [
                            {
                                key: "mtime",
                                icon: <ClockCircleOutlined />,
                                title: "Aug 2020 - May 2021",
                                isLeaf: true
                            },
                            {
                                key:"mgpa",
                                title: "GPA: -/4.00",
                                isLeaf: true
                            }                    
                        ]
                    },
                    {
                        key: "bachelors",
                        icon: <ReadOutlined />,
                        title: "Bachelor of Engineering in Software Engineering",
                        children: [
                            {
                                key: "btime",
                                icon: <ClockCircleOutlined />,
                                title: "Aug 2016 - May 2020",
                                isLeaf: true
                            },
                            {
                                key:"bgpa",
                                title: "GPA: 3.65/4.00",
                                isLeaf: true
                            },
                            {
                                key: "minor",
                                title: "Minor in Computer Science",
                                isLeaf: true
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        key: "workExperience",
        title: "Work Experience",
        children: [
            {
                key: "nokia",
                icon: <EnvironmentOutlined />,
                title: "Nokia Bell Labs Murray Hill - New Providence, New Jersey",
                children: [
                    {
                        key: "nokiatTitle",
                        icon: <DesktopOutlined />,
                        title: "Software Engineering Intern",
                        children: [
                            {
                                key: "nokiaTime",
                                icon: <ClockCircleOutlined />,
                                title: "June 2017 - Aug 2017"
                            }
                        ]
                    }                    
                ]
            }
        ]
    },
    {
        key: "otherExperience",
        title: "Other Experience",
        children: [
            {
                key: "oo",
                icon: <DesktopOutlined />,
                title: "Outsmart Options",
                children: [
                    {
                        key:'ooReact',
                        title: "React Web Application",
                        children: [
                            {
                                key: 'ooReactTime',
                                icon: <ClockCircleOutlined />,
                                title: "June 2019 - Present",
                                isLeaf: true
                            }
                        ]
                    },
                    {
                        key:'ooNetApp',
                        title: ".NET WPF Application",
                        children: [
                            {
                                key: 'ooNetTime',
                                icon: <ClockCircleOutlined />,
                                title: "Sep 2018 - Nov 2018",
                                isLeaf: true
                            }
                        ]
                    }
                ]
            },
            {
                key: "cxia",
                icon: <DesktopOutlined />,
                title: "CXIA",
                children: [
                    {
                        key:'cxiaWeb',
                        title: "Web Application",
                        children: [
                            {
                                key: 'cxiaWebTime',
                                icon: <ClockCircleOutlined />,
                                title: "March 2018 - May 2018",
                                isLeaf: true
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        key: "skills",
        title: "Technical Skills",
        children: [
            {
                key: "languages",
                icon: <FontColorsOutlined />,
                title: "Additional Languages",
                children: [
                    {
                        key: "fluent",
                        title: "Fluent: English, Gujarati"
                    },
                    {
                        key: "proficient",
                        title: "Proficient: Hindi"
                    }
                ]
            },
            {
                key: "programmingLanguages",
                icon: <CodeOutlined />,
                title: "Programming Languages",
                children: [
                    {
                        key: "mostPro",
                        title: "Most Proficient",
                        children: [
                            {
                                key: "js",
                                title: "JavaScript",
                                children: [
                                    {
                                        key: "nodeJS",
                                        title: "NodeJS"
                                    },
                                    {
                                        key: "expressJS",
                                        title: "ExpressJS"
                                    },
                                    {
                                        key: "react",
                                        title: "React"
                                    },
                                    {
                                        key: "angular",
                                        title: "AngularJS"
                                    },
                                    {
                                        key: "jQuery",
                                        title: "jQuery"
                                    }
                                ]
                            },
                            {
                                key: "python",
                                title: "Python"
                            },
                            {
                                key: "cSharp",
                                title: "C#",
                                children: [
                                    {
                                        key: "wpf",
                                        title: "WPF"
                                    },
                                    {
                                        key: "net",
                                        title: ".NET Core"
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        key: "pro",
                        title: "Proficient",
                        children: [
                            {
                                key: "java",
                                title: "Java"
                            },
                            {
                                key: "cPlusPlus",
                                title: "C++"
                            },
                            {
                                key: "html",
                                title: "HTML"
                            },
                            {
                                key: "styling",
                                title: "Styling",
                                children: [
                                    {
                                        key: "css",
                                        title: "CSS"
                                    },
                                    {
                                        key: "less",
                                        title: "Less"
                                    },
                                    {
                                        key: "sass",
                                        title: "SASS"
                                    }
                                ]
                            },
                            {
                                key: "matlab",
                                title: "MATLAB"
                            },
                            {
                                key: "git",
                                title: "Git"
                            },
                            {
                                key: "bash",
                                title: "Bash"
                            }
                        ]
                    },
                    {
                        key: "exp",
                        title: "Experience With",
                        children: [
                            {
                                key: "ruby",
                                title: "Ruby"
                            },
                            {
                                key: "mysql",
                                title: "mySQL"
                            },
                            {
                                key: "xml",
                                title: "XML"
                            },
                            {
                                key: "vba",
                                title: "VBA in Excel"
                            },
                            {
                                key: "r",
                                title: "R"
                            },
                        ]
                    }
                ]
            },
            {
                key: "certifications",
                icon: <BookOutlined />,
                title: "Certifications",
                children: [
                    {
                        key: "bloomberg",
                        title: "Bloomberg Market Concepts"
                    }
                ]
            }
        ]
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

    swipeResumeActions = [
        {
            text: "Preview",
            onPress: () => {this.setPDFVisible(true)},
            style: { backgroundColor: '#03f', color: 'white' },
        },
        {
            text: <a href="/me/img/example.pdf" download style={{color: 'white'}}>
                Download
            </a>,
            style: { backgroundColor: '#f25' },
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
                            <a href="/me/img/example.pdf" download>
                                <Button icon={<DownloadOutlined />} >
                                    Download Resume
                                </Button>
                            </a>
                        </div> : null}
                    </Col>
                </Row>
                
                <Space style={{justifyContent: 'left', width: '100%'}}>
                    <Tree  
                        treeData={resume} 
                        defaultExpandedKeys={[
                            "info",
                            "education",
                            "workExperience",
                            "otherExperience",
                            "skills"
                        ]} 
                        showIcon 
                        selectable={false} 
                        
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