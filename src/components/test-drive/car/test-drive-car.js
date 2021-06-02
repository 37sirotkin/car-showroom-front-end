import React, {useEffect, useState} from "react";
import "./test-drive-car.scss";
import {AutoComplete} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {getMarks} from "../../redux/actions/markActions";
import {getCars} from "../../redux/actions/carActions";
import TestDriveCarItem from "./test-drive-car-item";


const TestDriveCar = ({setSelectCar, selectCar, setTabActiveKey}) => {
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

    }
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
            <div className="test-drive-car__items">
                <div className="test-drive-car__items__row">
                    {
                        allViewCars.slice(0, 3).map((car, index) =>
                            <TestDriveCarItem key={index} img={car.img}
                                              mark={selectMark}
                                              model={car.model}
                                              carId={car.id_car}
                                              setSelectCar={setSelectCar}
                                              selected={car.id_car === selectCar}
                                              setTabActiveKey={setTabActiveKey}/>)

                    }
                </div>
                <div className="test-drive-car__items__row">
                    {
                        allViewCars.slice(3, 6).map(car =>
                            <TestDriveCarItem key={car.id_car} img={car.img}
                                              mark={selectMark} model={car.model}
                                              carId={car.id_car}
                                              setSelectCar={setSelectCar}
                                              selected={car.id_car === selectCar}/>)
                    }
                </div>
                <div className="test-drive-car__items__row">
                    {
                        allViewCars.slice(6, 9).map(car =>
                            <TestDriveCarItem key={car.id_car} img={car.img}
                                              mark={selectMark} model={car.model}
                                              carId={car.id_car}
                                              setSelectCar={setSelectCar}
                                              selected={car.id_car === selectCar}/>)
                    }
                </div>
                <div className="test-drive-car__items__row">
                    {
                        allViewCars.slice(9, 12).map(car =>
                            <TestDriveCarItem key={car.id_car} img={car.img}
                                              mark={selectMark} model={car.model}
                                              carId={car.id_car}
                                              setSelectCar={setSelectCar}
                                              selected={car.id_car === selectCar}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default TestDriveCar;
