import React from "react";
import "./choose-auto-item.scss";
import {NavLink} from "react-router-dom";

const ChooseAutoItem = () => {
    return (
        <NavLink to="/autoItem" className="choose-auto-item" >
            <img className="choose-auto-item__img-car" src="https://cutt.ly/5cOYMSo" alt="img-car"/>
            <span className="choose-auto-item__car-name">
                Audi A6
            </span>
            <span className="choose-auto-item__car-description">
                12 авто от 34000$
            </span>
        </NavLink>
    )
}

export default ChooseAutoItem;