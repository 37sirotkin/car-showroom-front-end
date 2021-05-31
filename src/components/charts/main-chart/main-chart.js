import React, {useEffect} from "react";
import "./main-chart.scss"
import MainChartRadarItem from "./main-chart-radar-item";
import {useDispatch, useSelector} from "react-redux";
import {getTestDrive} from "../../redux/actions/testDriveAction";
import {getOrder} from "../../redux/actions/orderAction";



const MainChart = () => {

    const dispatch = useDispatch();
    const testDrives = useSelector(state => state.testDrive.testDrive);
    const orders = useSelector(state => state.order.order);
    let ordersSum = 0;
    orders && orders.forEach(order => {
        ordersSum = order.price + ordersSum;
    })

        useEffect(() => {
        dispatch(getTestDrive())
        dispatch(getOrder())
    },[])



    return (

        <div className="main-chart">
            <div className="main-chart__column">
                <h2>Всего тест-драйвов проведено за 2021 год:
                    <div className="number-report">{110}</div>
                </h2>
                <h2>Всего автомобилей продано за 2021 год:
                    <div className="number-report">43</div>
                </h2>
                <h2>Общая сумма продаж:
                    <div className="number-report">434000 рублей</div>
                </h2>
            </div>
            <div className="main-chart__column">
                <MainChartRadarItem/>
            </div>

        </div>
    )
}

export default MainChart;
