import React from 'react';
import {
    Row,
    Col,
    Affix,
    Space,
    Drawer,
    Typography,
    Card
} from 'antd'

import Project from "./Project.jsx"

class Projects extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            projects: [
                {
                    title: "Project 1",
                    images: ['/me/img/abstract.png','/me/img/galaxy.png','/me/img/gradient.png'],
                    tags: ["JavaScript", "HTML", "CSS"],
                    subtitle: "A Bruh Moment",
                    description: "It's a project; you know how it is.",
                    link: "https://jjjpanda.github.io/me"
                },
                {
                    title: "Project 2",
                    images: ['/me/img/blueIcon.png','/me/img/galaxy.png','/me/img/gradient.png'],
                    tags: ["MATLAB", "Java", "Python"],
                    subtitle: "A Bruh Moment",
                    description: "It's a project; you know how it is.",
                    link: "https://jjjpanda.github.io/me"
                },
                {
                    title: "Project 3",
                    images: ['/me/img/orangeIcon.png','/me/img/galaxy.png','/me/img/gradient.png'],
                    tags: ["C++", "C#", "CSS"],
                    subtitle: "A Bruh Moment",
                    description: "It's a project; you know how it is.",
                    link: "https://jjjpanda.github.io/me"
                },
                {
                    title: "Project 4",
                    images: ['/me/img/abstract.png','/me/img/galaxy.png','/me/img/gradient.png'],
                    tags: ["JavaScript", "HTML", "CSS"],
                    subtitle: "A Bruh Moment",
                    description: "It's a project; you know how it is.",
                    link: "https://jjjpanda.github.io/me"
                },
                {
                    title: "Project 5",
                    images: ['/me/img/violetIcon.png','/me/img/galaxy.png','/me/img/gradient.png'],
                    tags: ["JavaScript", "React", "HTML"],
                    subtitle: "A Bruh Moment",
                    description: "It's a project; you know how it is.",
                    link: "https://jjjpanda.github.io/me"
                },
                {
                    title: "Project 6",
                    images: ['/me/img/abstract.png','/me/img/galaxy.png','/me/img/gradient.png'],
                    tags: ["JavaScript", "HTML", "CSS"],
                    subtitle: "A Bruh Moment",
                    description: "It's a project; you know how it is.",
                    link: "https://jjjpanda.github.io/me"
                },
                {
                    title: "Project 7",
                    images: ['/me/img/galaxy.png', '/me/img/gradient.png', '/me/img/redIcon.png','/me/img/gradient.png'],
                    tags: ["JavaScript", "NodeJS", "CSS", "HTML"],
                    subtitle: "A Bruh Moment",
                    description: "It's a project; you know how it is.",
                    link: "https://jjjpanda.github.io/me"
                },
            ]
        }
    }

    renderProjects = () => {
        let projects = []
        let i = this.state.projects.length
        while(i >= 1){
            if(this.props.mobile || i == 1){
                projects.push(<Row gutter={[8, 8]} style={{
                    minWidth: "100%",
                    width: "100%"  
                }}>
                    <Col span={24}>
                        <Project {...this.state.projects[i-1]}/>
                    </Col>
                </Row>)
                i--
            }
            else{
                if(i % 2 == 0){
                    projects.push(<Row gutter={[8, 8]} style={{
                        minWidth: "100%",
                        width: "100%"  
                    }}>
                        <Col span={12}>
                            <Project {...this.state.projects[i-1]}/>
                        </Col>
                        <Col span={12}>
                            <Project {...this.state.projects[i-2]}/>
                        </Col>
                    </Row>)
                    i-=2
                }
                else if(i >= 3){
                    projects.push(<Row gutter={[8, 8]} style={{
                        minWidth: "100%",
                        width: "100%"  
                    }}>
                        <Col span={8}>
                            <Project {...this.state.projects[i-1]}/>
                        </Col>
                        <Col span={8}>
                            <Project {...this.state.projects[i-2]}/>
                        </Col>
                        <Col span={8}>
                            <Project {...this.state.projects[i-3]}/>
                        </Col>
                    </Row>)
                    i-=3
                }
            }
        }
        
        return projects
    }

    render(){
        return (
            <Space direction="vertical" style= {{
                minWidth: "100%",
                width: "100%",  
            }}>

                <Typography.Title>Projects</Typography.Title>
                <Typography>You know...</Typography>

                <Space direction="vertical" style={{ 
                    alignContent: "center",
                    minWidth: "100%",
                    width: "100%"  
                }}>
                    {this.renderProjects()}
                </Space>
            
            </Space>
        )
    }
}

export default Projects;