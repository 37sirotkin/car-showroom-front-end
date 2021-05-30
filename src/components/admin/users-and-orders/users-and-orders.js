import React from "react";
import "./users-and-orders.scss";
import {BellOutlined, FileTextOutlined, InfoCircleOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Table, Tabs} from "antd";
const {TabPane} = Tabs;

const UsersAndOrders = () => {

    const dataSourceForUsers = [
        {
            key: '1',
            id: '34',
            name: 'Иван',
            surname: 'Иванов',
            bd: '25.04.1995',
            email: 'ivan.ivanov@mail.ru',
            phone: '+375257654318',
            status: "active"
        },
        {
            key: '2',
            id: '55',
            name: 'Сергей',
            surname: 'Мирончук',
            bd: '13.02.1991',
            email: 'mironchyk@gmail.com',
            phone: '+3752599043212',
            status: "blocked"
        },
        {
            key: '3',
            id: '66',
            name: 'Юлия',
            surname: 'Абрамова',
            bd: '15.02.1998',
            email: 'abramova@mail.ru',
            phone: '+375253431265',
            status: "active"
        },
        {
            key: '4',
            id: '2',
            name: 'Максим',
            surname: 'Кутузов',
            bd: '12.11.1976',
            email: 'kytyzov@mail.ru',
            phone: '+375254326573',
            status: "active"
        },
        {
            key: '5',
            id: '22',
            name: 'Антон',
            surname: 'Чехов',
            bd: '02.03.1985',
            email: 'chehov@yandex.ru',
            phone: '+3753344532167',
            status: "active"
        },
        {
            key: '6',
            id: '89',
            name: 'Екатерина',
            surname: 'Чуприс',
            bd: '22.12.1969',
            email: 'chypris@mail.ru',
            phone: '+375295540417',
            status: "blocked",
        },
    ];
    const columnsForUsers = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
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
            title: 'Дата рождения',
            dataIndex: 'bd',
            key: 'bd',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
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
                    <Table className="table-item" dataSource={dataSourceForUsers} columns={columnsForUsers}/>
                </TabPane>
                <TabPane tab={TabsIcon.tabOrders} key="2">
                    <Tabs tabPosition="top">
                        <TabPane tab="Заказы" key="1">

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