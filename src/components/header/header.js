import React from "react";
import "./header.scss";
import {DownOutlined, MenuOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Dropdown, Menu} from "antd";
import {NavLink} from "react-router-dom";
import mainLogo from "../../img/main_logo.jpg"
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../redux/actions/securityAction";

const Header = () => {
    const dispatch = useDispatch()

    const security = useSelector(state => state.security);
    const {user} = security;

    const catalog = (
        <Menu>
            <Menu.Item>
                <NavLink to="/all-cars">
                    Автомобили
                </NavLink>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Запасные части
                </a>
            </Menu.Item>

        </Menu>
    )



    return (
        <header className="header">
            <div className="header__upper-row">
                <div className="phone-number">
                    +375 25 791 78 20
                </div>
                <div className="buttons-menu">
                    <div className="btn-header">
                        {
                            user.email === 'guest' ?
                                <UserOutlined onClick={() => {
                                    dispatch(logOut())
                                    window.location.reload();
                                }

                                } className="btn-header__icon"/> :
                                <NavLink to="/myAccount">
                                    <UserOutlined className="btn-header__icon"/>
                                </NavLink>
                        }

                    </div>
                    <div className="btn-header">
                        {
                            user.email === 'guest' ?
                                <ShoppingCartOutlined onClick={() => {
                                    dispatch(logOut())
                                    window.location.reload();
                                }

                                } className="btn-header__icon"/> :
                                <NavLink to="/basket">
                                    <ShoppingCartOutlined className="btn-header__icon"/>
                                </NavLink>
                        }

                    </div>
                    <div className="btn-header">
                        <MenuOutlined className="btn-header__icon"/>
                    </div>
                </div>
            </div>
            <div className="header__bottom-row">
                <div className="logo-items">
                    <NavLink to="/">
                        <img src={mainLogo}
                             alt="logo-icon"/>
                        <div className="text-icon">
                            ВАШ <br/> АВТОДИЛЕР
                        </div>
                    </NavLink>
                </div>
                <div className="dropdown-menu">
                    {
                        user.email != 'guest' ?<Dropdown className="dropdown-item" overlay={<Menu>
                            <Menu.Item>
                                <NavLink to="/testDrive">
                                    Запись на тест-драйв
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item>
                                <NavLink to="/inspection">
                                    Запись на ТО
                                </NavLink>
                            </Menu.Item>
                            {
                                user.type == 2 ?
                                    (
                                        <Menu.Item>
                                            <NavLink to="/customize-chart">
                                                Отчеты
                                            </NavLink>
                                        </Menu.Item>) : null

                            }
                            {
                                user.type == 2 ?
                                    (
                                        <Menu.Item>
                                            <NavLink to="/main-chart">
                                                Статистика
                                            </NavLink>
                                        </Menu.Item>) : null

                            }
                            {
                                user.type == 2 ?
                                    (
                                        <Menu.Item>
                                            <NavLink to="/add-car">
                                                Добавить автомобиль
                                            </NavLink>
                                        </Menu.Item>) : null

                            }
                            {
                                user.type == 3 ?
                                    (
                                        <Menu.Item>
                                            <NavLink to="/users-and-orders">
                                                Таблицы
                                            </NavLink>
                                        </Menu.Item>) : null

                            }


                        </Menu>}>
                            <Button>
                                УСЛУГИ <DownOutlined/>
                            </Button>
                        </Dropdown> : null
                    }

                    <Dropdown className="dropdown-item" overlay={catalog}>
                        <Button>
                            КАТАЛОГ <DownOutlined/>
                        </Button>
                    </Dropdown>
                    <Button onClick={() => {

                    }} className="dropdown-item">АДРЕСА И КОНТАКТЫ</Button>
                </div>
            </div>
        </header>
    )
}

export default Header;