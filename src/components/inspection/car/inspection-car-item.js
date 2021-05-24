import React, { useState } from "react";
import "./inspection-car-item.scss";
import { Card } from 'antd';

const { Meta } = Card;

const InspectionCarItem = ({ img, mark, model, price, carId, setSelectCar, selected }) => {


    return (
        <div onClick={() => setSelectCar(carId)} className={`test-drive-car-item ${selected ? "active-card" : ''}`}>
            <Card
                hoverable
                style={{ width: 350 }}
                cover={<img className="test-drive-car-item__img" src={img} alt="img-car" />}
            >
                <Meta title={`${mark} ${model}`} description={price}/>
            </Card>
        </div>

    );
};

export default InspectionCarItem;