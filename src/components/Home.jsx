import React from 'react';
import {
    Button,
    Card,
    Layout,
    Affix,
    Space,
    Typography,
    Progress
} from 'antd'
import { 
    Flex, 
    WhiteSpace
} from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);

class Home extends React.Component{
    render(){
        if(this.props.mobile){
            return (
                <div>
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
                </div>
            )
        }
        else {
            return (
                <Space direction="vertical">
    
                    <Typography.Title>Hello world!</Typography.Title>
                    <Typography>Oh, that's tacky.</Typography>
                    
                    <Typography.Paragraph>Hey, I'm just a guy. I code. Not sure how else to describe it.</Typography.Paragraph>
                        
                </Space>
            )
        }
    }
}

export default Home;