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
    SendOutlined
} from '@ant-design/icons'

import note from './note.jsx'
import {CopyToClipboard} from "react-copy-to-clipboard"
import Cookie from 'js-cookie'

const emailList = [
    {
        email: "jtpandya3@gmail.com",
        description: "Email address open for inquiries or questions.",
        avatar: "img/icons/blueIcon.png"
    },
    {
        email: "jpandya3@stevens.edu",
        description: "My Stevens Institute of Technology email address.",
        avatar: "img/icons/redIcon.png"
    }
]

class Contact extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            submitted: Cookie.get('submitted') || 'not',
        }
    }

    validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not valid email!',
        },
    };

    onFinish = (values) => {
        if(values.contact.email === 'jtpandya3@gmail.com' || values.contact.email === "jpandya3@stevens.edu") {
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
        const contactMe = <Space direction="vertical">
            <Typography.Title>Contact Me</Typography.Title>

            {this.state.submitted == "loading" ? <div>
                <Result
                    icon={<LoadingOutlined />}
                    title="Sending"
                />
            </div> : (this.state.submitted == "submitted" || this.state.submitted == "error" ? <div>
                <Result
                    status={this.state.submitted == "error" ? "error" : "success"}
                    title={this.state.submitted == "error" ? "Error in Sending" : "Submitted"}
                    extra={[
                        <Link to="/">
                            <Button icon={<BackwardOutlined />} type="primary">
                                Go Home
                            </Button>
                        </Link>,
                        <Button icon={<ReloadOutlined />} onClick={() => {
                            this.setState({submitted: 'not'})
                        }}>
                            {this.state.submitted == "error" ? "Try Again" : "Send Another"}
                        </Button>
                    ]}
                />
            </div> : <Form labelCol= {{ span: 8 }} wrapperCol= {{ span: 16 }} name="nest-messages" onFinish={this.onFinish} validateMessages={this.validateMessages}>
                <Form.Item name={['contact', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['contact', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['contact', 'message']} label="Message">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" icon={<SendOutlined />} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>)}

            <iframe name="response" id="response" style={{display: 'none'}}></iframe>

        </Space>;
        const emails = <Space direction="vertical">
            <Typography.Title>Email Me</Typography.Title>
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
                <Space direction="vertical">
                    {contactMe}
                    {emails}
                </Space>
            )
        }
        else {
            return (
                <Row align= "top" justify="center" >
                    <Col span={12}>
                        {contactMe}
                    </Col>
                    <Col span={12}>
                        {emails}
                    </Col>
                </Row>
            )
        }
    }
}

export default Contact;