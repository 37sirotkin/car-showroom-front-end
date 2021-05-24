import React from "react";
import "./basket-item.scss";

const BasketItem = () => {
    return (
        <div className="basket-item">
            <img className="basket-item__img" src="https://i.postimg.cc/YCH3jTqN/Nissan-X-Trail.png" alt="auto-img"/>
            <div className="basket-item__about">
                <div className="basket-item__about__car-name">
                    Nissan X-TRAIL
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
                    Сумма: 35476 бел.руб.
                </div>
            </div>

        </div>
    )
}
export default BasketItem;
