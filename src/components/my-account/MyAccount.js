import React, {useState} from "react";

import "./my-account.scss";
import {BellOutlined, FileTextOutlined, InfoCircleOutlined, SearchOutlined} from "@ant-design/icons";
import {Button, Input, Table} from "antd";

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
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
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
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
                <div className="my-account__table-history__row">
                    {tabs.map(t => (
                        <div key={t.id} 
                            className={`my-account__table-history__row__title ${activeTab === t.id ? 'title-active' : ''}`} 
                            onClick={btnChangeTab}
                            data-tab={t.id}>
                            {t.name}                            
                        </div>))
                    }                   
                </div>
                <div className="my-account__table-history__row">
                    <div className="my-account__table-history__row__table">
                        <Table className="table-item" dataSource={dataSource} columns={columns}/>
                    </div>
                </div>
                <div className="my-account__table-history__row">

                </div>
            </div>
        </div>
    )
}

export default MyAccount;