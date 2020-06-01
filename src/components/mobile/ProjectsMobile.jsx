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

import Project from "../desktop/Project.jsx"

class ProjectsMobile extends React.Component{
    render(){
        return (
            <Space direction="vertical">

                <Typography.Title>Projects</Typography.Title>
                <Typography>You know...</Typography>

                <Space direction="vertical" style={{ alignContent: "center"}}>
                    <Row>
                        <Col span={12}>
                            <Project />
                        </Col>
                        <Col span={12}>
                            <Project />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Project />
                        </Col>
                        <Col span={8}>
                            <Project />
                        </Col>
                        <Col span={8}>
                            <Project />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Project />
                        </Col>
                        <Col span={8}>
                            <Project />
                        </Col>
                        <Col span={8}>
                            <Project />
                        </Col>
                    </Row>
                </Space>
            
            </Space>
        )
    }
}

export default ProjectsMobile;