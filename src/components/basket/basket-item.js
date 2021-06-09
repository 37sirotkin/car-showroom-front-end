import React, {useEffect} from "react";
import "./basket-item.scss";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../redux/actions/carActions";
import {getMarks} from "../redux/actions/markActions";
import {Checkbox} from "antd";

const BasketItem = ({price, idCar, setCheckedCars, checkedCar}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCars());
        dispatch(getMarks());

    }, [])
    const cars = useSelector(state => state.cars.cars);
    const marks = useSelector(state => state.marks.marks);
    const currentCar = cars.length && cars.find(car => car.id_car == idCar);
    const markCar = currentCar && marks.length && marks.find(mark => mark.mark_id == currentCar.markMarkId).name;
    const imgCar = cars.length && cars.find(car => car.id_car == idCar).img;

    const onChangeCheckBox = (e) => {
        if (e.target.checked) {
            const checkedList = checkedCar.push()
        }
    }

    return (
        <div className="basket-item">
            <img className="basket-item__img" src={imgCar} alt="auto-img"/>
            <div className="basket-item__about">
                <div className="basket-item__about__car-name">
                    {markCar} {cars.length && cars.find(car => car.id_car == idCar).model}
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
                <div className="basket-item__about__row">
                   Выбрать: <Checkbox/>
                </div>
            </div>

        </div>
    )
}
export default BasketItem;
