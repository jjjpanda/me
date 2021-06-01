import React from 'react';
import {
    Button,
    Icon,
    Result,
    Affix,
    Space,
    List,
    Typography,
    Form, 
    Input,
    Row, 
    Col,
    Avatar,
} from 'antd'
import {
    Link
} from "react-router-dom"
import {
    LoadingOutlined, 
    BackwardOutlined, 
    ReloadOutlined,
    CopyOutlined,
    SendOutlined,
    CloseCircleFilled,
    CheckCircleFilled
} from '@ant-design/icons'

import note from './note.jsx'
import {CopyToClipboard} from "react-copy-to-clipboard"
import Cookie from 'js-cookie'
import Image from './Image.jsx'

import { icons } from '../css/theme.js';
const icon = icons[Math.floor(Math.random() * icons.length)];

const emailList = [
    {
        email: "jtpandya3@gmail.com",
        description: "Email address open for inquiries or questions.",
        avatar: "img/icons/blueIcon.png"
    },
    {
        email: "jpandya@alumni.stevens.edu",
        description: "My Stevens Institute of Technology email address.",
        avatar: "img/icons/redIcon.png"
    }
]

class Contact extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            submitted: Cookie.get('submitted') || 'not',
            messageLength: 0,
            maxMessageLength: 1000,
            hue: 0
        }
    }

    componentDidMount(){
        this.setState((oldState) => ({hue: (oldState.hue + 1) % 360}))
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.setState((oldState) => ({hue: (oldState.hue + 1) % 360}))
        }, 100)
    }

    validateMessages = () => ({
        required: '${label} is required!',
        string: {
            max: `Limit exceeded (${this.state.maxMessageLength - this.state.messageLength - 1})`,
        },        
        types: {
          email: 'Not a valid email!',
          
        },
    });

    onFinish = (values) => {
        if( emailList.findIndex((entry) => entry.email === values.contact.email) !== -1 ) {
            note('warning', 'Sending an Anonymous Message', "Identity theft is not a joke, Jim! 🙄", 5)
        }

        const afterSubmit = (code) => {
            this.setState(() => {
                return {submitted: code}
            }, () => {
                Cookie.set("submitted", code)
            });
        }

        this.setState(() => ({submitted: "loading"}), () => {
            fetch("https://jaeme.herokuapp.com/contact", {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                mode: "cors",
                body: JSON.stringify({
                    name: values.contact.name,
                    email: values.contact.email,
                    message: values.contact.message
                })
            }).then(res => {
                console.log('response', res)
                if(!res || res.status != 200){
                    afterSubmit("error")
                }
                else{
                    afterSubmit("submitted")
                }
                
            }, (err)=> {
                console.log('err', err)
                afterSubmit("error")
            })
        })
        

        /* console.log(values);
        fetch(`https://docs.google.com/forms/d/e/1FAIpQLSeyAfs9WwZTtMezTQOArdfDaQCaX2B_hOtwYRGBpKgBBlLLjw/formResponse?usp=pp_url&entry.141286092=${values.contact.name}&entry.392819173=${values.contact.email}&entry.1658784313=${values.contact.message}&submit=Submit`,
        {
            method: 'GET',
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": window.location.href
            }
        }).then(res => console.log('bruh', res), (err)=> console.log('bruh', err)) */
        //window.open(`https://docs.google.com/forms/d/e/1FAIpQLSeyAfs9WwZTtMezTQOArdfDaQCaX2B_hOtwYRGBpKgBBlLLjw/formResponse?usp=pp_url&entry.141286092=${values.contact.name}&entry.392819173=${values.contact.email}&entry.1658784313=${values.contact.message}&submit=Submit`, "response")
    }

    //deprecated
    /* checkLoad = () => {
        var iframe = document.getElementById('response');
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
        if (  iframeDoc.readyState  == 'complete' )  {
            //alert('loading')
            this.setState(() => ({submitted: "loading"}), () => {
                //alert('submitted')
                setTimeout(() => {
                    this.setState(() => {
                        return {submitted: 'submitted'}
                    }, () => {
                        Cookie.set("submitted", "submitted")
                        window.open('about:blank', 'response')
                    });
                }, 2500)
            })      
        } 
        else{
            window.setTimeout(this.checkLoad, 100);
        }
        
    } */

    render(){

        const hueShiftingImage = <Space style = {{width: "100%", minWidth: "100%", filter: `hue-rotate(${this.state.hue}deg)`}}>
            <Image 
                src={`img/icons/${icon}Icon.png`}
                alt="Icon"
                onClick={this.imageClick}
                onEnd={this.onEnd}
            />
        </Space>

        const contactMe = <Space direction="vertical" style={{textAlign: "left"}}>

            <Typography.Title style={{whiteSpace: "nowrap"}}>  
                <Row align="middle" justify="center">
                    <Col span={20}> 
                        <Typography.Title>
                            Contact Me
                        </Typography.Title>
                    </Col>
                    <Col span={4}>
                        {hueShiftingImage} 
                    </Col> 
                </Row>
            </Typography.Title>
            
            <Form labelCol= {{ span: 6 }} wrapperCol= {{ span: 18 }} name="nest-messages" onFinish={this.onFinish} validateMessages={this.validateMessages()}>
                <Form.Item name={['contact', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['contact', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['contact', 'message']} label="Message" rules={[{type: "string", max: this.state.maxMessageLength}]}>
                    <Input.TextArea onChange={(e) => this.setState(() => ({messageLength: e.target.value.length}) )} />
                </Form.Item>
                <Typography.Text style={{whiteSpace: "nowrap"}}>  
                    <Space>
                        {this.state.submitted == "loading" ? "Sending..." : (
                            this.state.submitted == "submitted" ? "Message sent!" : (
                                this.state.submitted == "error" ? "Message did not send..." : null
                            )
                        )} 
                        {this.state.submitted == "loading" ? <LoadingOutlined /> : (
                            this.state.submitted == "submitted" ? <CheckCircleFilled /> : (
                                this.state.submitted == "error" ? <CloseCircleFilled /> : null
                            )
                        )} 
                    </Space>
                </Typography.Text>
                <Form.Item style={{float: "right"}}>
                    <Button disabled = {this.state.submitted == "loading"} type="primary" icon={<SendOutlined />} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </Space>;

        const emails = <Space direction="vertical" style={{textAlign: "left"}}>
            <Typography.Title>Or Email Me</Typography.Title>
            <List
                itemLayout="horizontal"
                dataSource={emailList}
                renderItem= {item => (
                    <List.Item
                        actions={[<CopyToClipboard text={item.email} style={{fontSize: "2vh"}}
                                onCopy={() => {
                                    note('info', "Copied Email", `Copied ${item.email} to clipboard`, 3)
                                }}>
                                    <CopyOutlined style={{color: "#991087"}}/>
                            </CopyToClipboard>,
                            <a target="_blank" href={`mailto:${item.email}`} style={{fontSize: "2vh"}} >
                                <SendOutlined />
                            </a>
                        ]}
                    >   
                        <List.Item.Meta
                            avatar={
                                <Avatar shape="circle" src={item.avatar} />
                            }
                            title={<a href={`mailto:${item.email}`} target={"_blank"}>{item.email}</a>}
                            description={<Typography>{item.description}</Typography>}
                        />
                        
                    </List.Item>
                )}
            />
        </Space>;

        if(this.props.mobile){
            return (
                <Space direction="vertical" style={{width: "100%", minWidth: "100%", textAlign: "center"}}>
                    {contactMe}
                    {emails}
                </Space>
            )
        }
        else {
            return (
                <Row align="top" justify="center" style={{width: "100%", minWidth: "100%"}}>
                    <Col span={8} style={{textAlign: "left"}}>
                        {contactMe}
                    </Col>
                    <Col span={16} style={{textAlign: "right"}}>
                        {emails}
                    </Col>
                </Row>
            )
        }
    }
}

export default Contact;