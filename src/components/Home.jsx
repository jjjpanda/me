import React from 'react';
import {
    Link
} from "react-router-dom"
import {
    Divider,
    Affix,
    Row,
    Col,
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

import Image from './Image.jsx'
import note from './note.jsx'

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            trophies:0,
            images: 3,
            clickedImages: 0
        }
    }

    imageClick = () => {
        this.setState((oldState) => (
            {clickedImages: oldState.clickedImages+1}
        ), () => {
            if(this.state.clickedImages === 3){
                this.setState((oldState) => ({trophies: oldState.trophies+1}), () => {
                    note('success', 'The Trifecta', `Here's ${this.state.trophies == 1 ? "a" : "another"} trophy for clicking very fast: \n${"🏆".repeat(this.state.trophies)}.`, 5)
                })
            }
        })
    }

    onEnd = () => {
        this.setState((oldState) => (
            {clickedImages: oldState.clickedImages-1}
        ))
    }

    render(){
        const intro = <div>
            <Typography.Title>
                I'm Jay Pandya
            </Typography.Title>

            {/* <Space style={{width: "100%", justifyContent: "center", fontSize: "20pt"}}>
                <WarningOutlined /> 
                    🛠 This website is under development. 🛠
                <WarningOutlined/>
            </Space> */}

            <Typography>
                AKA J, Jay, Jae, Jæ, J the Panda.
            </Typography>

            <Divider orientation={"left"} plain>
                So...
            </Divider>

            <div style={{backgroundImage: `url("/me/img/background/abstract.png")`, height: "6vh"}} className={"parallax"} />

            <Divider orientation="center" dashed>
                Who am I?
            </Divider>

            {!this.props.mobile ? [<Row align="middle" style={{width: "100%", minWidth: "100%"}}>
                <Col span={16}>
                    <Typography.Paragraph style={{textAlign: "left"}}>
                        I'm a software engineer/financial engineer based in New Jersey. <br/>
                        I focus mostly on web apps and APIs, especially software applications <br/>
                        involving finance: like options profit calculation and algorithmic trading solutions. 
                    </Typography.Paragraph>
                </Col>
                <Col span={8}>
                    <Image 
                        className={"fitSpace"}
                        src = "/me/img/stonks.png" 
                        alt = "Me using Bloomberg Terminal."
                        onClick={this.imageClick}
                        onEnd={this.onEnd}
                    />
                </Col>
            </Row>,
            <br />,
            <Row align="middle" style={{width: "100%", minWidth: "100%"}}>
                <Col span={10}>
                    <Image 
                        className={"fitSpace"}
                        src="/me/img/water.png" 
                        alt="Me standing on a stone pier."
                        onClick={this.imageClick}
                        onEnd={this.onEnd}
                    />
                </Col>
                <Col span={14}>
                    <Typography.Paragraph style={{textAlign: "right"}}>
                        I aim for simplicity and minimalism in my user interfaces. <br />
                        And not just the end user, but the developers too. <br/>
                        Check out some of my projects <Link to={"/?projects"}>here</Link>. <br/>
                        Or check out my <a href="https://www.github.com/jjjpanda" target="_blank">Github</a>.
                    </Typography.Paragraph>
                </Col>   
            </Row>,
            <br />,
            <Row align="middle" style={{width: "100%", minWidth: "100%"}}>
                <Col span={15}>
                    <Typography.Paragraph style={{textAlign: "left"}}>
                        And though I love software, but I make music too. <br/> 
                        But it's just a hobby. (Unless I get inexplicably famous for my admittedly mediocre music.) <br/>
                        Oh, and I'm an avid poker player too. <br/>
                        (Insert joke about gambling and Wall Street.)
                    </Typography.Paragraph>
                </Col>
                <Col span={9}>
                    <Image 
                        className={"fitSpace"} 
                        src="/me/img/cards.png" 
                        alt="Me springing cards everywhere."
                        onClick={this.imageClick}
                        onEnd={this.onEnd}
                    />
                </Col>
            </Row> ] : [<Flex justify={"center"}>
                <Typography.Paragraph style={{textAlign: "left"}}>
                    I'm a software engineer/financial engineer based in New Jersey. <br/>
                    I focus mostly on web apps and APIs, especially software applications <br/>
                    involving finance: like options profit calculation and algorithmic trading solutions. 
                </Typography.Paragraph>
            </Flex>, <Flex justify={"center"}>
                <Image 
                    className={"fitSpace"}
                    src = "/me/img/stonks.png" 
                    alt = "Me using Bloomberg Terminal."
                    onClick={this.imageClick}
                    onEnd={this.onEnd}
                />
            </Flex>, <Flex justify={"center"}>
                <Typography.Paragraph style={{textAlign: "left"}}>
                    I aim for simplicity and minimalism in my user interfaces. <br />
                    And not just the end user, but the developers too. <br/>
                    Check out some of my projects <Link to={"/?projects"}>here</Link>. <br/>
                    Or check out my <a href="https://www.github.com/jjjpanda" target="_blank">Github</a>.
                </Typography.Paragraph>
            </Flex>, <Flex justify={"center"}>
                <Image 
                    className={"fitSpace"}
                    src="/me/img/water.png" 
                    alt="Me standing on a stone pier."
                    onClick={this.imageClick}
                    onEnd={this.onEnd}
                />
            </Flex>,
            <Flex justify={"center"}>
                <Typography.Paragraph style={{textAlign: "left"}}>
                    And though I love software, but I make music too. <br/> 
                    But it's just a hobby. (Unless I get inexplicably famous for my admittedly mediocre music.) <br/>
                    Oh, and I'm an avid poker player too. <br/>
                    (Insert joke about gambling and Wall Street.)
                </Typography.Paragraph>
            </Flex>, 
            <Flex justify={"center"}>
                <Image 
                    className={"fitSpace"} 
                    src="/me/img/cards.png" 
                    alt="Me springing cards everywhere."
                    onClick={this.imageClick}
                    onEnd={this.onEnd}
                />
            </Flex> ] }
            
            <Typography.Paragraph>
                <br/ >
                <br/ >
            </Typography.Paragraph>
        </div>

        if(this.props.mobile){
            return (
                <div>

                    {intro}
                    
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