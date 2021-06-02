import React, {useEffect} from "react";
import "./basket-item.scss";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../redux/actions/carActions";

const BasketItem = ({price, idCar}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCars());

    },[])
    const cars = useSelector(state => state.cars.cars)
    const imgCar = cars.length && idCar.length && cars.find(car => car.id_car == idCar).img;


    return (
        <div className="basket-item">
            <img className="basket-item__img" src={imgCar} alt="auto-img"/>
            <div className="basket-item__about">
                <div className="basket-item__about__car-name">
                    {cars.length &&  idCar.length && cars.find(car => car.id_car == idCar).model}
                </div>
                <div className="basket-item__about__row">
                    Тип двигателя: 35 TFSI.
                </div>
                <div className="basket-item__about__row">
                    Вид топлива: бензин.
                </div>
                <div className="basket-item__about__row">
                    Объем: 2.0 л.
                </div>
                <div className="basket-item__about__row">
                    Мощность: 150 л.с.
                </div>
                <div className="basket-item__about__row">
                    КПП: S tronic.
                </div>
                <div className="basket-item__about__row">
                    Цвет: белый.
                </div>
                <div className="basket-item__about__row">
                    Салон: Черный.
                </div>
                <div className="basket-item__about__row">
                    Сумма: {price} бел.руб.
                </div>
            </div>

        </div>
    )
}
export default BasketItem;
