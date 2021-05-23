import React from "react";
import "./basket-item.scss";

const BasketItem = () => {
    return (
        <div className="basket-item">
            <img className="basket-item__img" src="https://i.postimg.cc/YCH3jTqN/Nissan-X-Trail.png" alt="auto-img"/>
            <div className="basket-item__about">
                <div className="basket-item__about__car-name">
                    Nissan
                </div>
                <div className="basket-item__about__row">
                    Тип двигателя: Lorem ipsum dolor.
                </div>
                <div className="basket-item__about__row">
                    Вид топлива: Lorem ipsum dolor.
                </div>
                <div className="basket-item__about__row">
                    Объем: Lorem ipsum dolor.
                </div>
                <div className="basket-item__about__row">
                    Мощность: Lorem ipsum dolor.
                </div>
                <div className="basket-item__about__row">
                    КПП: Lorem ipsum dolor.
                </div>
                <div className="basket-item__about__row">
                    Цвет: Lorem ipsum dolor.
                </div>
                <div className="basket-item__about__row">
                    Салон: Lorem ipsum dolor.
                </div>
                <div className="basket-item__about__row">
                    Сумма: 6000$.
                </div>
            </div>

        </div>
    )
}
export default BasketItem;
