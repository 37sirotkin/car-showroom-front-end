import React from "react";
import "./baskey.scss";
import {Button, Input} from "antd";
import BasketItem from "./basket-item";

const Basket = () => {
    return (
        <div className="basket">
            <div className="basket__column">
                <span className="basket__column__title">Бронирование</span>
                <BasketItem/>
            </div>
            <div className="basket__column">
                <div >Автомобиль будет забронирован на имя:</div>
                <div className="basket__column__name">

                </div>
                <div className="basket__column__info">
                    <br/>
                    Email: <Input></Input>
                </div>
                <div className="basket__column__info">
                    Телефон: <Input></Input>
                </div>
                <div className="basket__column__static-info">
                    <br/>
                    Вы можете забрать автомобиль по адресу ул.Налибокская 25 <br/>
                    Пн - Вс: 10:00 - 20:00
                </div>
                <br/>
                <Button className="btn-main">Подтвердить</Button>

            </div>

        </div>
    )
}

export default Basket;