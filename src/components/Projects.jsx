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
                    title: "CXIA",
                    images: [
                        '/me/img/projects/cxia/cxia_0.png',
                        '/me/img/projects/cxia/cxia_1.png',
                        '/me/img/projects/cxia/cxia_2.png',
                        '/me/img/projects/cxia/cxia_3.png',
                        '/me/img/projects/cxia/cxia_4.png'
                    ],
                    tags: ["Web App", "HTML", "JavaScript", "CSS", "Google Charts", "JSON", "Excel"],
                    subtitle: "Cryptocurrency Exchange Indicator Analysis",
                    description: "Using Google Charts and a free JSON REST API for cryptocurrency price data, CXIA charts out different technical indicators of a selected currency.",
                    link: "https://www.github.com/jjjpanda/CXIA"
                },
                {
                    title: "HTML Visualizer",
                    images: [
                        '/me/img/projects/vis/vis_0.png',
                        '/me/img/projects/vis/vis_1.png',
                        '/me/img/projects/vis/vis_2.png'
                    ],
                    tags: ["Web App", "HTML", "JavaScript"],
                    subtitle: "A Simple Audio Visualizer",
                    description: "Pulling from the system microphone, this visualizer logarithmically displays freqencies ranges from 20 HZ to 20 kHz with a Fast Fourier Transform to find amplitudes.",
                    link: "https://jjjpanda.github.io/HTML-Visualizer"
                },
                {
                    title: "Options Calculator",
                    images: [
                        '/me/img/projects/options-calc/options-calc_0.png',
                        '/me/img/projects/options-calc/options-calc_1.png',
                        '/me/img/projects/options-calc/options-calc_2.png'
                    ],
                    tags: ["PC App", "C#", "WPF"],
                    subtitle: "A Manual Options Profit Calculator",
                    description: "This Windows Form Application is a manual entry options calculator that uses Black Scholes and Newton Raphson to display profit.",
                    link: "https://www.github.com/jjjpanda/Options-Calculator"
                },
                {
                    title: "RP Interval Quiz",
                    images: [
                        '/me/img/projects/rp-interval/rp-interval_0.png',
                        '/me/img/projects/rp-interval/rp-interval_1.png',
                        '/me/img/projects/rp-interval/rp-interval_2.png',
                        '/me/img/projects/rp-interval/rp-interval_3.png',
                        '/me/img/projects/rp-interval/rp-interval_4.png'
                    ],
                    tags: ["Web App", "HTML", "JavaScript", "Less", "ReactJS", "Ant D"],
                    subtitle: "In an Attempt to Get Perfect Pitch",
                    description: "This quiz web app tests musicians on their ability to identify different musical intervals with custom settings and scaling difficulty based on number of intervals identified correctly.",
                    link: "https://jjjpanda.github.io/RP-Interval-Quiz/"
                },
                {
                    title: "Outsmart Options",
                    images: [
                        '/me/img/projects/oo/oo_0.png',
                        '/me/img/projects/oo/oo_1.png',
                        '/me/img/projects/oo/oo_2.png',
                        '/me/img/projects/oo/oo_3.png',
                        '/me/img/projects/oo/oo_4.png',
                        '/me/img/projects/oo/oo_5.png',
                        '/me/img/projects/oo/oo_6.png'
                    ],
                    tags: ["Web App", "HTML", "JavaScript", "NodeJS", "ExpressJS", "CSS", "Less", "ReactJS", "MongoDB", "Ant D"],
                    subtitle: "The Voice of The People",
                    description: "Using market data and a simple layout, this web app allows traders to calculate options strategy profit, save strategies to view later and keep watchlists.",
                    link: "http://outsmart.options.works/"
                },
                {
                    title: "Chimera",
                    images: [
                        '/me/img/projects/chimera/chimera_0.png',
                        '/me/img/projects/chimera/chimera_1.png',
                        '/me/img/projects/chimera/chimera_2.png',
                        '/me/img/projects/chimera/chimera_3.png',
                        '/me/img/projects/chimera/chimera_4.png'
                    ],
                    tags: ["Web App", "HTML", "JavaScript", "NodeJS", "ExpressJS", "CSS", "Less", "ReactJS", "Ant D", "IP Camera", "TMUX"],
                    subtitle: "Motion Security Camera Dashboard",
                    description: "A motion security camera dashboard and server system that works with Motion Project to save images and generate videos from IP cameras.",
                    link: "https://www.github.com/jjjpanda/Chimera"
                }
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