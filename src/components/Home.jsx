import React from 'react';
import {
    Divider,
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
        const intro = <div>
            <Typography.Title>
                Hey, I'm Jay.
            </Typography.Title>
            <Typography>
                Oh, that's tacky. I don't know what else to say.
            </Typography>

            <Divider orientation={"left"} plain>
                So...
            </Divider>

            <Typography.Paragraph>
                Hey, I'm just a guy who codes. Not sure how else to describe it. Oh, and I make music too on the side. And I love trading options too. Well, it's a love-hate relationship. Same thing with poker. Variance is really something.
            </Typography.Paragraph>

            <div style={{backgroundImage: `url("/me/img/background/abstract.png")`, height: "10vh"}} className={"parallax"} />

            <Divider orientation="center" dashed>
                ...
            </Divider>

            <Typography.Paragraph>
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
                <br/ >
            </Typography.Paragraph>
        </div>

        if(this.props.mobile){
            return (
                <div>
                    {/* <div className="sub-title">Basic</div>
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
 */}

                    {intro}

                    {/* <div className="sub-title">Wrap</div>
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
                    </Flex> */}

                    
                </div>
            )
        }
        else {
            return (
                <Space direction="vertical" style ={{width: "100%", minWidth: "100%"}}>
    
                    {intro}

                </Space>
            )
        }
    }
}

export default Home;