import React, {useEffect} from "react";
import "./baskey.scss";
import {Button, Input} from "antd";
import BasketItem from "./basket-item";
import {useDispatch, useSelector} from "react-redux";
import {getOrder} from "../redux/actions/orderAction";

const Basket = () => {
    const security = useSelector(state => state.security);
    const {logged, signupChecked, user} = security;
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.order);
    // useEffect(() => dispatch(getOrder()),[]);
    // const currentOrders = (orders.length && orders.filter(o => o.id_user == user.id_user)) || [];

    return (
        <div className="basket">
            <div className="basket__column">
                <span className="basket__column__title">Бронирование</span>
                <BasketItem/>
            </div>
            <div className="basket__column">
                <div >Автомобиль будет забронирован на имя:</div>
                <div className="basket__column__name">
                    {user.firstName} {user.surname}
                </div>
                <div className="basket__column__info">
                    <br/>
                    Email: <Input value={user.email}/>
                </div>
                <div className="basket__column__info">
                    Телефон: <Input value={user.phone}/>
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