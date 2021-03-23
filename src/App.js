import magnifierIcon from "../src/img/loupe.svg"
import './App.scss';
import {Menu, Dropdown, Button, Input} from "antd";
import {
    CheckCircleOutlined,
    DownOutlined, FacebookOutlined,
    InstagramOutlined, MenuOutlined,
    MessageOutlined,
    PhoneOutlined,
    SearchOutlined, ShoppingCartOutlined, TwitterOutlined, UserOutlined, YoutubeOutlined
} from '@ant-design/icons';
import mainLogo from "../src/img/mp_main_logo.jpg"
import testDriveLogo from "../src/img/mp_test_drive.jpg"
import repairCarLogo from "../src/img/mg_repair_car.jpg"
import AllBrands from "./components/home-page/all-brands/AllBrands";


function App() {

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Запись на тест-драйв
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Запись на сервис
                </a>
            </Menu.Item>
        </Menu>
    )

    const catalog = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Автомобили
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Запасные части
                </a>
            </Menu.Item>
        </Menu>
    )

    return (
        <div className="App">
            <header className="header">
                <div className="header__upper-row">
                    <div className="phone-number">
                        +375 25 791 78 20
                    </div>
                    <div className="buttons-menu">
                        <div className="btn-header">
                            <UserOutlined className="btn-header__icon"/>
                        </div>
                        <div className="btn-header">
                            <ShoppingCartOutlined className="btn-header__icon"/>
                        </div>
                        <div className="btn-header">
                            <MenuOutlined className="btn-header__icon"/>
                        </div>
                    </div>
                </div>
                <div className="header__bottom-row">
                    <div className="logo-items">
                        <img src="https://i.pinimg.com/originals/61/38/f8/6138f8929efacc8b9187c80aded10d57.png"
                             alt="logo-icon"/>
                        <div className="text-icon">
                            ВАШ <br/> АВТОДИЛЕР
                        </div>
                    </div>
                    <div className="dropdown-menu">
                        <Dropdown className="dropdown-item" overlay={menu}>
                            <Button>
                                МЕНЮ <DownOutlined/>
                            </Button>
                        </Dropdown>
                        <Dropdown className="dropdown-item" overlay={catalog}>
                            <Button>
                                КАТАЛОГ <DownOutlined/>
                            </Button>
                        </Dropdown>
                        <Button className="dropdown-item">АДРЕСА И КОНТАКТЫ</Button>
                    </div>
                </div>
            </header>
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
            <footer className="footer">
                <div className="footer__information">
                    <div className="footer__information__ask_question">
                        <a href="#"><MessageOutlined/><span className="span-text">Задать вопрос</span></a>
                    </div>
                    <div className="footer__information__phone">
                        <PhoneOutlined className="footer__information__phone__icon"/>
                        <span className="footer__information__phone__span-text">+375 25 791 78 20</span>
                    </div>
                    <div className="footer__information__working_hours">
                        <span>Ежедневно с 9:00 до 22:00</span>
                    </div>
                </div>
                <div className="footer__social">
                    <InstagramOutlined className="footer__social__icon"/>
                    <FacebookOutlined className="footer__social__icon"/>
                    <YoutubeOutlined className="footer__social__icon"/>
                    <TwitterOutlined className="footer__social__icon"/>
                </div>
                <div className="footer__agreement">
                    <div className="footer__agreement__years">
                        2013 - 2021
                    </div>
                    <a href="#">Пользовательское соглалшение</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
