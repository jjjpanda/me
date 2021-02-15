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
    Progress,
    Button
} from 'antd'
import { 
    Flex, 
    WhiteSpace
} from 'antd-mobile';
import {
    MessageOutlined
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
                    note('success', 'The Trifecta', `Here's ${this.state.trophies == 1 ? "a" : "another"} trophy for ${this.props.mobile ? "tapping" : "clicking"} very fast: \n${"🏆".repeat(this.state.trophies)}.`, 5)
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

        const descImagePairs = [
            [
                <Typography.Paragraph style={{fontSize: "15px"}}>
                    I'm a software engineer/financial engineer based in New Jersey. <br/>
                    I focus mostly on web apps and APIs, especially software applications <br/>
                    involving finance: like options profit calculation and algorithmic trading solutions. <br/>
                    Click here for <Link to={"/?about"}>some chronological storytelling</Link> and click <Link to={"/?resume"}>here for my resume.</Link>
                </Typography.Paragraph>, 
                <Image 
                    src = "img/stonks.png" 
                    alt = "Me using Bloomberg Terminal."
                    onClick={this.imageClick}
                    onEnd={this.onEnd}
                />
            ],
            [
                <Typography.Paragraph style={{fontSize: "15px"}}>
                    I love modular and minimalist design. <br />
                    And not just for the end user, but for the developers too. <br/>
                    Check out some of <Link to={"/?projects"}>my projects here</Link>. <br/>
                    Or check out my <a href="https://www.github.com/jjjpanda" target="_blank">Github</a>.
                </Typography.Paragraph>,
                <Image 
                    src="img/water.png" 
                    alt="Me standing on a stone pier."
                    onClick={this.imageClick}
                    onEnd={this.onEnd}
                />
            ],
            [
                <Typography.Paragraph style={{fontSize: "15px"}}>
                    And though I love software, I make music too. <br/> 
                    But it's just a hobby. (Unless I get famous for my mediocre music.) <br/>
                    Oh, and I'm an avid poker player too. <br/>
                    (Insert joke about gambling and Wall Street.) <br/>
                </Typography.Paragraph>,
                <Image 
                    src="img/cards.png" 
                    alt="Me springing cards everywhere."
                    onClick={this.imageClick}
                    onEnd={this.onEnd}
                />
            ]
        ]

        const intro = <div>

            <Space direction="horizontal" align="baseline">
                <Typography.Title level={2}>
                    I'm
                </Typography.Title> 
                <Typography.Title>
                    Jay Pandya
                </Typography.Title>
            </Space>

            <Typography>
                AKA J, Jay, Jae, Jæ, J the Panda.
            </Typography>

            <Space style={{float: "right"}}>
                <Link to="/?contact">
                    <Button size="large" icon={<MessageOutlined />}>Contact Me</Button>
                </Link>
            </Space>

            <Divider orientation="center" dashed />

            <div style={{backgroundImage: `url("img/background/abstract.png")`, height: "6vh"}} className={"parallax"} />

            <Divider orientation="center" dashed />

            {!this.props.mobile ? [<Row align="middle" style={{width: "100%", minWidth: "100%"}}>
                <Col span={16} style={{textAlign: "left"}}>
                    {descImagePairs[0][0]}
                </Col>
                <Col span={8} style={{display: "grid", justifyContent: "right"}}>
                    {descImagePairs[0][1]}
                </Col>
            </Row>,
            <br />,
            <Row align="middle" style={{width: "100%", minWidth: "100%"}}>
                <Col span={10} style={{display: "grid", justifyContent: "left"}}>
                    {descImagePairs[1][1]}
                </Col>
                <Col span={14} style={{textAlign: "right"}}>
                    {descImagePairs[1][0]}
                </Col>   
            </Row>,
            <br />,
            <Row align="middle" style={{width: "100%", minWidth: "100%"}}>
                <Col span={15} style={{textAlign: "left"}}>
                    {descImagePairs[2][0]}
                </Col>
                <Col span={9} style={{display: "grid", justifyContent: "right"}}>
                    {descImagePairs[2][1]}
                </Col>
            </Row> ] : [<Flex justify={"center"} style={{textAlign: "left"}}>
                {descImagePairs[0][0]}
            </Flex>, <Flex justify={"center"} style={{width: "100%", minWidth: "100%"}}>
                {descImagePairs[0][1]}
            </Flex>, <Flex justify={"center"} style={{textAlign: "left"}}>
                {descImagePairs[1][0]}
            </Flex>, <Flex justify={"center"} style={{width: "100%", minWidth: "100%"}}>
                {descImagePairs[1][1]}
            </Flex>, <Flex justify={"center"} style={{textAlign: "left"}}>
                {descImagePairs[2][0]}
            </Flex>, <Flex justify={"center"} style={{width: "100%", minWidth: "100%"}}>
                {descImagePairs[2][1]}
            </Flex> ] }
            
            <Row align="middle" justify="center" style={{width: "100%",  minWidth: "100%"}}>
                <Link to="/?contact" >
                    <Button size="small" icon={<MessageOutlined />}>Let's Talk</Button>
                </Link>
                <Typography.Paragraph>
                    <br/ >
                    <br/ >
                </Typography.Paragraph>
            </Row>
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