import React from 'react';
import {
    Button,
    Icon,
    Layout,
    Affix,
    Space,
    Drawer,
    Typography,
    Form, 
    Input, 
    InputNumber
} from 'antd'

class Contact extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            submissionIFrame: true
        }
    }

    validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not valid email!',
        },
    };

    onFinish = (values) => {
        console.log(values);
        let response = window.open(`https://docs.google.com/forms/d/e/1FAIpQLSeyAfs9WwZTtMezTQOArdfDaQCaX2B_hOtwYRGBpKgBBlLLjw/formResponse?usp=pp_url&entry.141286092=${values.contact.name}&entry.392819173=${values.contact.email}&entry.1658784313=${values.contact.message}`, 'response');
        setTimeout(() => {
            this.setState( () => ({submissionIFrame: false}), () => {
                response.close();
            })
        }, 5000)
    }

    layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    render(){
        return (
            <Space direction="vertical">

            <Typography.Title>Contact Me</Typography.Title>
            <Form {...this.layout} name="nest-messages" onFinish={this.onFinish} validateMessages={this.validateMessages}>
                <Form.Item name={['contact', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['contact', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['contact', 'message']} label="Website">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            
            {this.state.submissionIFrame ? <iframe name="response" style={{display:'none'}}></iframe> : null}
            
            </Space>
        )
    }
}

export default Contact;