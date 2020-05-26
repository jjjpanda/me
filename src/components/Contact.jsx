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

    validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
    };

    onFinish = (values) => {
        console.log(values);
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSeyAfs9WwZTtMezTQOArdfDaQCaX2B_hOtwYRGBpKgBBlLLjw/formResponse?usp=pp_url&entry.141286092=bruh&entry.392819173=brhu&entry.1658784313=bruh', '_blank');
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
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Website">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            
            </Space>
        )
    }
}

export default Contact;