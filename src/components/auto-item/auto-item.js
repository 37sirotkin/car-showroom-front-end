import React from "react";
import "./auto-item.scss";
import {Button} from "antd";

const AutoItem = () => {
    return (
        <div className="auto-item">
            <div className="auto-item__head">
                <h2>AUDI A6</h2>
                <img className="auto-item__head__img-auto" src="https://cutt.ly/5cOYMSo" alt="auto-img"/>
            </div>
            <div className="auto-item__markup">
                <div className="auto-item__markup__column">
                    <span className="engine-type">Бензиновый</span>
                    <span className="engine-description">
                        Lorem ipsum dolor sit amet.
                    </span>
                    <span className="engine-description">
                        Lorem ipsum dolor sit amet.
                    </span>
                    <span className="engine-description">
                        Lorem ipsum dolor sit amet.
                    </span>
                    <span className="engine-description">
                        Lorem ipsum dolor sit amet.
                    </span>
                    <span className="engine-type">Дизельный</span>
                    <span className="engine-description">
                        Lorem ipsum dolor sit amet.
                    </span>
                    <span className="engine-description">
                        Lorem ipsum dolor sit amet.
                    </span>
                    <Button className="btn-main btn-sign-up">Записаться на тест-драйв</Button>
                </div>
                <div className="auto-item__markup__column">
                    <div className="auto-item__markup__column__row">
                        <div className="auto-item__markup__column__row__c">
                            <span className="auto-item__markup__column__row__c__title">Общая информация</span>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Страна марки</span>
                                <span className="block-description">Германия</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Класс автомобиля</span>
                                <span className="block-description">Е-класс</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Количество дверей</span>
                                <span className="block-description">5</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Количество мест</span>
                                <span className="block-description">5</span>
                            </div>
                        </div>
                        <div className="auto-item__markup__column__row__c">
                            <span className="auto-item__markup__column__row__c__title">Эксплуатационные показатели</span>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Макс.скорость</span>
                                <span className="block-description">250 км/ч</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Разгон до 100 км/ч</span>
                                <span className="block-description">6.2 сек</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Расход топлива на 100 км</span>
                                <span className="block-description">6.8 смешенный/8.5 город/5.8 трасса</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Марка топлива</span>
                                <span className="block-description">АИ-95</span>
                            </div>
                        </div>
                        <div className="auto-item__markup__column__row__c">
                            <span className="auto-item__markup__column__row__c__title">Двигатель</span>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Тип двигателя</span>
                                <span className="block-description">Бензиновый</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Объем двигателя</span>
                                <span className="block-description">1984 см2</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Количество целиндров</span>
                                <span className="block-description">4</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Мощность</span>
                                <span className="block-description">249 л.с.</span>
                            </div>
                        </div>
                    </div>
                    <div className="auto-item__markup__column__row">
                        <div className="auto-item__markup__column__row__c">
                            <span className="auto-item__markup__column__row__c__title">Размеры</span>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Длина</span>
                                <span className="block-description">4969мм</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Ширина</span>
                                <span className="block-description">1908мм</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Высота</span>
                                <span className="block-description">1422мм</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Колесная база</span>
                                <span className="block-description">2926мм</span>
                            </div>
                        </div>
                        <div className="auto-item__markup__column__row__c">
                            <span className="auto-item__markup__column__row__c__title">Трансмиссия</span>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Коробка передач</span>
                                <span className="block-description">Робот</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Количество передач</span>
                                <span className="block-description">7</span>
                            </div>
                            <div className="auto-item__markup__column__row__c__block-info">
                                <span className="block-name">Тип привода</span>
                                <span className="block-description">Полный</span>
                            </div>
                        </div>
                        <div className="auto-item__markup__column__row__rate">
                            <span className="auto-item__markup__column__row__rate__title">
                                Рейтинг и отзывы
                            </span>
                        </div>
                    </div>
                    <div className="auto-item__markup__column__row">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AutoItem;