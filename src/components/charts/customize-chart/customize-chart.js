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
    const labels = ["A4", "A5", "A6", "Q3", "RS 5", "RS 7"]
    const allData1 = ["22","12", "4", "6", "3", "2"];

    const onChangeDateFrom = (value) => {
        setDateFrom(value.format("YYYY-MM-DD"))
        console.log("FROM: " + value.format("YYYY-MM-DD"))
    }
    const onChangeDateTo = value => {
        setDateTo(value.format("YYYY-MM-DD"))
        console.log("TO: " + value.format("YYYY-MM-DD"))
    }

    const data = [];
    const label = [];

    const onChangeMark = (value) => {
        const markId = marks.filter(m => m.name == value)
        setSelectMark(markId.mark_id);
        console.log(value);
    }

    const buildChart = () => {
        const sortDate = orders.sort((dateFrom, dateTo) => {
            return new Date(dateFrom) - new Date(dateTo)
            }
        )
        const sortCars = cars.filter(c => c.markMarkId == selectMark)
        const sortMark = sortDate.filter(o => o.id_car == sortCars.id_car);
        sortMark.forEach(m => {
            label.push(m.model)
        })



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
                <Button onClick={() => {
                    setLabels(labels);
                    setAllData(allData1);
                }} className="btn-main">Обновить</Button>
            </div>
            <div className="customize-chart__row">
                <div className="customize-chart__row__chart">
                    <Bar
                        type='pie'
                        width={400}
                        height={600}
                        data={{
                            labels: allLabels,
                            datasets: [{
                                label: 'Отчет по маркам',
                                data: allData,
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
}

export default CustomizeChart;

