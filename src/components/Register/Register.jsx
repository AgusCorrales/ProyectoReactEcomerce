import { Button, Form, Input } from 'antd';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contex/UserContex/UserState';
import './Register.scss'

const Register = () => {
    const { register } = useContext(UserContext);
    const [form] = Form.useForm();

    const navigate = useNavigate();

    const onFinish = async (values) => {
        navigate("/login")
        try {
            await register(values);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='form-container'>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="on"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Lastname"
                    name="lastname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your lastname!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
