import React, {useState} from "react";
import "./test-drive-data.scss";
import {Button, Form, Input, InputNumber} from "antd";
import {useDispatch} from "react-redux";
import {postTestDrive} from "../../redux/actions/testDriveAction";

const TestDriveData = ({selectCar, selectPath, selectTime}) => {

    const dispatch = useDispatch();


    const [formInfo, setFormInfo] = useState({
        exp: null,
        name: null,
        surname: null,
        phone: null,
        email: null
    });

    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 8 },
    };

    const [confirmTestDrive, setConfirmTestDrive] = useState(true);



    const submitTestDrive = () => {
        const postObj = {
            date_of_td: selectTime,
            status: false,
            id_car: selectCar,
            id_user: 2,
            experience: formInfo.exp,
            first_name: formInfo.name,
            surname: formInfo.surname,
            phone: formInfo.phone,
            email: formInfo.email,
            path: selectPath
        }
        dispatch(postTestDrive(postObj));
        setConfirmTestDrive(false);
        console.log(postObj)
    }

    return (
        <div className="test-drive-data">
            <Form {...layout} name="nest-messages">
                <Form.Item label="Водительский стаж">
                    <Input onChange={e => {
                        const newObj = {...formInfo}
                        newObj.exp = e.target.value;
                        setFormInfo(newObj);
                    }}/>
                </Form.Item>
                <Form.Item label="Имя">
                    <Input onChange={e => {
                        const newObj = {...formInfo}
                        newObj.name = e.target.value;
                        setFormInfo(newObj);
                    }} />
                </Form.Item>
                <Form.Item label="Фамилия">
                    <Input onChange={e => {
                        const newObj = {...formInfo}
                        newObj.surname = e.target.value;
                        setFormInfo(newObj);
                    }}/>
                </Form.Item>
                <Form.Item label="Телефон">
                    <Input onChange={e => {
                        const newObj = {...formInfo}
                        newObj.phone = e.target.value;
                        setFormInfo(newObj);
                    }}/>
                </Form.Item>
                <Form.Item label="E-Mail">
                    <Input onChange={e => {
                        const newObj = {...formInfo}
                        newObj.email = e.target.value;
                        setFormInfo(newObj);
                    }}/>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button onClick={() => submitTestDrive()} className="btn-main" type="primary" htmlType="submit">
                        Записаться
                    </Button>
                </Form.Item>
            </Form>
            <div className={`confirm-test-drive ${confirmTestDrive ? 'confirm-test-drive-none' : ""} `}>
                Вы успешно записались на тест-драйв!
            </div>
        </div>
    )
}

export default TestDriveData;