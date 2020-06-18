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
import {
    WarningOutlined
} from "@ant-design/icons"

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);

class Home extends React.Component{
    
    render(){
        const intro = <div>
            <Typography.Title>
                Hey, I'm Jay.
            </Typography.Title>

            <Space style={{width: "100%", justifyContent: "center", fontSize: "20pt"}}>
                <WarningOutlined /> 
                    🛠 This website is under development. 🛠
                <WarningOutlined/>
            </Space>

            <Typography>
                Oh, that's tacky. I don't know what else to say.
                
            </Typography>

            <Divider orientation={"left"} plain>
                So...
            </Divider>

            <Typography.Paragraph>
                Hey, I'm just a guy who codes. Not sure how else to describe it. Oh, and I make music too on the side. And I love trading options too. Well, it's a love-hate relationship. Same thing with poker. Variance is really something.
            </Typography.Paragraph>

            <div style={{backgroundImage: `url("/me/img/background/abstract.png")`, height: "6vh"}} className={"parallax"} />

            <Divider orientation="center" dashed>
                Who am I?
            </Divider>

            <span style={{width: "100%"}}>

                <Typography.Paragraph>
                    I'm a software engineer based in New Jersey. I focus mostly on web apps and APIs. 
                </Typography.Paragraph>

                {/* <img src="/me/img/cards.png" alt="Me springing cards everywhere." style={{position: 'relative', width: "30vh", float: "right"}}/>
                
                <img src="/me/img/water.png" alt="Me standing on a stone pier." style={{position: 'relative', width: "30vh", float: "right"}}/>
                
                <div style={{position: 'relative', width: "30vh", float: "right"}}>
                    <img className= {"icon"} src="/me/img/stonks.png" alt="Me using Bloomberg Terminal." style={{position: 'absolute'}}/>
                    <img className= {"icon glitch1"} src="/me/img/stonks.png" alt="Me using Bloomberg Terminal." style={{position: 'absolute', left: "2px", filter: "hue-rotate(45deg)"}}/>
                    <img className= {"icon glitch2"} src="/me/img/stonks.png" alt="Me using Bloomberg Terminal." style={{position: 'absolute', left: "-1px", filter: "hue-rotate(180deg)"}}/>
                </div> */}
            
            </span>
            
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