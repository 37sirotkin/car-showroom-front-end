import React, {useState} from "react";
import "./inspection-path.scss";
import smallPathImg from "./img/small-path.png";
import averagePathImg from "./img/average-path.png";
import bigPathImg from "./img/big-path.png";
import {Card} from 'antd';

const {Meta} = Card;


const InspectionPath = ({setSelectPath, selectPath}) => {
    return (
        <div className="test-drive-path">
            <h2 className="test-drive-path__title">Выберите маршрут тест-драйва</h2>
            <div className="test-drive-path__choose-path">
                <div onClick={() => setSelectPath(1)} className={`test-drive-path__choose-path__item ${selectPath === 1 ? "active-card" : ""}`}>
                    <Card
                        hoverable
                        style={{width: 340, height: 300}}
                        cover={<img alt="example" src={smallPathImg}/>}
                    >
                        <Meta title="Короткий маршрут"
                              description="Длина стандрартного маршрута тест-драйва 5км (15 минут)"/>
                    </Card>
                </div>
                <div onClick={() => setSelectPath(2)} className={`test-drive-path__choose-path__item ${selectPath === 2 ? "active-card" : ""}`}>
                    <Card
                        hoverable
                        style={{width: 340, height: 300}}
                        cover={<img alt="example" src={bigPathImg}/>}
                    >
                        <Meta title="Длинный маршрут"
                              description="Длина продленного маршрута скоростного тест-драйва 15км (25 минут)"/>
                    </Card>
                </div>
                <div onClick={() => setSelectPath(3)} className={`test-drive-path__choose-path__item ${selectPath === 3 ? "active-card" : ""}`}>
                    <Card
                        hoverable
                        style={{width: 340, height: 300}}
                        className="test-drive-path__choose-path__item"
                        cover={<img alt="example" src={bigPathImg}/>}
                    >
                        <Meta title="Внедорожный маршрут"
                              description="Длина внедорожного маршрута тест-драйва 8км (30 минут)"/>
                    </Card>
                </div>


            </div>

        </div>
    )
}

export default InspectionPath;
