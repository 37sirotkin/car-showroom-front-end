import React from "react";
import "./main-chart.scss"
import MainChartRadarItem from "./main-chart-radar-item";



const MainChart = () => {


    return (

        <div className="main-chart">
            <div className="main-chart-column">
                <h2>Всего тест-драйвов проведено за 2021 год: </h2>
            </div>
            <div className="main-chart-column">
                <MainChartRadarItem/>
            </div>

        </div>
    )
}

export default MainChart;
