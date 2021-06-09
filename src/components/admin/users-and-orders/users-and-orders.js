import React from "react";
import UsersAndOrdersAllUsers from "./users/users-and-orders-all-users"
import "./users-and-orders.scss";
import {BellOutlined, FileTextOutlined, InfoCircleOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Table, Tabs} from "antd";
import UserAndOrdersOrders from "./orders-testDrives-inspections/user-and-orders-orders";
const {TabPane} = Tabs;


const UsersAndOrders = () => {

    const dataSourceForTestDrive = [
        {
            key: '1',
            id: '23',
            date: '24-04-2021',
            time: '13-20',
            path: 'Короткий',
            auto: 'KIA Rio',
            name: 'Иван',
            surname: 'Иванов',
            email: 'ivan.ivanov@mail.ru',
            phone: '+375257654318',
            exp: "3 года",
            status: "Подтвержден"
        },
        {
            key: '2',
            id: '44',
            date: '13-05-2021',
            time: '10-00',
            path: 'Короткий',
            auto: 'BMW X6',
            name: 'Сергей',
            surname: 'Мирончук',
            email: 'mironchyk@gmail.com',
            phone: '+3752599043212',
            exp: "7 лет",
            status: "Подтвержден"
        },
        {
            key: '3',
            id: '62',
            date: '02-06-2021',
            time: '14-00',
            path: 'Длинный',
            auto: 'Nissan X-Trail',
            name: 'Юлия',
            surname: 'Абрамова',
            email: 'abramova@mail.ru',
            phone: '+375253431265',
            exp: "2 года",
            status: "Не подтвержден"
        },
        {
            key: '4',
            id: '62',
            date: '026-02-2021',
            time: '12-45',
            path: 'Внедорожный',
            auto: 'Opel Astra',
            name: 'Максим',
            surname: 'Кутузов',
            email: 'kytyzov@mail.ru',
            phone: '+375254326573',
            exp: "15 лет",
            status: "Подтвержден"
        },

    ];
    const columnsForTestDrive = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Дата',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Время',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Маршрут',
            dataIndex: 'path',
            key: 'path',
        },
        {
            title: 'Автомобиль',
            dataIndex: 'auto',
            key: 'auto',
        },
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Фамилия',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Стаж',
            dataIndex: 'exp',
            key: 'exp',
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    const TabsIcon = {
        tabUsers:
            <div className="nav-item">
                <UserOutlined className="icon-item"/>
                <span className="nav-name">Пользователи</span>
            </div>,
        tabOrders:
            <div className="nav-item">
                <FileTextOutlined className="icon-item"/>
                <span className="nav-name">Заявки и заказы</span>
            </div>
    }


    return (
        <div className="users-and-orders">
            <Tabs tabPosition="left">
                <TabPane tab={TabsIcon.tabUsers} key="1">
                    <UsersAndOrdersAllUsers/>
                </TabPane>
                <TabPane tab={TabsIcon.tabOrders} key="2">
                    <Tabs tabPosition="top">
                        <TabPane tab="Заказы" key="1">
                            <UserAndOrdersOrders/>
                        </TabPane>
                        <TabPane tab="Заявки на тест-драйв" key="2">
                            <Table className="table-item" dataSource={dataSourceForTestDrive} columns={columnsForTestDrive}/>
                            <div className="test-drive-confirm">
                                <Button className="btn-main btn-confirm">
                                    Подтвердить
                                </Button>
                                <Button className="btn-main btn-confirm">
                                    Отклонить
                                </Button>
                            </div>
                        </TabPane>
                        <TabPane tab="Записи на ТО" key="3">

                        </TabPane>
                    </Tabs>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default UsersAndOrders;