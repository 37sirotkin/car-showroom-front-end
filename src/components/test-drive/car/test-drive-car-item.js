import React, {useState} from "react";
import "./test-drive-car-item.scss";
import {Card} from 'antd';

const {Meta} = Card;

const TestDriveCarItem = ({img, mark, model, price, carId, setSelectCar, selected, setTabActiveKey}) => {


    return (
        <div onClick={() => {
            setSelectCar(carId);
            setTabActiveKey("2")
        }
        } className={`test-drive-car-item ${selected ? "active-card" : ''}`}>
            <Card
                hoverable
                style={{width: 350}}
                cover={<img className="test-drive-car-item__img" src={img} alt="img-car"/>}
            >
                <Meta title={`${mark} ${model}`} description={price}/>
            </Card>
        </div>

    );
};

export default TestDriveCarItem;