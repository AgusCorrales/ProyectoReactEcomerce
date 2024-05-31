import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { UserContext } from '../../contex/UserContex/UserState';
import { useContext } from 'react';


const Login = () => {
  const {login, user} = useContext(UserContext)
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

  const navigate = useNavigate()
  const onFinish = async (values) => {
    await login(values)
    console.log(user);
    navigate("/profile")
     notification.success({
       message: 'Welcome'
    });
  }

  const onFinishFailed = (values) => {
    console.log(values);
  };
     

  return (
    <div>
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
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
              pattern: emailRegex,
              message: 'Please input a correct email!',
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
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          Or <a href="/register">Register now!</a>
        </Form.Item>

      </Form>
    </div>
  );
};

export default Login;