import React from "react";
import { Form, Input, Button, Space, Typography, Divider } from 'antd';
import '../../assets/css/login.css'

export function Login(){
    const { Text } = Typography
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    return(
        <Space className="container">
            <div className="logo-box"></div>
            <div className="login-box">
                <Text strong style={{fontSize:'17px', color:'#5E419A'}}>Welcome To XPENCE</Text>
                <Text>Login to continue</Text>
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
                        LOGIN
                    </Button>
                    <a className="link-grayish" href="">Forgot password?</a>
                </Form.Item>
                <Divider/>
                <Form.Item className="text-align-center">
                    New?<a className="link-orange" href="/create_account">Create Account </a>
                </Form.Item>
                </Form>
            </div>
            <br/>
            <br/>
            <Typography>TaskForce 5.0</Typography>
        </Space>
    )
}