import React, {useEffect, useState} from "react";
import "./baskey.scss";
import {Button, Input} from "antd";
import BasketItem from "./basket-item";
import {useDispatch, useSelector} from "react-redux";
import {getOrder} from "../redux/actions/orderAction";

const Basket = () => {
    const dispatch = useDispatch();
    const security = useSelector(state => state.security);
    const orders = useSelector(state => state.order.order);
    const [checkedCar, setCheckedCars] = useState([])
    useEffect(() => dispatch(getOrder()),[]);
    const {user} = security;
    const currentOrders = (orders.length && orders.filter(o => o.id_user == user.id_user)) || [];


    return (
        <div className="basket">
            <div className="basket__column">
                <span className="basket__column__title">Бронирование</span>
                {currentOrders.map(o => <BasketItem price={o.price} idCar={o.id_car} setCheckedCars={setCheckedCars}
                                                    checkedCar={checkedCar} idOrder={o.id_order}
                                                    statusOrder={o.status}/>)}
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