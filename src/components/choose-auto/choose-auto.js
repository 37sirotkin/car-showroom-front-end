import React from "react";
import "./choose-auto.scss";
import ChooseAutoItem from "./choose-auto-item";

const ChooseAuto = () => {
    return (
        <div className="choose-auto">
            <div className="main-title">
                <div className="main-title__mark-icon">
                    <img src="https://www.motortrend.com/uploads/makes/audi.png" alt="mark-logo"/>
                </div>
                <div className="main-title__mark-name">
                    Audi
                </div>
            </div>
            <div className="all-mark-cars">
                <ChooseAutoItem/>
                <ChooseAutoItem/>
                <ChooseAutoItem/>
            </div>
        </div>
    )
}

export default ChooseAuto;
