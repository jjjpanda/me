import React, {useEffect, useState} from 'react';
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

const Home = (props) => {
    const [state, setState] = useState({
        trophies:0,
        images: 3,
        clickedImages: 0
    })

    useEffect(() => {
        if(state.clickedImages === state.images){
            setState((oldState) => ({...oldState, trophies: oldState.trophies+1}))
        }
    }, [state.clickedImages])

    useEffect(() => {
        if(state.trophies > 0){
            note('success', 'The Trifecta', `Here's ${state.trophies == 1 ? "a" : "another"} trophy for ${props.mobile ? "tapping" : "clicking"} very fast: \n${"🏆".repeat(state.trophies)}.`, 5)
        }
    }, [state.trophies])

    const imageClick = () => {
        setState((oldState) => (
            {...oldState, clickedImages: oldState.clickedImages+1}
        ))
    }

    const onEnd = () => {
        setState((oldState) => (
            {...oldState, clickedImages: oldState.clickedImages-1}
        ))
    }

    const blurbs = [
        <Typography.Paragraph style={{fontSize: "15px"}}>
            I'm a software engineer/financial engineer based in New Jersey. <br/>
            I focus mostly on web apps and APIs, especially software applications <br/>
            involving finance: like options profit calculation and algorithmic trading solutions. <br/>
            Click here for <Link to={"/?about"}>some chronological storytelling</Link> and click <Link to={"/?resume"}>here for my resume.</Link>
        </Typography.Paragraph>, 
        <Typography.Paragraph style={{fontSize: "15px"}}>
            I love modular and minimalist design. <br />
            And not just for the end user, but for the developers too. <br/>
            Check out some of <Link to={"/?projects"}>my projects here</Link>. <br/>
            Or check out my <a href="https://www.github.com/jjjpanda" target="_blank">Github</a>.
        </Typography.Paragraph>,
        <Typography.Paragraph style={{fontSize: "15px"}}>
            And though I love software, I make music too. <br/> 
            But it's just a hobby. (Unless I get famous for my mediocre <a href="https://www.soundcloud.com/whoamistupid" target="_blank">music</a>) <br/>
            Oh, and I'm an avid poker player too. <br/>
            (Insert joke about gambling and Wall Street.) <br/>
        </Typography.Paragraph>
    ]

    const images = [
        <Image 
            src="img/card.png" 
            alt="Me springing cards everywhere."
            onClick={imageClick}
            onEnd={onEnd}
        />,
        <Image 
            src = "img/stonks.png" 
            alt = "Me using Bloomberg Terminal."
            onClick={imageClick}
            onEnd={onEnd}
        />,
        <Image 
            src="img/water.png" 
            alt="Me standing on a stone pier."
            onClick={imageClick}
            onEnd={onEnd}
        />
    ]

    const contactButton = (text) => <Link to="/?contact" >
        <Button size="large" icon={<MessageOutlined />}>{text}</Button>
    </Link>

    const endingContact = <Row align="middle" justify="center" style={{width: "100%",  minWidth: "100%"}}>
        {contactButton("Let's Talk")}
        <Typography.Paragraph>
            <br/ >
            <br/ >
        </Typography.Paragraph>
    </Row>

    const parallaxDivider = [
        <Divider orientation="center" dashed />,
        <div style={{backgroundImage: `url("img/background/abstract.png")`, height: "6vh"}} className={"parallax"} />,
        <Divider orientation="center" dashed />
    ]

    const prefix = <Typography.Text strong >
        I am...
    </Typography.Text>  

    const name = <Typography.Title>
        Jay Pandya
    </Typography.Title>

    const suffix = <Typography.Text type="secondary">
        AKA J, Jay, Jae, Jæ, J the Panda.
    </Typography.Text>

    const desktopIntro = [<Row align="middle" style={{width: "100%", minWidth: "100%"}}>
            <Col span={6} style={{display: "grid", justifyContent: "left"}}>
                
            </Col>
            <Col span={12} style={{display: "grid", textAlign: "left"}}>
                {prefix}  
            </Col>
            <Col span={6} style={{display: "grid", justifyContent: "right"}}>
                
            </Col>
        </Row>,
        <br />,
        <Row align="middle" style={{width: "100%", minWidth: "100%"}}>
            <Col span={5} style={{display: "grid", justifyContent: "left"}}>
                {images[0]}
            </Col>
            <Col span={14} style={{display: "grid", textAlign: "center"}}>
                {name}
                {suffix}
                <br />
                {blurbs[0]}
            </Col>
            <Col span={5} style={{display: "grid", justifyContent: "right"}}>
                {images[1]}
            </Col>
        </Row>,
        parallaxDivider,
        <Row align="middle" style={{width: "100%", minWidth: "100%"}}>
            <Col span={8} style={{display: "grid", textAlign: "center"}}>
                {blurbs[1]}
            </Col>
            <Col span={8} style={{display: "grid", justifyContent: "center"}}>
                {images[2]}
            </Col>  
            <Col span={8} style={{display: "grid", textAlign: "center"}}>
                {blurbs[2]}
            </Col> 
        </Row>
    ]

    const mobileIntro = [
        <div>
            {prefix}
        </div>, <div>
            {name}
        </div>, <div>
            {suffix}
        </div>, parallaxDivider, <div justify={"center"} style={{textAlign: "center"}}>
            {blurbs[0]}
        </div>, <br />, <div justify={"center"} style={{width: "100%", minWidth: "100%"}}>
            {images[1]}
        </div>, <br />, <div justify={"center"} style={{textAlign: "center"}}>
            {blurbs[1]}
        </div>, <br />, <div justify={"center"} style={{width: "100%", minWidth: "100%"}}>
            {images[0]}
        </div>, parallaxDivider, <div justify={"center"} style={{textAlign: "center"}}>
            {blurbs[2]}
        </div>, <br />, <div justify={"center"} style={{width: "100%", minWidth: "100%"}}>
            {images[2]}
        </div>, <br />, endingContact 
    ]

    const intro = <div>     

        {!props.mobile ? desktopIntro : mobileIntro }
        
    </div>

    if(props.mobile){
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

export default Home;