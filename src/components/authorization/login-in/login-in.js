import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React, {useState} from "react";
import "./login-in.scss"
import {useDispatch} from "react-redux";
import {loginIn} from "../../redux/actions/securityAction";
import {Button, Input, Form, Checkbox} from "antd";
import {NavLink} from "react-router-dom";
import SignUp from "../sign-up/sign-up";

const LoginIn = ({setViewScreen}) => {

    const dispatch = useDispatch();


    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const onFinish = (values) => {
        dispatch(loginIn(values.username, values.password));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-in">
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="login-in__form"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input/>
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
                    <Input.Password/>
                </Form.Item>
                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <div className="button-block">
                        <Button className="btn-main" type="primary" htmlType="submit">
                            Войти
                        </Button>
                        <Button onClick={() => setViewScreen('sign-up')} className="btn-main btn-new-acc">
                            Создать аккаунт
                        </Button>

                        <Button onClick={async () => {
                            await dispatch(loginIn('guest', '0000'))

                        }} className="btn-main btn-new-acc">
                            Войти как гость
                        </Button>

                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginIn;