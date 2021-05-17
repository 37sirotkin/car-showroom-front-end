import React from "react";
import "./choose-auto-item.scss";
import {NavLink} from "react-router-dom";

const ChooseAutoItem = (mark, model, price) => {
    return (
        <NavLink to="/autoItem" className="choose-auto-item" >
            <img className="choose-auto-item__img-car" src="https://cutt.ly/5cOYMSo" alt="img-car"/>
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