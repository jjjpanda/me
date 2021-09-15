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
    Divider,
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

import ReCAPTCHA from "react-google-recaptcha";

import note from './note.jsx'
import {CopyToClipboard} from "react-copy-to-clipboard"
import Cookie from 'js-cookie'
import Image from './Image.jsx'

import dateFormat from 'dateformat';

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

const recaptchaRef = React.createRef();
 
const onSubmitWithReCAPTCHA = async (submitFormCallback, errorCallback) => {
    const token = await recaptchaRef.current.executeAsync();
    if(token){
        submitFormCallback(token)
    }
    else{
        errorCallback()
    }
}

const generateTimestamp = () => {
    return dateFormat( new Date(), "mmmm dS, yyyy h:MM TT" )
}
class Contact extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            submitted: Cookie.get('submitted') || '',
            timestamp: Cookie.get('lastMessageTime') || '',
            messageLength: 0,
            maxMessageLength: 1000,
            hue: 0,
            randomNumber: Math.random()
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

        const afterSubmit = (code, timestamp) => {
            this.setState(() => {
                return {submitted: code, timestamp: timestamp}
            }, () => {
                Cookie.set("submitted", code)
                Cookie.set("lastMessageTime", timestamp)
            });
        }

        const sendRequest = (token) => {
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
                    message: values.contact.message,
                    token: token
                })
            }).then(res => {
                console.log('response', res)
                if(!res || res.status != 200){
                    afterSubmit("error", generateTimestamp())
                }
                else{
                    afterSubmit("submitted", generateTimestamp())
                }
                
            }, (err)=> {
                console.log('err', err)
                afterSubmit("error", generateTimestamp())
            })
        }

        this.setState(() => ({submitted: "loading"}), () => {
            onSubmitWithReCAPTCHA(sendRequest, () => {
                console.log('error in getting recaptcha token')
                afterSubmit("error", generateTimestamp())
            })
        })
    
    }

    render(){

        const icons = this.props.icons
        const icon = icons[Math.floor(this.state.randomNumber * icons.length)];
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
                    <Col span={21}> 
                        <Typography.Title>
                            Contact Me
                        </Typography.Title>
                    </Col>
                    <Col span={3}>
                        {hueShiftingImage} 
                    </Col> 
                </Row>
            </Typography.Title>
            
            <Form layout="vertical" name="nest-messages" onFinish={this.onFinish} validateMessages={this.validateMessages()}>
                <Form.Item name={['contact', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['contact', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['contact', 'message']} label="Message" rules={[{type: "string", max: this.state.maxMessageLength}]}>
                    <Input.TextArea onChange={(e) => this.setState(() => ({messageLength: e.target.value.length}) )} />
                </Form.Item>
                <Typography.Text >  
                    <Row align="middle">
                        <Col span={22}>
                            <Space direction="vertical">
                                {this.state.submitted == "loading" ? "Sending..." : (
                                    this.state.submitted == "submitted" ? [`Message sent!`, `Sent at: ${this.state.timestamp}`] : (
                                        this.state.submitted == "error" ? [`Message did not send...`, `Last attempt: ${this.state.timestamp}`] : ``
                                    )
                                )} 
                            </Space>
                        </Col>
                        <Col span={2} style={{textAlign: "right"}}>
                            {this.state.submitted == "loading" ? <LoadingOutlined /> : (
                                this.state.submitted == "submitted" ? <CheckCircleFilled /> : (
                                    this.state.submitted == "error" ? <CloseCircleFilled /> : null
                                )
                            )} 
                        </Col>
                    </Row>
                </Typography.Text>
                <Divider />
                <Form.Item style={{float: "right"}}>
                    <Button 
                        disabled = {this.state.submitted == "loading"} 
                        type="primary" 
                        icon={<SendOutlined />} 
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            
        </Space>;

        const emails = <Space direction="vertical" style={{textAlign: "left", width: "80%"}}>
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
                <Space direction="vertical" align="center" style={{width: "100%", minWidth: "100%", textAlign: "center"}}>
                    {contactMe}
                    <ReCAPTCHA
                        sitekey="6LfP0gYbAAAAAL_g7qg5yd_X-Xp_uV-GZQFaJ9Tc"
                        ref={recaptchaRef}
                        size="invisible"
                        theme={Cookie.get('darkModeToggled') ? "dark" : "light"}
                        badge="inline"
                    />
                    {emails}
                </Space>
            )
        }
        else {
            return (
                <Row align="top" justify="center" style={{width: "100%", minWidth: "100%"}}>
                    <Col span={10}>
                        <Space direction="vertical" align="center" style={{width: "100%", minWidth: "100%", textAlign: "center"}}>
                            {contactMe}
                            <ReCAPTCHA
                                sitekey="6LfP0gYbAAAAAL_g7qg5yd_X-Xp_uV-GZQFaJ9Tc"
                                ref={recaptchaRef}
                                size="invisible"
                                theme={Cookie.get('darkModeToggled') ? "dark" : "light"}
                                badge="inline"
                            />
                        </Space>
                    </Col>
                    <Col span={14} style={{textAlign: "right"}}>
                        {emails}
                    </Col>
                </Row>
            )
        }
    }
}

export default Contact;