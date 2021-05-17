import React, { useState } from "react";
import "./test-drive-path.scss";
import smallPathImg from "./img/small-path.png";
import averagePathImg from "./img/average-path.png";
import bigPathImg from "./img/big-path.png";
import { Card } from 'antd';
const { Meta } = Card;


const TestDrivePath = () => {

    const [selectPath, setSelectPath] = useState(null);

    return (
        <div className="test-drive-path">
            <h2 className="test-drive-path__title">Выберите маршрут тест-драйва</h2>
            <div className="test-drive-path__choose-path">
            <div className="test-drive-path__choose-path__item">    
                <Card
                    onClick={() => setSelectPath(1)}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={smallPathImg} />}
                >
                    <Meta title="Короткий маршрут" description="Длина стандрартного маршрута тест-драйва 5км (15 минут)" />
                </Card>
            </div>
            <div className="test-drive-path__choose-path__item">
                <Card
                    hoverable
                    onClick={() => setSelectPath(2)}
                    style={{ width: 240 }}
                    className="test-drive-path__choose-path__item"
                    cover={<img alt="example" src={bigPathImg} />}
                >
                    <Meta title="Длинный маршрут" description="Длина продленного маршрута скоростного тест-драйва 15км (25 минут)" />
                </Card>
            </div>
            <div className="test-drive-path__choose-path__item">
                <Card
                    hoverable
                    onClick={() => setSelectPath(3)}
                    style={{ width: 240 }}
                    className="test-drive-path__choose-path__item"
                    cover={<img alt="example" src={bigPathImg} />}
                >
                    <Meta title="Внедорожный маршрут" description="Длина внедорожного маршрута тест-драйва 8км (30 минут)" />
                </Card>
            </div>


        </div>

        </div >
    )
}

export default TestDrivePath;
