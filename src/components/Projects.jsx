import React, { useState } from 'react';
import {
    Row,
    Col,
    Space,
    Typography,
} from 'antd'

import Project from "./Project.jsx"

const Projects = (props) => {
    const [state, setState] = useState({
        projects: [
            {
                title: "CXIA",
                images: [
                    'img/projects/cxia/cxia_0.png',
                    'img/projects/cxia/cxia_1.png',
                    'img/projects/cxia/cxia_2.png',
                    'img/projects/cxia/cxia_3.png',
                    'img/projects/cxia/cxia_4.png'
                ],
                logo: "img/projects/cxia/cxia.png",
                tags: ["Web App", "HTML", "JavaScript", "CSS", "Google Charts", "JSON", "Excel"],
                subtitle: "Cryptocurrency Exchange Indicator Analysis",
                description: "Using Google Charts and a free JSON REST API for cryptocurrency price data, CXIA charts out different technical indicators of a selected currency.",
                link: "https://www.github.com/jjjpanda/CXIA"
            },
            {
                title: "HTML Visualizer",
                images: [
                    'img/projects/vis/vis_0.png',
                    'img/projects/vis/vis_1.png',
                    'img/projects/vis/vis_2.png'
                ],
                logo: "img/projects/vis/vis.png",
                tags: ["Web App", "HTML", "JavaScript"],
                subtitle: "A Simple Audio Visualizer",
                description: "Pulling from the system microphone, this visualizer logarithmically displays freqencies ranges from 20 HZ to 20 kHz with a Fast Fourier Transform to find amplitudes.",
                link: "https://jjjpanda.github.io/HTML-Visualizer"
            },
            {
                title: "Options Calculator",
                images: [
                    'img/projects/options-calc/options-calc_0.png',
                    'img/projects/options-calc/options-calc_1.png',
                    'img/projects/options-calc/options-calc_2.png'
                ],
                logo: "img/projects/options-calc/options-calc.png",
                tags: ["PC App", "C#", "WPF"],
                subtitle: "A Manual Options Profit Calculator",
                description: "This Windows Form Application is a manual entry options calculator that uses Black Scholes and Newton Raphson to display profit.",
                link: "https://www.github.com/jjjpanda/Options-Calculator"
            },
            {
                title: "RP Interval Quiz",
                images: [
                    'img/projects/rp-interval/rp-interval_0.png',
                    'img/projects/rp-interval/rp-interval_1.png',
                    'img/projects/rp-interval/rp-interval_2.png',
                    'img/projects/rp-interval/rp-interval_3.png',
                    'img/projects/rp-interval/rp-interval_4.png'
                ],
                logo: "img/projects/rp-interval/rp-interval.png",
                tags: ["Web App", "HTML", "JavaScript", "Less", "ReactJS", "Ant D"],
                subtitle: "In an Attempt to Get Perfect Pitch",
                description: "This quiz web app tests musicians on their ability to identify different musical intervals with custom settings and scaling difficulty based on number of intervals identified correctly.",
                link: "https://jjjpanda.github.io/RP-Interval-Quiz/"
            },
            {
                title: "Outsmart Options",
                images: [
                    'img/projects/oo/oo_0.png',
                    'img/projects/oo/oo_1.png',
                    'img/projects/oo/oo_2.png',
                    'img/projects/oo/oo_3.png',
                    'img/projects/oo/oo_4.png',
                    'img/projects/oo/oo_5.png',
                    'img/projects/oo/oo_6.png'
                ],
                logo: "img/projects/oo/oo.png",
                tags: ["Web App", "HTML", "JavaScript", "Node.js", "ExpressJS", "CSS", "Less", "ReactJS", "MongoDB", "Ant D"],
                subtitle: "The Voice of The People",
                description: "Using market data and a simple layout, this web app allows traders to calculate options strategy profit, save strategies to view later and keep watchlists.",
                link: "https://outsmart.herokuapp.com/"
            },
            {
                title: "Chimera",
                images: [
                    'img/projects/chimera/chimera_0.png',
                    'img/projects/chimera/chimera_1.png',
                    'img/projects/chimera/chimera_2.png',
                    'img/projects/chimera/chimera_3.png',
                    'img/projects/chimera/chimera_4.png'
                ],
                logo: "img/projects/chimera/chimera.png",
                tags: ["Mobile Web App", "HTML", "JavaScript", "Node.js", "ExpressJS", "CSS", "Less", "ReactJS", "Ant D", "IP Camera", "TMUX"],
                subtitle: "Motion Security Camera Dashboard",
                description: "A motion security camera dashboard and server system that works with Motion Project to save images and generate videos from IP cameras.",
                link: "https://www.github.com/jjjpanda/Chimera"
            }
        ]
    })

    const renderProjects = () => {
        let projects = []
        let i = state.projects.length
        while(i >= 1){
            if(props.mobile || i == 1){
                projects.push(<Row gutter={[8, 8]} style={{
                    minWidth: "100%",
                    width: "100%"  
                }}>
                    <Col span={24}>
                        <Project 
                            mobile={props.mobile}
                            {...state.projects[i-1]}
                        />
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
                            <Project 
                                mobile={props.mobile}
                                {...state.projects[i-1]}
                            />
                        </Col>
                        <Col span={12}>
                            <Project 
                                mobile={props.mobile}
                                {...state.projects[i-2]}
                            />
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
                            <Project 
                                mobile={props.mobile}
                                {...state.projects[i-1]}
                            />
                        </Col>
                        <Col span={8}>
                            <Project 
                                mobile={props.mobile}
                                {...state.projects[i-2]}
                            />
                        </Col>
                        <Col span={8}>
                            <Project 
                                mobile={props.mobile}
                                {...state.projects[i-3]}
                            />
                        </Col>
                    </Row>)
                    i-=3
                }
            }
        }
        
        return projects
    }

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
                {renderProjects()}
            </Space>
        
        </Space>
    )
}

export default Projects;