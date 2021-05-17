import React, {useEffect, useState} from "react";
import "./test-drive-car.scss";
import {AutoComplete} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {getMarks} from "../../redux/actions/markActions";
import {getCars} from "../../redux/actions/carActions";
import TestDriveCarItem from "./test-drive-car-item";


const TestDriveCar = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getMarks()), []);
    useEffect(() => dispatch(getCars()), []);
    const marks = useSelector(state => state.marks.marks);
    const cars = useSelector(state => state.cars.cars);
    const [allViewCars, setViewCars] = useState([]);
    const [selectMark, setSelectMark] = useState(null);

    const options = [];
    marks.forEach(mark => {
        options.push({value: mark.name})
    });
    const markOnChange = (value) => {
        setSelectMark(value);
        const findMark = marks.find(mark => mark.name === value).mark_id;
        const selectedCars = cars.filter(car => car.markMarkId === findMark);
        setViewCars(selectedCars);
        console.log(selectedCars);
    }
debugger;

    return (
        <div className="test-drive-car">
            <div className="test-drive-car__input">
                <AutoComplete
                    className="test-drive-car__input__find-car"
                    placeholder="Audi"
                    options={options}
                    onSelect={markOnChange}
                />
                <SearchOutlined className="test-drive-car__input__icon"/>
            </div>
            {allViewCars.map(car => <TestDriveCarItem key={car.id_car} img={car.img} mark={selectMark} model={car.model} carId={car.id_car}/>)}
        </div>
    )
}

export default TestDriveCar;
