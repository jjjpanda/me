import React from 'react';
import { 
    Flex, 
    WhiteSpace,
    NavBar
} from 'antd-mobile';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Prompt
} from 'react-router-dom';
import {
    GithubOutlined,
    MailOutlined,
    LinkedinOutlined,
    InstagramOutlined,
    PlayCircleOutlined
} from '@ant-design/icons'

import TopIcon from './TopIcon.jsx'

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);

class MobileMain extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Router basename={'/me'} className="flex-container">
                <NavBar 
                    mode={"dark"}
                    leftContent={<div style={{height: "inherit"}}> <TopIcon /> </div>}
                />
                <div className="sub-title">Basic</div>
                <Flex>
                    <Flex.Item><PlaceHolder /></Flex.Item>
                    <Flex.Item><PlaceHolder /></Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
                <Flex>
                    <Flex.Item><PlaceHolder /></Flex.Item>
                    <Flex.Item><PlaceHolder /></Flex.Item>
                    <Flex.Item><PlaceHolder /></Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
                <Flex>
                    <Flex.Item><PlaceHolder /></Flex.Item>
                    <Flex.Item><PlaceHolder /></Flex.Item>
                    <Flex.Item><PlaceHolder /></Flex.Item>
                    <Flex.Item><PlaceHolder /></Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />

                <div className="sub-title">Wrap</div>
                <Flex wrap="wrap">
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                </Flex>
                <WhiteSpace size="lg" />

                <div className="sub-title">Align</div>
                <Flex justify="center">
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                </Flex>
                <WhiteSpace />
                <Flex justify="end">
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                </Flex>
                <WhiteSpace />
                <Flex justify="between">
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                </Flex>

                <WhiteSpace />
                <Flex align="start">
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline small" />
                    <PlaceHolder className="inline" />
                </Flex>
                <WhiteSpace />
                <Flex align="end">
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline small" />
                    <PlaceHolder className="inline" />
                </Flex>
                <WhiteSpace />
                <Flex align="baseline">
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline small" />
                    <PlaceHolder className="inline" />
                </Flex>
            </Router>
        )
    }
}

export default MobileMain;