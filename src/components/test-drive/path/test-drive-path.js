import React from "react";
import "./test-drive-path.scss";
import smallPathImg from "./img/small-path.png";
import averagePathImg from "./img/average-path.png";
import bigPathImg from "./img/big-path.png"

const TestDrivePath = () => {
    return (
        <div className="test-drive-path">
            <h2 className="test-drive-path__title">Выберите маршрут тест-драйва</h2>
            <div className="test-drive-path__choose-path">
                <div className="test-drive-path__path-item">
                    <img className="test-drive-path__path-item__img" src={smallPathImg} alt="path-img"/>
                    <div className="test-drive-path__path-item__name">
                        Короткий маршрут
                    </div>
                    <div className="test-drive-path__path-item__description">
                        Длина стандрартного маршрута тест-драйва 5км (15 минут)
                    </div>
                </div>
                <div className="test-drive-path__path-item">
                    <img className="test-drive-path__path-item__img" src={averagePathImg} alt="path-img"/>
                    <div className="test-drive-path__path-item__name">
                        Длинный маршрут
                    </div>
                    <div className="test-drive-path__path-item__description">
                        Длина продленного маршрута скоростного тест-драйва 15км (25 минут)
                    </div>
                </div>
                <div className="test-drive-path__path-item">
                    <img className="test-drive-path__path-item__img" src={bigPathImg} alt="path-img"/>
                    <div className="test-drive-path__path-item__name">
                        Внедорожный маршрут
                    </div>
                    <div className="test-drive-path__path-item__description">
                        Длина внедорожного маршрута тест-драйва 8км (30 минут)
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TestDrivePath;
