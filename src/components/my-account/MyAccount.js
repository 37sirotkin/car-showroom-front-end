import React, {useState} from "react";

import "./my-account.scss";
import {BellOutlined, FileTextOutlined, InfoCircleOutlined, SearchOutlined} from "@ant-design/icons";
import {Button, Input, Table, Tabs} from "antd";

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

const MyAccount = () => {

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const btnChangeTab = (e) => {
        const tab = e.currentTarget.dataset.tab;
        setActiveTab(tab);

    }

    const {TabPane} = Tabs;

    return (
        <div className="my-account">
            <div className="my-account__nav-icons">
                <InfoCircleOutlined/>
                <FileTextOutlined/>
                <BellOutlined/>
            </div>
            <div className="my-account__account-settings">
                <div className="my-account__account-settings__personal-data">
                    <div className="title">Персональные данные</div>
                    <div className="full-name-row">
                        <div className="text-data">ФИО:</div>
                        <Input className="full-name-input"/>
                    </div>
                    <div className="email-row">
                        <div className="text-data">Email:</div>
                        <Input className="email-input"/>
                    </div>
                    <div className="phone-row">
                        <div className="text-data">Телефон:</div>
                        <Input className="phone-input"/>
                    </div>
                    <div className="bd-row">
                        <div className="text-data">Дата Рождения:</div>
                        <Input className="bd-input"/>
                    </div>
                    <div className="pass-row">
                        <div className="text-data">Пароль:</div>
                        <div className="change-pass">Изменить</div>
                    </div>
                    <Button className="btn-save">Сохранить</Button>
                </div>
                <div className="my-account__account-settings__delete-account">
                    <div className="title-delete">Удаление аккаунта</div>
                    <div className="text-description">
                        Как только Ваш Личный Кабинет будет удален, <br/> Вы автоматически выйдете из системы и больше
                        не сможете войти в этот аккаунт.
                    </div>
                    <Button className="btn-delete-account">Удалить аккаунт</Button>
                </div>
            </div>
            <div className="my-account__table-history">
                <div className="my-account__table-history__title">
                    <Tabs className="my-account__table-history__title__tabs" defaultActiveKey="1">
                        <TabPane className="tab-item" tab="Заказы" key="1">
                            <div className="my-account__table-history__row__table">
                                <Table className="table-item" dataSource={dataSource} columns={columns}/>
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

export default MyAccount;