import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Button,
    Icon,
    Layout,
    Table,
    Space,
    Tree,
    Typography,
    Row, 
    Col,
    Modal,
    Rate
} from 'antd'
import {
    GithubOutlined,
    MailOutlined,
    LinkedinOutlined,
    WarningOutlined,
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
    BookOutlined,
    HeartOutlined,
    FundOutlined,
    TrophyOutlined,
    SoundOutlined,
    SendOutlined,
    UserOutlined,
    ContactsOutlined,
    FileAddOutlined,
    LinkOutlined,
    FireFilled
} from '@ant-design/icons'
import {
    Document,
    Page
} from 'react-pdf'
import { SwipeAction, WingBlank } from 'antd-mobile';

import Cookie from 'js-cookie'

import note from './note.jsx'

const resumeLink = "img/JayPandyaResume.pdf"

const otherExperience = {
    key: "otherExperience",
    title: "Other Experience",
    children: [
        {
            key: "chim",
            icon: <DesktopOutlined />,
            title: "Chimera",
            children: [
                {
                    key:'chimWeb',
                    title: "Web Application",
                    children: [
                        {
                            key: 'chimWebTime',
                            icon: <ClockCircleOutlined />,
                            title: "June 2020 - Sept 2020",
                            isLeaf: true
                        }
                    ]
                }
            ]
        },
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
}

const resume = [
    {
        key: "info",
        title: "Me",
        children: [
            {
                key: "name",
                icon: <UserOutlined />,
                title: "Jay Pandya",
                isLeaf: true
            },
            {
                key: "contact",
                icon: <ContactsOutlined />,
                title: "Contact Info",
                children: [
                    {
                        key: "email",
                        icon: <MailOutlined />,
                        title: "Email",
                        children: [
                            {
                                key:"gmail",
                                icon: <LinkOutlined />,
                                title: <a onClick={() => {window.open("mailto:jtpandya3@gmail.com","blank_")}}>jtpandya3@gmail.com</a>,
                                isLeaf: true
                            },
                            {
                                key:"stevens",
                                icon: <LinkOutlined />,
                                title: <a onClick={() => {window.open("mailto:jpandya3@stevens.edu","blank_")}}>jpandya3@stevens.edu</a>,
                                isLeaf: true
                            },
                        ]
                    },
                    {
                        key: "contactForm",
                        icon: <SendOutlined />,
                        title: <Link to={'/?contact'}>Or Contact Me Here</Link>

                    }
                ]
            },
            {
                key: "links",
                icon: <DesktopOutlined />,
                title: "Links",
                children: [
                    {
                        key: "github",
                        icon: <GithubOutlined />,
                        title: <a onClick={() => {window.open("https://www.github.com/jjjpanda","blank_")}}>jjjpanda</a>,
                        isLeaf: true
                    },
                    {
                        key: "linkedin",
                        icon: <LinkedinOutlined />,
                        title: <a onClick={() => {window.open("https://www.linkedin.com/in/jay-pandya-25b814159/","blank_")}} >Jay Pandya</a>,
                        isLeaf: true
                    },
                    {
                        key: "instagram",
                        icon: <InstagramOutlined />,
                        title: <a onClick={() => {window.open("https://www.instagram.com/jthepanda" ,"blank_")}} >@jthepanda</a>,
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
                                icon: <BookOutlined />,
                                title: "GPA: 3.87/4.00",
                                isLeaf: true
                            },
                            {
                                key: "certificate",
                                icon: <FileAddOutlined />,
                                title: "Certificate in Algorithmic Trading Strategies ",
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
                                icon: <BookOutlined />,
                                title: "GPA: 3.65/4.00",
                                isLeaf: true
                            },
                            {
                                key: "minor",
                                icon: <FileAddOutlined />,
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
                key: "nsin",
                icon: <EnvironmentOutlined />,
                title: "National Security Innovation Network - Remote",
                children: [
                    {
                        key: "nsintTitle",
                        icon: <DesktopOutlined />,
                        title: "Software Engineering Contractor",
                        children: [
                            {
                                key: "nsinTime",
                                icon: <ClockCircleOutlined />,
                                title: "Oct 2020 - Feb 2021"
                            }
                        ]
                    }                    
                ]
            },
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
        key: "skills",
        title: "Technical Skills",
        children: [
            {
                key: "languages",
                icon: <FontColorsOutlined />,
                title: "Languages",
                children: [
                    {
                        key: "english",
                        title: "English"
                    },
                    {
                        key: "gujarati",
                        title: "Gujarati"
                    }
                ]
            },
            {
                key: "programmingLanguages",
                icon: <CodeOutlined />,
                title: "Programming Languages and Tools",
                children: [
                    {
                        key: "advanced",
                        title: "Advanced",
                        children: [
                            {
                                key: "js",
                                title: "JavaScript",
                                children: [
                                    {
                                        key: "nodeJS",
                                        title: "Node.js"
                                    },
                                    {
                                        key: "react",
                                        title: "React"
                                    },
                                    {
                                        key: "react-native",
                                        title: "React-Native"
                                    },
                                    {
                                        key: "angular",
                                        title: "AngularJS"
                                    }
                                ]
                            },
                            {
                                key: "git",
                                title: "Git"
                            },
                            {
                                key: "mongoDB",
                                title: "MongoDB",
                            },
                        ]
                    },
                    {
                        key: "pro",
                        title: "Proficient",
                        children: [
                            {
                                key: "cSharp",
                                title: "C#",
                                children: [
                                    {
                                        key: "wpf",
                                        title: "WPF"
                                    },
                                    {
                                        key: "xamarin",
                                        title: "Xamarin"
                                    }
                                ]
                            },
                            {
                                key: "python",
                                title: "Python"
                            },
                            {
                                key: "r-lang",
                                title: "R"
                            },
                            {
                                key: "java",
                                title: "Java"
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
                                key: "markdown",
                                title: "Markdown"
                            },
                            {
                                key: "linux",
                                title: "Linux"
                            }
                        ]
                    },
                    {
                        key: "intermediate",
                        title: "Intermediate",
                        children: [
                            {
                                key: "cPlusPlus",
                                title: "C++"
                            },
                            {
                                key: "matlab",
                                title: "MATLAB"
                            },
                            {
                                key: "azure",
                                title: "Azure"
                            },
                            {
                                key: "junit",
                                title: "JUnit"
                            },
                            {
                                key: "bloom",
                                title: "Bloomberg Terminal"
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
                                key: "vba",
                                title: "VBA in Excel"
                            },
                            {
                                key: "docker",
                                title: "Docker"
                            },
                            {
                                key: "googleCloud",
                                title: "Google Cloud"
                            },
                        ]
                    }
                ]
            },
            {
                key: "interests",
                icon: <HeartOutlined />,
                title: "Interests",
                children: [
                    {
                        key: "loveCoding",
                        icon: <CodeOutlined />,
                        title: "Programming"
                    },
                    {
                        key: "poker",
                        icon: <TrophyOutlined />,
                        title: "Poker"
                    },
                    {
                        key: "optionsTrading",
                        icon: <FundOutlined />,
                        title: "Options Trading"
                    },
                    {
                        key: "musicProduction",
                        icon: <SoundOutlined />,
                        title: "Making Music"
                    }
                ]
            }
        ]
    }
]

const ranking = {
    1: "Why Would I Even Put This",
    2: "Experience",
    3: "Intermediate",
    4: "Proficient",
    5: "Advanced"
}

const skillColumns = (mobile) => (mobile ? [
    {
        title: "Skill",
        dataIndex: "skill",
        render: (skill, entry) => (<div>
            <div>
                {skill}
                <br />
                <div style={{float: "right"}}>
                    <Rate character={<FireFilled />} value={entry.rating} disabled />
                    <br />
                    {ranking[entry.rating]}
                </div>
            </div>
        </div>)
    }
    ] : [
    {
        title: "Skill",
        dataIndex: "skill"
    },
    {
        title: "Level",
        dataIndex: "rating",
        render: rating => (<Rate character={<FireFilled />} value={rating} disabled />)
    },
    {
        title: " ",
        dataIndex: "rating",
        render: rating => (<div>
            {ranking[rating]}
        </div>)
    }
])

const skills = [
    {
        skill: "Object Oriented Software Engineering",
        rating: 5
    },
    {
        skill: "Software Documentation",
        rating: 4
    },
    {
        skill: "Test Driven Development",
        rating: 4
    },
    {
        skill: "Data Structures & Algorithms",
        rating: 5
    },
    {
        skill: "Agile Methods in Software Engineering",
        rating: 4
    },
    {
        skill: "Pricing & Hedging Strategies",
        rating: 5
    },
    {
        skill: "Market Microstructure",
        rating: 5
    },
    {
        skill: "Git",
        rating: 5
    },
    {
        skill: "Linux",
        rating: 4
    },
    {
        skill: "JavaScript",
        rating: 5
    },
    {
        skill: "Java",
        rating: 4
    },
    {
        skill: "JUnit",
        rating: 3
    },
    {
        skill: "C++",
        rating: 3
    },
    {
        skill: "C#",
        rating: 4
    },
    {
        skill: "HTML",
        rating: 4
    },
    {
        skill: "MongoDB",
        rating: 5
    },
    { 
        skill: "SQL",
        rating: 2
    },
    {
        skill: "MATLAB",
        rating: 3
    },
    {
        skill: "R",
        rating: 4
    },
    {
        skill: "Docker",
        rating: 2
    }
]

const reducer =  (a, c) => {
    return a + (c.children != undefined ? 1+c.children.reduce(reducer, 0) : 0)
}

class Resume extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pdfVisible: false,
            pdfWidth: Math.floor(window.innerWidth * 0.80),
            keyCount: resume.reduce(reducer, 0), 
            expandedKeys: [
                "info",
                "education",
                "workExperience",
                "otherExperience",
                "skills"
            ],
            checkIfAllExpanded: (state) => {
                console.log(state.keyCount, state.expandedKeys.length)
                if(state.keyCount == state.expandedKeys.length && Cookie.get('openedEntireResume') != "true"){
                    Cookie.set('openedEntireResume', true)
                    note('success', "Leave No Stone Unturned", "So, you just opened my entire resume tree. That's dedication.", 5)
                }
            }
        }
        console.log(this.state.keyCount)
    }

    setPDFVisible = (visible) => {
        this.setState(() => ({pdfVisible: visible}))
    }

    swipeResumeActions = [
        {
            text: "Preview",
            onPress: () => {this.setPDFVisible(true)},
            style: { backgroundColor: '#03f', color: 'white', borderRadius: "5%", margin: "1%" },
        },
        {
            text: <a href={resumeLink} download style={{color: 'white'}}>
                Download
            </a>,
            style: { backgroundColor: '#f25', borderRadius: "5%", margin: "1%" },
        }
    ]

    componentDidMount(){
        window.addEventListener('resize', () => {
            this.setState({pdfWidth: Math.floor(window.innerWidth * 0.66)})
        })
    }

    render(){
        const resumeTree = (
            <Space style={{justifyContent: 'left', width: '100%'}}>
                <Tree  
                    treeData={resume} 
                    defaultExpandedKeys={this.state.expandedKeys} 
                    expandedKeys={this.state.expandedKeys}
                    showIcon 
                    selectable={true} 
                    onExpand={(arr, n) => {
                        console.log("EXPANDS", arr, n)
                        this.setState(() => {
                            return {expandedKeys: arr}
                        }, () => {
                            this.state.checkIfAllExpanded(this.state)
                        })
                    }}
                    onSelect={(arr, n) => {
                        console.log("SELECT", arr, n)
                        this.setState((oldState) => {
                            const index = oldState.expandedKeys.findIndex(k => k === n.node.key)
                            console.log(index, oldState.expandedKeys)
                            if(index != -1){
                                oldState.expandedKeys.splice(index, 1)
                                return {expandedKeys: [...oldState.expandedKeys]}
                            }
                            else{
                                return {expandedKeys: [...new Set([...oldState.expandedKeys, n.node.key])]}
                            }
                        }, () => {
                            this.state.checkIfAllExpanded(this.state)
                        })
                    }}
                    switcherIcon={<DownCircleFilled />} 
                />  
            </Space>
        )

        const skillTable = <Table 
            dataSource={skills} 
            columns={skillColumns(this.props.mobile)} 
            size={'small'} 
            pagination={{
                position: ['topRight','bottomRight'], 
                pageSize: (this.props.mobile ? 6 : 8)
            }} 
        />

        return (
            <Space direction="vertical" style={{width: '100%'}}>

                <Row align="middle" >
                    <Col span={20}>
                        <Typography.Title>Resume</Typography.Title>
                        <Typography>Or you could download the PDF {this.props.mobile ? "down there" : "to the right"}. <br/>Show it to employers maybe. <br />Or maybe you're an employer. Hello. <Link to={"/?contact"}>Talk to me.</Link></Typography>
                    </Col>
                    <Col span={4} >
                        {!this.props.mobile ? <Space direction="vertical" style={{float: "right"}}>
                            <Button icon={<FileOutlined />} onClick={() => {
                                this.setPDFVisible(true)
                            }}>
                                Open Preview
                            </Button>
                            <a href={resumeLink} download>
                                <Button type={'primary'} icon={<DownloadOutlined />} >
                                    Download Resume
                                </Button>
                            </a>
                        </Space> : null}
                    </Col>
                </Row>

                {this.props.mobile ? <WingBlank>
                    <SwipeAction 
                        autoClose
                        right ={this.swipeResumeActions}
                        left ={this.swipeResumeActions}
                    >
                        <Space style={{justifyContent: 'right', height: "5vh", width: '100%', backgroundColor: (Cookie.get('darkModeToggled') == 'true' ? '#000' : "#fff")}}>
                            <DoubleRightOutlined />
                            <Typography.Text>Resume PDF</Typography.Text>
                            <DoubleRightOutlined />
                        </Space>
                    </SwipeAction>
                </WingBlank> : null}

                {this.props.mobile ? [resumeTree, skillTable] : <Row>
                    <Col span={10}>
                        {resumeTree}
                    </Col>
                    <Col span={14}>
                        {skillTable}
                        <br />
                        <Typography style={{float: "right"}}>
                            {
                                Math.random() > 0.33 ? 
                                "Maybe I think too highly of myself... probably not, though." : 
                                "I wonder about the inflationary effects of not rating anything 1 star in a 5 star rating..."
                            }
                        </Typography>
                    </Col>
                </Row> }
                
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
                        file={resumeLink} 
                        height={"100%"}
                        error={<Space style={{justifyContent: 'center', width: '100%', fontSize: "30px"}}>
                            <WarningOutlined />
                        </Space>}
                        loading={<Space style={{justifyContent: 'center', width: '100%', fontSize: "30px"}}>
                            <LoadingOutlined />
                        </Space>}
                        externalLinkTarget={"_blank"}
                    >   
                        <Page pageNumber={1} className={"pdf"} width={this.state.pdfWidth}/>
                    </Document>
                </Modal>        
            </Space>
        )
    }
}

export default Resume;