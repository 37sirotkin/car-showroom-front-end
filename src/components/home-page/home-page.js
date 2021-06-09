import React from "react";
import "./home-page.scss";
import mainLogo from "../../img/mp_main_logo.jpg";
import {Button, Input, Form, Checkbox} from "antd";
import {CheckCircleOutlined, SearchOutlined} from "@ant-design/icons";
import AllBrands from "./all-brands/all-brands";
import testDriveLogo from "../../img/mp_test_drive.jpg";
import repairCarLogo from "../../img/mg_repair_car.jpg";
import ProfitableOffers from "./profitable-offers/profitable-offers";

import {NavLink} from "react-router-dom";

const HomePage = ({setSelectedMark}) => {

    


    return (
        <div className="home-page">
            <div className="home-main-logo">
                <img src={mainLogo} alt="main-logo"/>
            </div>
            <div className="car-brands">
                <div className="car-brands__all-brands">
                    <div className="all-brands-title">
                        ВСЕ МАРКИ
                    </div>

                    <AllBrands setSelectedMark={setSelectedMark}/>
                </div>
            </div>
            <div className="profitable-offers">
                <div className="profitable-offers__title">
                    Выгодные предложения
                </div>
                <div className="profitable-offers__items">
                    <ProfitableOffers img="https://i.postimg.cc/h4NMRfk5/Mini-Hatch.jpg"
                                      carName="Mini"
                                      description="Миникупер теперь доступнее! Скидка до 2500 рублей!"/>
                    <ProfitableOffers img="https://i.postimg.cc/L6sQ2c5J/Hyundai-Solaris.png"
                                      carName="Hyundai"
                                      description="Практичный и надежный Hyundai Solaris со скидкой 3100 рублей!"/>

                    <ProfitableOffers img="https://i.postimg.cc/0QwxW6Rq/Audi-RS-7.png"
                                      carName="Audi"
                                      description="Спортивный автомобиль Audi RS7 с выгодой до 5500 рублей!"/>

                    <ProfitableOffers img="https://i.postimg.cc/YCH3jTqN/Nissan-X-Trail.png"
                                      carName="Nissan"
                                      description="Внедорожник Nissan X-Trail теперь еще доступнее, скидка 4250 рублей!"/>
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
                        Новинки
                    </div>
                </div>
                <div className="new-staff__block">
                    <div className="new-staff__block__row">
                        <div className="new-staff__block__row__item">
                            <img className="new-staff__block__row__item__img" src="https://i.postimg.cc/5tkNkdX8/Audi-A7-Sportback.jpg" alt="img-car"/>
                            <div className="new-staff__block__row__item__text">AUDI A7</div>
                        </div>
                        <div className="new-staff__block__row__item">
                            <img className="new-staff__block__row__item__img" src="https://i.postimg.cc/85js1k2y/Aston-Martin-DBX.jpg" alt="img-car"/>
                            <div className="new-staff__block__row__item__text">Aston Martin DBX</div>
                        </div>
                        <div className="new-staff__block__row__item">
                            <img className="new-staff__block__row__item__img" src="https://i.postimg.cc/wBzhTN2w/KIA-Sorento.png" alt="img-car"/>
                            <div className="new-staff__block__row__item__text">KIA Sorento</div>
                        </div>
                        <div className="new-staff__block__row__item">
                            <img className="new-staff__block__row__item__img" src="https://i.postimg.cc/xTbHv5Fs/Mercedes-Benz-CLS-53-AMG.jpg" alt="img-car"/>
                            <div className="new-staff__block__row__item__text">Mercedes-Benz CLS 53</div>
                        </div>

                    </div>
                    <div className="new-staff__block__row">
                        <div className="new-staff__block__row__item">
                            <img className="new-staff__block__row__item__img" src="https://i.postimg.cc/659JRb3K/Chevrolet-Camaro-BLACK.jpg" alt="img-car"/>
                            <div className="new-staff__block__row__item__text">Chevrolet Camaro</div>
                        </div>
                        <div className="new-staff__block__row__item">
                            <img className="new-staff__block__row__item__img" src="https://i.postimg.cc/Zn5HYNTG/Jeep-Cherokee.png" alt="img-car"/>
                            <div className="new-staff__block__row__item__text">Jeep Cherokee</div>
                        </div>
                        <div className="new-staff__block__row__item">
                            <img className="new-staff__block__row__item__img" src="https://i.postimg.cc/Kvcw4Kqv/Ford-Evos.png" alt="img-car"/>
                            <div className="new-staff__block__row__item__text">Ford Evos</div>
                        </div>
                        <div className="new-staff__block__row__item">
                            <img className="new-staff__block__row__item__img" src="https://i.postimg.cc/XJCGf7sr/Tesla-model-S-Plaid.jpg" alt="img-car"/>
                            <div className="new-staff__block__row__item__text">Tesla model S Plaid</div>
                        </div>

                    </div>


                </div>
            </div>
            <div className="test-drive-registration">
                <div className="active-block">
                    <div className="active-block__title">
                        Быстрая и удобная запись на ТО
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

                    <Button className="btn-main btn-sign-up" type="primary" size="large"
                            onClick={() => <NavLink to="/testDrive"/>}>Записаться</Button>



                </div>
                <div className="img-test-drive">
                    <img src={repairCarLogo} alt="repair-car-logo"/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;