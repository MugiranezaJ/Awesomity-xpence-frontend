import React from "react";
import { Form, Input, Button, Space, Typography, Divider } from 'antd';
import '../../assets/css/login.css'

export function CreateAccount(){
    const { Text } = Typography
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    return(
        <Space className="container">
            <div className="logo-box"></div>
            <div className="login-box">
                <Text strong style={{fontSize:'17px', color:'#5E419A'}}>REGISTER</Text>
                <br/>
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="name"
                    label="Name"
                    labelCol={{ span: 24 }}
                    wrapperCol={{span: 24}}
                    required={false}
                    rules={[
                    {
                        required: true,
                        message: 'Name is required',
                    },
                    ]}
                >
                    <Input placeholder="Enter name" className="text-input-1" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    labelCol={{ span: 24 }}
                    wrapperCol={{span: 24}}
                    required={false}
                    rules={[
                    {
                        required: true,
                        message: 'Email is required',
                    },
                    ]}
                >
                    <Input placeholder="Enter email" className="text-input-1" />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="phone"
                    labelCol={{ span: 24 }}
                    wrapperCol={{span: 24}}
                    required={false}
                    rules={[
                    {
                        required: true,
                        message: 'Phone is required',
                    },
                    ]}
                >
                    <Input placeholder=" - - - - " className="text-input-1" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    labelCol={{ span: 24 }}
                    required={false}
                    rules={[
                    {
                        required: true,
                        message: 'Password is required',
                    },
                    ]}
                >
                    <Input
                    type="password"
                    placeholder="Password"
                    className="text-input-1"
                    />
                </Form.Item>

                <Form.Item  className="text-align-center">
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        REGISTER
                    </Button>
                </Form.Item>
                <Divider/>
                <Form.Item className="text-align-center">
                    Already have an account?<a className="link-orange" href="/login">Login</a>
                </Form.Item>
                </Form>
            </div>
            <Typography>TaskForce 5.0</Typography>
        </Space>
    )
}