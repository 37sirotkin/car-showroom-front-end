import React from "react";
import "./home-page.scss";
import mainLogo from "../../img/mp_main_logo.jpg";
import {Button, Input} from "antd";
import {CheckCircleOutlined, SearchOutlined} from "@ant-design/icons";
import AllBrands from "./all-brands/AllBrands";
import testDriveLogo from "../../img/mp_test_drive.jpg";
import repairCarLogo from "../../img/mg_repair_car.jpg";
import ProfitableOffers from "./profitable-offers/profitable-offers";

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
                    <ProfitableOffers img="https://downloader.disk.yandex.ru/preview/578db0c4328f9f6fc04e07502c181f6581055f050ccab11238d62d686009c752/60a00d48/GiizwpjW-1DEFuzkIz5WFPe_Kw3OgOiZ_v2CU16dSlCNxuROjEtdD-BvyCs9SbTUtRzL-58Wab_qTHImHCrgZQ%3D%3D?uid=0&filename=Mini-Hatch.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1906x923"
                                      carName="Mini"
                                      description="Миникупер теперь доступнее! Скидка до 2500 рублей!"/>
                    <ProfitableOffers img="https://downloader.disk.yandex.ru/preview/4e04f15909a9643026231ca51a273aa1dacbc793a4f88a8a7aa5d884ff8bfb1d/60a00f63/zqQJlsLV7qAzBDLCB11pUVCqpyWxumVAecMRqkJv6Dub6RNsuKBIvl7S9r8qPsgG_ZSUfr9z3D_6DPmM9YKvxw%3D%3D?uid=0&filename=Hyundai%20Solaris.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1906x923"
                                      carName="Hyundai"
                                      description="Практичный и надежный Hyundai Solaris со скидкой 3100 рублей!"/>

                    <ProfitableOffers img="https://downloader.disk.yandex.ru/preview/c87f78328478567d1ffd048fc681cd2ed0179c38aa7ec9d370898b17b83418f2/60a00c0c/_wKumtcw7vU7q4R24ODwkrjEpUsQ_tVjrThLeXcEZYo511pIXT-17qyOycJ0GiZ096vlKPMpv0GZzytWRjmQoA%3D%3D?uid=0&filename=Audi%20RS%207.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1906x923"
                                      carName="Audi"
                                      description="Спортивный автомобиль Audi RS7 с выгодой до 5500 рублей!"/>

                    <ProfitableOffers img="https://downloader.disk.yandex.ru/preview/e1b389783f8b5362fb643deb60ca48246d80ddc483e3c1a38047b92cfde40670/60a01103/YOQpwpHHeb3HOT0W03lGdO7Nv8xrDjzAGjoPkKo0NoxE36cRX7PBL4Kwatn61LkQ1DeXY3Gi9KyJhv_OvPETlQ%3D%3D?uid=0&filename=Nissan%20Murano.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1906x923"
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