import React from 'react';
import {
    Button,
    Icon,
    Result,
    Affix,
    Space,
    Drawer,
    Typography,
    Form, 
    Input,
    Row, 
    Col,
} from 'antd'
import {
    LoadingOutlined
} from '@ant-design/icons'

import note from './note.jsx'

import Cookie from 'js-cookie'

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
        window.open(`https://docs.google.com/forms/d/e/1FAIpQLSeyAfs9WwZTtMezTQOArdfDaQCaX2B_hOtwYRGBpKgBBlLLjw/formResponse?usp=pp_url&entry.141286092=${values.contact.name}&entry.392819173=${values.contact.email}&entry.1658784313=${values.contact.message}&submit=Submit`, "response")
        this.checkLoad();
    }

    checkLoad = () => {
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
        
    }

    render(){
        return (
            <Row>
                <Col span={12}>
                    <Space direction="vertical">
                        <Typography.Title>Contact Me</Typography.Title>

                        {this.state.submitted == "loading" ? <div>
                            <Result
                                icon={<LoadingOutlined />}
                                title="Sending"
                            />
                        </div> : (this.state.submitted == "submitted" ? <div>
                            <Result
                                status="success"
                                title="Submitted"
                                extra={[
                                    <Button type="primary">
                                        Go Home
                                    </Button>,
                                    <Button >
                                        Send Another
                                    </Button>,
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
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>)}

                        <iframe name="response" id="response" style={{display: 'none'}}></iframe>

                    </Space>
                </Col>
                <Col span={12}>
                    <Space direction="vertical">
                        <Typography.Title>or Email Me</Typography.Title>
                        <Typography.Paragraph>jtpandya3@gmail.com</Typography.Paragraph>
                    </Space>
                </Col>
            </Row>
        )
    }
}

export default Contact;