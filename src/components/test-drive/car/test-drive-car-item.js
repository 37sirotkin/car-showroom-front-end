import React, { useState } from "react";
import "./test-drive-car-item.scss";
import { Card } from 'antd';

const { Meta } = Card;

const TestDriveCarItem = ({ img, mark, model, price, carId }) => {
    const [selectCar, setSelectCar] = useState(null);
    return (
        <div className="test-drive-car-item">


            <Card
                hoverable
                style={{ width: 350 }}
                onClick={() => setSelectCar(carId)}
                cover={<img className="test-drive-car-item__img" src={img} alt="img-car" />}
            >
                <Meta title={`${mark} ${model}`} description={price} />
            </Card>
        </div>

    );
};

export default TestDriveCarItem;