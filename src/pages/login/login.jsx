import React, {Component} from 'react';
import './login.less'
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <header className="login-header">
          <h1>React项目: 后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>欢迎登陆</h2>
          <Form className="login-form">
            <Form.Item
              name="username"
              rules={[
                {required: true, message: '请输入用户名'},
                {min: 4, message: '用户名最少为4位'},
                {max: 12, message: '用户名最多输入12位'},
                {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成'}
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {required: true, message: '请输入密码'},
                {min: 4, message: '密码最少为4位'},
                {max: 12, message: '密码最多输入12位'},
                {pattern: /^[a-zA-Z0-9_]+$/, message: '密码必须是英文、数字或下划线组成'}
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon"/>}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default Login