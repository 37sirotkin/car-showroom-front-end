import React, {useEffect} from "react";
import "./my-account-profile.scss";
import {Button, DatePicker, Input, Table, Tabs} from "antd";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {getMarks} from "../../redux/actions/markActions";
import {getUsers} from "../../redux/actions/userAction";

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
    console.log("User: "+ users);

    return (
        <div className="my-account-profile">
            <div className="my-account-profile__account-settings">
                <div className="my-account-profile__account-settings__personal-data">
                    <div className="title">Персональные данные</div>
                    <div className="full-name-row">
                        <div className="text-data">ФИО:</div>
                        <Input className="full-name-input" value={users[2].surname + ' ' + users[2].first_name}/>
                    </div>
                    <div className="email-row">
                        <div className="text-data">Email:</div>
                        <Input className="email-input" value={users[2].email}/>
                    </div>
                    <div className="phone-row">
                        <div className="text-data">Телефон:</div>
                        <Input className="phone-input" value={users[2].phone}/>
                    </div>
                    <div className="db-row">
                        <div className="text-data">Дата Рождения:</div>
                        <Input.Group compact>
                            <DatePicker onChange={changeData} placeholder={users[2].birthday} className="calendar"  />
                        </Input.Group>
                    </div>
                    <div className="pass-row">
                        <div className="text-data">Пароль:</div>
                        <div className="change-pass">Изменить</div>
                    </div>
                    <Button className="btn-save">Сохранить</Button>
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
                                </div>
                                <div className="extra-blocks__main-block">
                                    <div className="extra-blocks__main-block__title">
                                        Записаться на ТО
                                    </div>
                                    <div className="extra-blocks__main-block__history">
                                        <span>Последнее прохождение ТО: {"Data from DB"}</span>
                                    </div>
                                    <Button type="primary" className="btn-main">Записаться</Button>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Заявки на тест-драйв" key="2">
                            <div>ЗАЯВКИ НА ТЕСТ ДРАЙВ</div>
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