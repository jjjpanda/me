import React from 'react';
import {
    Timeline,
    Space,
    Typography
} from 'antd'
import {
    ClockCircleOutlined,
    EnvironmentOutlined,
    MinusCircleFilled
} from '@ant-design/icons'

const About = (props) => {
    return (
        <Space direction="vertical" style={{width: '100%'}}>

            <Typography.Title>About Me</Typography.Title>
            <Typography>The History of Me</Typography>

            <Timeline mode={'alternate'} style={{alignContent: 'center', width: '100%'}}>
                <Timeline.Item  dot={<MinusCircleFilled />}>
                    Touched a computer <br />
                    <ClockCircleOutlined /> 2003
                </Timeline.Item>
                <Timeline.Item  dot={<MinusCircleFilled />}>
                    Started coding HTML <br />
                    <ClockCircleOutlined /> July 2011
                </Timeline.Item>
                <Timeline.Item  dot={<MinusCircleFilled />}>
                    Learned Java in AP Computer Science. <Typography.Text type="secondary">Got a 5</Typography.Text> <br />
                    <ClockCircleOutlined /> May 2015
                </Timeline.Item>
                <Timeline.Item color="red" dot={<MinusCircleFilled />}>
                    Started Undergraduate Degree <br />
                    <EnvironmentOutlined /> Stevens Institute of Technology <br />
                    <ClockCircleOutlined /> August 2016
                </Timeline.Item>
                <Timeline.Item color="green" dot={<MinusCircleFilled />}>
                    Software Engineering Internship <br />
                    <EnvironmentOutlined /> Nokia Bell Labs Murray Hill <br />
                    <ClockCircleOutlined /> June 2017 - August 2017
                </Timeline.Item>
                <Timeline.Item  dot={<MinusCircleFilled />}>
                    Started investing <br />
                    <ClockCircleOutlined /> November 2017
                </Timeline.Item>
                <Timeline.Item  dot={<MinusCircleFilled />}>
                    Started trading options <br />
                    <ClockCircleOutlined /> April 2018
                </Timeline.Item>
                <Timeline.Item dot={<MinusCircleFilled />}>
                    Conception of <a href={"http://outsmart.options.works/"} target={"blank_"}>Outsmart Options</a> <br />
                    <ClockCircleOutlined /> September 2018
                </Timeline.Item>
                <Timeline.Item color="red" dot={<MinusCircleFilled />}>
                    Got Bachelors of Engineering in Software Engineering <br />
                    <EnvironmentOutlined /> Stevens Institute of Technology <br />
                    <ClockCircleOutlined /> May 2020
                </Timeline.Item>
                <Timeline.Item color="grey" dot={<MinusCircleFilled />}>
                    Started Masters in Financial Engineering <br />
                    <EnvironmentOutlined /> Stevens Institute of Technology <br />
                    <ClockCircleOutlined /> August 2020
                </Timeline.Item>
                <Timeline.Item color="green" dot={<MinusCircleFilled />}>
                    National Security Innovation Network <br />
                    <EnvironmentOutlined /> Remote <br />
                    <ClockCircleOutlined /> Oct 2020 - Feb 2021
                </Timeline.Item>
                <Timeline.Item color="grey" dot={<MinusCircleFilled />}>
                    Got a Master of Science in Financial Engineering <br />
                    <EnvironmentOutlined /> Stevens Institute of Technology <br />
                    <ClockCircleOutlined /> May 2021
                </Timeline.Item>
                <Timeline.Item color="green" dot={<MinusCircleFilled />}>
                    JPMorgan Chase & Co <br />
                    <EnvironmentOutlined /> NY Metro <br />
                    <ClockCircleOutlined /> Aug 2021 - Present
                </Timeline.Item>
            </Timeline>

        </Space>
    )
}

export default About;