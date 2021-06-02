import React, {useEffect} from "react";
import "./my-account-profile.scss";
import {Button, DatePicker, Input, Table, Tabs} from "antd";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/actions/userAction";
import MyAccountProfileTestDrive from "./my-account-profile-test-drive";
import { SecurityScanFilled } from "@ant-design/icons";
import {logOut} from "../../redux/actions/securityAction";

const dataSource = [
    {
        key: '1',
        date: '22-01-2021',
        coast: '4300p',
        status: 'Принят',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Стоимость',
        dataIndex: 'coast',
        key: 'coast',
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
    },
];

const tabs = [{
    id: 'order',
    name: 'Заказы'
}, {
    id: 'requests',
    name: 'Заявки на тест-драйв'
}, {
    id: 'records',
    name: 'Записи на ТO'
}]

const {TabPane} = Tabs;

const changeData = (value) => {
    console.log(moment(value).format("DD-MM-YYYY"));
}

const MyAccountProfile = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getUsers()), []);
    const users = useSelector(state => state.users.users);

    const security = useSelector(state => state.security)

    const {user} = security;
    const onClickLogOut = () => {
        dispatch(logOut());
        window.location.reload()
    }
    return (
        user && 
        <div className="my-account-profile">
            <div className="my-account-profile__account-settings">
                <div className="my-account-profile__account-settings__personal-data">
                    <div className="title">Персональные данные</div>
                    <div className="full-name-row">
                        <div className="text-data">ФИО:</div>
                        <Input className="full-name-input" value={user.firstName}/>
                    </div>
                    <div className="email-row">
                        <div className="text-data">Email:</div>
                        <Input className="email-input" value={user.email}/>
                    </div>
                    <div className="phone-row">
                        <div className="text-data">Телефон:</div>
                        <Input className="phone-input" value={user.phone}/>
                    </div>
                    <div className="db-row">
                        <div className="text-data">Дата Рождения:</div>
                        <Input.Group compact>
                            <DatePicker onChange={changeData} placeholder={user.birthday} className="calendar"  />
                        </Input.Group>
                    </div>
                    <div className="pass-row">
                        <div className="text-data">Пароль:</div>
                        <div className="change-pass">Изменить</div>
                    </div>
                    <Button className="btn-save">Сохранить</Button>
                    <Button onClick={() => onClickLogOut()} className="btn-save">Выйти из аккаунта</Button>
                </div>
                <div className="my-account-profile__account-settings__delete-account">
                    <div className="title-delete">Удаление аккаунта</div>
                    <div className="text-description">
                        Как только Ваш Личный Кабинет будет удален, <br/> Вы автоматически выйдете из системы и больше
                        не сможете войти в этот аккаунт.
                    </div>
                    <Button className="btn-delete-account">Удалить аккаунт</Button>
                </div>
            </div>
            <div className="my-account-profile__table-history">
                <div className="my-account-profile__table-history__title">
                    <Tabs className="my-account-profile__table-history__title__tabs" defaultActiveKey="1">
                        <TabPane className="tab-item" tab="Заказы" key="1">
                            <div className="order-table">
                                <Table className="table-item" dataSource={dataSource} columns={columns}/>
                            </div>
                            <div className="extra-blocks">
                                <div className="extra-blocks__main-block">
                                    <div className="extra-blocks__main-block__title">
                                        Записаться на тест-драйв
                                    </div>
                                    <div className="extra-blocks__main-block__history">
                                        <span>Последняя запись на тест-драйв: {"21-06-05"}</span>
                                    </div>
                                    <Button type="primary" className="btn-main">Записаться</Button>
                                </div>
                                <div className="extra-blocks__main-block">
                                    <div className="extra-blocks__main-block__title">
                                        Записаться на ТО
                                    </div>
                                    <div className="extra-blocks__main-block__history">
                                        <span>Последнее прохождение ТО: {"Не проходил"}</span>
                                    </div>
                                    <Button type="primary" className="btn-main">Записаться</Button>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Заявки на тест-драйв" key="2">
                            <MyAccountProfileTestDrive/>
                        </TabPane>
                        <TabPane tab="Записи на ТО" key="3">
                            <div>ЗАПИСИ ТО</div>
                        </TabPane>
                    </Tabs>
                </div>
                <div className="my-account__table-history__row">

                </div>
            </div>
        </div>
    )
}

export default MyAccountProfile;