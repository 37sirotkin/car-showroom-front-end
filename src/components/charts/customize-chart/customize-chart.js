import React, {useEffect, useState} from "react"
import "./customize-chart.scss";
import {Button, DatePicker, Select} from "antd";
import {Option} from "antd/es/mentions";
import {Bar} from "react-chartjs-2";
import {useDispatch, useSelector} from "react-redux";
import {getOrder} from "../../redux/actions/orderAction";
import {getMarks} from "../../redux/actions/markActions";
import {getCars} from "../../redux/actions/carActions";

const testFilter = (chartFilter, order) => {
    return (!chartFilter.dateFrom || new Date(chartFilter.dateFrom) <= new Date(order.date_of_order))
        && (!chartFilter.dateTo || new Date(chartFilter.dateTo) >= new Date(order.date_of_order));
}

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

    const [chartFilter, setChartFilter] = useState({});

    const onChangeDateFrom = value => {
        chartFilter.dateFrom = value && value.format("YYYY-MM-DD");
        setChartFilter({...chartFilter});
    }
    const onChangeDateTo = value => {
        chartFilter.dateTo = value && value.format("YYYY-MM-DD");
        setChartFilter({...chartFilter});
    }

    const onChangeMark = markId => {
        chartFilter.markId = markId;
        setChartFilter({...chartFilter});
    }

    const buildChart = (chartFilter) => {
        const sortCars = chartFilter.markId 
            ? cars.filter(c => c.markMarkId == chartFilter.markId)
            : cars;

        let labels = {};
        sortCars.forEach(c => {
            orders.forEach(o => {
                if(c.id_car == o.id_car && testFilter(chartFilter, o)) {
                    let label = labels[c.model];
                    if (!label) {
                        label = {
                            label: c.model,
                            value: 0
                        };
                        labels[c.model] = label;
                    }
                    label.value++;
                }
            })
        })
        return Object.values(labels);
    }

    debugger;
    const data = buildChart(chartFilter);


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
                    <Select onChange={onChangeMark} style={{width: '120px'}}>
                        {marks.length && marks.map(m => <Option value={m.mark_id}>{m.name}</Option>)}
                    </Select>
                </div>
            </div>

            <div className="customize-chart__row">
                <div className="customize-chart__row__chart">
                    <Bar
                        type='pie'
                        width={400}
                        height={600}
                        data={{
                            labels: data.map(l => l.label),
                            datasets: [{
                                label: 'Отчет по маркам',
                                data: data.map(l => l.value),
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

