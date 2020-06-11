import React from 'react';
import {
    Timeline,
    Icon,
    Layout,
    Affix,
    Space,
    Drawer,
    Typography
} from 'antd'
import {
    ClockCircleOutlined,
    EnvironmentOutlined
} from '@ant-design/icons'

class About extends React.Component{
    render(){
        return (
            <Space direction="vertical" style={{width: '100%'}}>

                <Typography.Title>About Me</Typography.Title>
                <Typography>The History of Me</Typography>

                <Timeline mode={'alternate'} style={{alignContent: 'center', width: '100%'}}>
                    <Timeline.Item color="#0000ff">
                        Touched a computer <br />
                        <ClockCircleOutlined /> 2003
                    </Timeline.Item>
                    <Timeline.Item color="#0000ff">
                        Started coding HTML <br />
                        <ClockCircleOutlined /> July 2011
                    </Timeline.Item>
                    <Timeline.Item color="#0000ff">
                        Got a 5 in AP Computer Science <br />
                        <ClockCircleOutlined /> May 2015
                    </Timeline.Item>
                    <Timeline.Item color="#dd3300">
                        Started Undergraduate Degree <br />
                        <EnvironmentOutlined /> Stevens Institute of Technology <br />
                        <ClockCircleOutlined /> August 2016
                    </Timeline.Item>
                    <Timeline.Item color="#00dd00">
                        Software Engineering Internship <br />
                        <EnvironmentOutlined /> Nokia Bell Labs Murray Hill <br />
                        <ClockCircleOutlined /> June 2017 - August 2017
                    </Timeline.Item>
                    <Timeline.Item color="#0000ff">
                        Started Investing <br />
                        <ClockCircleOutlined /> November 2017
                    </Timeline.Item>
                    <Timeline.Item color="#0000ff">
                        Started Trading Options <br />
                        <ClockCircleOutlined /> April 2018
                    </Timeline.Item>
                    <Timeline.Item>
                        Conception of <a href={"http://outsmart.options.works/"} target={"blank_"}>Outsmart Options</a> <br />
                        <ClockCircleOutlined /> September 2018
                    </Timeline.Item>
                    <Timeline.Item color="#dd3300">
                        Got Bachelors of Engineering in Software Engineering <br />
                        <EnvironmentOutlined /> Stevens Institute of Technology <br />
                        <ClockCircleOutlined /> May 2020
                    </Timeline.Item>
                    <Timeline.Item color="#444444">
                        Starting Masters in Financial Engineering <br />
                        <EnvironmentOutlined /> Stevens Institute of Technology <br />
                        <ClockCircleOutlined /> August 2020
                    </Timeline.Item>
                </Timeline>

            </Space>
        )
    }
}

export default About;