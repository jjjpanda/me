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
                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="red">
                        <p>Solve initial network problems 1</p>
                        <p>Solve initial network problems 2</p>
                        <p>Solve initial network problems 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
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