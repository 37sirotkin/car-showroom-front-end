import React from "react";
import "./home-page.scss";
import mainLogo from "../../img/mp_main_logo.jpg";
import {Button, Input} from "antd";
import {CheckCircleOutlined, SearchOutlined} from "@ant-design/icons";
import AllBrands from "./all-brands/AllBrands";
import testDriveLogo from "../../img/mp_test_drive.jpg";
import repairCarLogo from "../../img/mg_repair_car.jpg";

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-main-logo">
                <img src={mainLogo} alt="main-logo"/>
            </div>
            <div className="car-brands">
                <div className="car-brands__input-find-car">
                    <Input className="input-search" placeholder="Введите марку автомобиля" prefix={<SearchOutlined/>}/>
                    <Button className="btn-main btn-search" type="primary" size="large">
                        Найти
                    </Button>
                </div>
                <div className="car-brands__all-brands">
                    <div className="all-brands-title">
                        ВСЕ МАРКИ
                    </div>
                    <AllBrands/>
                </div>
            </div>
            <div className="profitable-offers">
                <div className="profitable-offers__title">
                    Выгодные предложения
                </div>
                <div className="profitable-offers__items">
                    <div className="offer-item">

                    </div>
                    <div className="offer-item">

                    </div>
                    <div className="offer-item">

                    </div>
                    <div className="offer-item">

                    </div>
                </div>
            </div>
            <div className="test-drive-registration">
                <div className="active-block">
                    <div className="active-block__title">
                        Быстрая и удобная запись на тест-драйв
                    </div>
                    <div className="active-block__pluses">
                        <ul className="pluses-items">
                            <li><CheckCircleOutlined className="done-icon"/><span>Запись за одну минуту</span></li>
                            <li><CheckCircleOutlined className="done-icon"/><span>Никаких очередей</span></li>
                            <li><CheckCircleOutlined className="done-icon"/><span>Скиди при записи через сайт</span>
                            </li>
                        </ul>
                    </div>
                    <Button className="btn-main btn-sign-up" type="primary" size="large">Записаться</Button>
                </div>
                <div className="img-test-drive">
                    <img src={testDriveLogo} alt="test-drive-logo"/>
                </div>
            </div>
            <div className="new-staff">
                <div className="new-staff__title">
                    <div className="new-staff__title__big">
                        Новикни
                    </div>
                    <div className="new-staff__title__small">
                        Запчасти и аксессуары
                    </div>
                </div>
                <div className="new-staff__block">
                    <div className="new-staff__block__row">
                        <div className="new-staff__block__row__item">

                        </div>
                        <div className="new-staff__block__row__item">

                        </div>
                        <div className="new-staff__block__row__item">

                        </div>
                        <div className="new-staff__block__row__item">

                        </div>
                        <div className="new-staff__block__row__item">

                        </div>
                    </div>
                    <div className="new-staff__block__row">
                        <div className="new-staff__block__row__item">

                        </div>
                        <div className="new-staff__block__row__item">

                        </div>
                        <div className="new-staff__block__row__item">

                        </div>
                        <div className="new-staff__block__row__item">

                        </div>
                        <div className="new-staff__block__row__item">

                        </div>
                    </div>


                </div>
            </div>
            <div className="test-drive-registration">
                <div className="active-block">
                    <div className="active-block__title">
                        Быстрая и удобная запись на тест-драйв
                    </div>
                    <div className="active-block__pluses">
                        <ul className="pluses-items">
                            <li><CheckCircleOutlined className="done-icon"/><span>Официальный сервис</span></li>
                            <li><CheckCircleOutlined
                                className="done-icon"/><span>Сохранение гарантии на автомобиль</span></li>
                            <li><CheckCircleOutlined className="done-icon"/><span>Быстрая запись</span></li>
                            <li><CheckCircleOutlined className="done-icon"/><span>Никаких очередей</span></li>
                        </ul>
                    </div>
                    <Button className="btn-main btn-sign-up" type="primary" size="large">Записаться</Button>
                </div>
                <div className="img-test-drive">
                    <img src={repairCarLogo} alt="repair-car-logo"/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;