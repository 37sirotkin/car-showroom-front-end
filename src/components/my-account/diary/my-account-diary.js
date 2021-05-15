import React from "react";
import "./my-account-diary.scss";
import {Checkbox, DatePicker, Input, Table} from "antd";

const MyAccountDiary = () => {

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

    return (
        <div className="my-account-diary">
            <h2 className="my-account-diary__title">Audi A6</h2>
            <div className="my-account-diary__info">
                <div className="my-account-diary__info__column">
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Дата покупки:</span>
                        <span className="calender">
                            <DatePicker placeholder={"Data from DB"} className="" />
                        </span>
                    </div>
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Пробег при покупке</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Расход топлива:</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Тип двигателя:</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                </div>
                <div className="my-account-diary__info__column">
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Топливо:</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Расход топлива:</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Преодалено километров:</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                </div>
                <div className="my-account-diary__info__column">
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Расходы, бел. рубли:</span>
                    </div>
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Топливо:</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Прохождение ТО:</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Сервис:</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Запчасти:</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Штрафы:</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                    <div className="my-account-diary__info__column__item">
                        <span className="my-account-diary__info__column__item__name">Налоги:</span>
                        <span>
                            <Input placeholder="Basic usage" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="my-account-diary__data-processing">
                <span>Разрешаю обработку данных: </span>
                <Checkbox/>
            </div>
            <Table className="table-item" dataSource={dataSource} columns={columns}/>
        </div>
    )
}
export default MyAccountDiary;