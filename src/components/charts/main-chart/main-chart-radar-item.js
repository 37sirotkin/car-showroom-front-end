import React, {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import {useDispatch, useSelector} from "react-redux";
import {getOrder} from "../../redux/actions/orderAction";
import {getCars} from "../../redux/actions/carActions";
import {getMarks} from "../../redux/actions/markActions";

const MainChartRadarItem = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.order);
    const cars = useSelector(state => state.cars.cars);
    const marks = useSelector(state => state.marks.marks);
    const allCarsLabel = [];



    orders.length && cars.length && marks.length && orders.forEach(order => {
        const currentCar = cars.find(car => order.id_car == car.id_car);
        const countCars = orders.filter(order => order.id_car == currentCar.id_car);
        const currentMark = marks.find(mark => mark.mark_id == currentCar.markMarkId);
        const obj = {
            str: `${currentMark.name} ${currentCar.model}`,
            count: countCars.length
        }
        allCarsLabel.push(obj)
    })

    const labels = ["A4", "A5", "A6", "Q3", "RS 5", "RS 7"]
    const data = ["22","12", "4", "6", "3", "2"];




    useEffect(() => {
        dispatch(getOrder())
        dispatch(getCars())
        dispatch(getMarks())
    }, [])

    return (
        <div className="main-chart-radar-item">
            <Bar
                type='bar'
                width={400}
                height={600}
                data={{
                    labels: ['BMW 8 серия Coupe', 'Chevrolet Malibu', 'Chrysler 300 Sedan', 'Hyundai Tucson',
                        "Jaguar XE", "Lexus LC 500","Mitsubishi ASX", "Porsche Cayenne","Renault Megane RS","Tesla model S Plaid"],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    datasets: [{
                        label: 'ТОП 10 ПРОДАЖ АВТО',
                        data: [12,34,12,8,14,2,10,34,12,5,26,11],

                        borderWidth: 1
                    }]
                    ,
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
                }
            />
        </div>
    )
}

export default MainChartRadarItem;