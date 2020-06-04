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

class About extends React.Component{
    render(){
        return (
            <Space direction="vertical" style={{width: '100%'}}>

                <Typography.Title>About me</Typography.Title>
                <Typography>I'm Jay</Typography>

                <Timeline mode={'alternate'} style={{alignContent: 'center', width: '100%'}}>
                    <Timeline.Item color="green">Touched a computer. 2003-01-01</Timeline.Item>
                    <Timeline.Item color="green">Started coding HTML 2011-07-01</Timeline.Item>
                    <Timeline.Item color="green">Took AP Computer Science 2015-09-01</Timeline.Item>
                    <Timeline.Item color="red">
                        <p>Stevens</p>
                        <p>Started Bachelors 2016-09-01</p>
                        <p>Masters 2020-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>Nokia</p>
                        <p>Internship</p>
                        <p>bruh 2016-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item color="red">
                        <p>Stevens</p>
                        <p>Started Masters 2020-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item color="gray">
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item color="gray">
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                </Timeline>

            </Space>
        )
    }
}

export default About;