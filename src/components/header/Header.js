import React from "react";
import "./header.scss";
import {DownOutlined, MenuOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Dropdown, Menu} from "antd";
import {NavLink} from "react-router-dom";

const Header = () => {
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
        <header className="header">
            <div className="header__upper-row">
                <div className="phone-number">
                    +375 25 791 78 20
                </div>
                <div className="buttons-menu">
                    <div className="btn-header">
                        <NavLink to="/myAccount">
                            <UserOutlined className="btn-header__icon"/>
                        </NavLink>
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
                    <NavLink to="/">
                        <img src="https://i.pinimg.com/originals/61/38/f8/6138f8929efacc8b9187c80aded10d57.png"
                             alt="logo-icon"/>
                        <div className="text-icon">
                            ВАШ <br/> АВТОДИЛЕР
                        </div>
                    </NavLink>
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
    )
}

export default Header;