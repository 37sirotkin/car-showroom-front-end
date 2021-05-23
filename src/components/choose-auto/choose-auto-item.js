import React from "react";
import "./choose-auto-item.scss";
import {NavLink} from "react-router-dom";

const ChooseAutoItem = ({car}) => {
    const {id_car, mark, model, price, img} = car;
    return (
        <NavLink to={`/autos/${id_car}`} className="choose-auto-item" >
            <img className="choose-auto-item__img-car" src={img} alt="img-car"/>
            <span className="choose-auto-item__car-name">
                {mark} {model}
            </span>
            <span className="choose-auto-item__car-description">
                от {price} рублей
            </span>
        </NavLink>
    )
}

export default ChooseAutoItem;