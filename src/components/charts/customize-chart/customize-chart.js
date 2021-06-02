import React, {useEffect, useState} from "react"
import "./customize-chart.scss";
import {Button, DatePicker, Select} from "antd";
import {Option} from "antd/es/mentions";
import {Bar} from "react-chartjs-2";
import {useDispatch, useSelector} from "react-redux";
import {getOrder} from "../../redux/actions/orderAction";
import {getMarks} from "../../redux/actions/markActions";
import {getCars} from "../../redux/actions/carActions";

const CustomizeChart = () => {

    const dispatch = useDispatch();
    const marks = useSelector(state => state.marks.marks)
    const orders = useSelector(state => state.order.order)
    const cars = useSelector(state => state.cars.cars)

    useEffect(() => {
        dispatch(getOrder())
        dispatch(getMarks())
        dispatch(getCars())
    }, [])

    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();
    const [selectMark, setSelectMark] = useState();
    const [allLabels, setLabels] = useState(null);
    const [allData, setAllData] = useState(null);

    const onChangeDateFrom = (value) => {
        setDateFrom(value.format("YYYY-MM-DD"))
        console.log("FROM: " + value.format("YYYY-MM-DD"))
    }
    const onChangeDateTo = value => {
        setDateTo(value.format("YYYY-MM-DD"))
        console.log("TO: " + value.format("YYYY-MM-DD"))
    }

    const data = [];


    const onChangeMark = (value) => {
        const markId = marks.filter(m => m.name == value)
        setSelectMark(markId[0].mark_id);
        console.log(markId[0].mark_id);
    }

    const buildChart = () => {
        // const sortDate = orders.sort((dateFrom, dateTo) => {
        //     return new Date(dateFrom) - new Date(dateTo)
        //     }
        // )
        const sortCars = cars.filter(c => c.markMarkId == selectMark);
        let label = [];
        sortCars.forEach(c => {
            orders.forEach(o => {
                if(c.id_car == o.id_car) {
                    if(label.find(l => l.label == c.model)){
                        return
                    } else {
                        label.push({
                            label: c.model,
                            value: dataValue(1,20)
                        });
                    }



                }
            })
        })
        const sortMark = sortCars.filter(c => c.id_car == orders.id_car);
        console.log(orders);
        // console.log(sortMark);

        // sortCars.forEach(m => {
        //     label.push(m.model)
        // })
        setLabels(label)
    }


    return (
        <div className="customize-chart">
            <div className="customize-chart__row">
                <div className="customize-chart__row__input-calendar">
                    <DatePicker onChange={onChangeDateFrom} className="customize-chart__row__input-calendar__item"/>
                </div>
                <div className="customize-chart__row__input-calendar">
                    <DatePicker onChange={onChangeDateTo} className="customize-chart__row__input-calendar__item"/>
                </div>
                <div className="customize-chart__row____input">
                    <Select defaultValue="По марке" style={{width: '120px'}}>
                        <Option value="По марке">По марке</Option>
                        <Option value="По тест-драйву">По тест-драйву</Option>
                        <Option value="По тест-драйву">По заказам</Option>
                        <Option value="По тест-драйву">По маршрутам</Option>
                    </Select>
                </div>
                <div className="customize-chart__row__input">
                    <Select onChange={onChangeMark} defaultValue="Aston Martin" style={{width: '120px'}}>
                        {marks.length && marks.map(m => <Option value={m.name}>{m.name}</Option>)}
                    </Select>
                </div>
            </div>
            <div className="customize-chart__row">
                <Button type="submit" onClick={() => {
                    buildChart();
                }} className="btn-main">Обновить</Button>
            </div>
            <div className="customize-chart__row">
                <div className="customize-chart__row__chart">
                    <Bar
                        type='pie'
                        width={400}
                        height={600}
                        data={{
                            labels: allLabels.map(l => l.label),
                            datasets: [{
                                label: 'Отчет по маркам',
                                data: allLabels.map(l => l.value),
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(54, 162, 235)',
                                    'rgb(255, 205, 86)'
                                ],
                                hoverOffset: 4
                            }]
                        }}
                    />
                </div>

            </div>


        </div>
    )

    function dataValue(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
}

export default CustomizeChart;

