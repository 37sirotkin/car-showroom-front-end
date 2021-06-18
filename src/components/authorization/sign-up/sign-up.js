import React, {useState} from "react";
import "./sign-up.scss";
import {Button, Checkbox, Form, Input} from "antd";
import {loginIn} from "../../redux/actions/securityAction";
import {useDispatch} from "react-redux";
import {createUser} from "../../redux/actions/authorizationAction";

const SignUp = ({setViewScreen}) => {

    const dispatch = useDispatch()

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
        const newUser = {
            first_name: values.firstname,
            surname: values.surname,
            email: values.email,
            password: values.password,
            phone: values.phone,
            birthday: values.dateOfBirth,
            id_status: 3,
            blocked: false
        }
        dispatch(createUser(newUser));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="sign-up">
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
                    label="Email"
                    name="email"
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
                    label="Пароль"
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

                <Form.Item
                    label="Имя"
                    name="firstname"
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
                    label="Фамилия"
                    name="surname"
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
                    label="Телефон"
                    name="phone"
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
                    label="Дата рождения"
                    name="dateOfBirth"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>



                <Form.Item {...tailLayout}>
                    <div className="button-block">
                        <Button className="btn-main" type="primary" htmlType="submit">
                            Создать аккаунт
                        </Button>

                        <Button onClick={() => setViewScreen('login-in')} className="btn-main btn-new-acc">
                            Войти
                        </Button>

                    </div>

                </Form.Item>
            </Form>
        </div>
    )
}

export default SignUp;