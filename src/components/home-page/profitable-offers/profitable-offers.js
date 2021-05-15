import React from "react";
import "./profitable-offers.scss";

const ProfitableOffers = ({img, carName, description}) => {
    return (
        <div className="profitable-offer-item">
            <img className="profitable-offer-item__img" src={img} alt="car-img"/>
            <div className="profitable-offer-item__car-name">{carName}</div>
            <div className="profitable-offer-item__description">{description}</div>
        </div>
    )
}

export default ProfitableOffers;