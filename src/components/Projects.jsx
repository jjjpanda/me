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
                {title: "Project 1"},
                {title: "Project 2"},
                {title: "Project 3"},
                {title: "Project 4"},
                {title: "Project 5"},
                {title: "Project 6"},
                {title: "Project 7"},
                {title: "Project 8"},
                {title: "Project 9"},
            ]
        }
    }

    renderProjects = () => {
        let projects = []
        let i = this.state.projects.length
        while(i >= 1){
            if(this.props.mobile || i == 1){
                projects.push(<Row>
                    <Col span={24}>
                        <Project {...this.state.projects[i-1]}/>
                    </Col>
                </Row>)
                i--
            }
            else{
                if(i % 2 == 0){
                    projects.push(<Row>
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
                    projects.push(<Row>
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
            <Space direction="vertical">

                <Typography.Title>Projects</Typography.Title>
                <Typography>You know...</Typography>

                <Space direction="vertical" style={{ alignContent: "center"}}>
                    {this.renderProjects()}
                </Space>
            
            </Space>
        )
    }
}

export default Projects;