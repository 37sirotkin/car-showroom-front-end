import React from "react";
import "./test-drive-data.scss";
import {Button, Form, Input, InputNumber} from "antd";

const TestDriveData = () => {

    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 8 },
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */



    return (
        <div className="test-drive-data">
            <Form {...layout} name="nest-messages">
                <Form.Item label="Водительский стаж">
                    <Input/>
                </Form.Item>
                <Form.Item label="Имя">
                    <Input />
                </Form.Item>
                <Form.Item label="Фамилия">
                    <Input/>
                </Form.Item>
                <Form.Item label="Телефон">
                    <Input/>
                </Form.Item>
                <Form.Item label="E-Mail">
                    <Input/>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button className="btn-main" type="primary" htmlType="submit">
                        Записаться
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default TestDriveData;