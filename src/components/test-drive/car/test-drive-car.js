import React, {useEffect} from "react";
import "./test-drive-car.scss";
import {AutoComplete} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {getMarks} from "../../redux/actions/markActions";


const TestDriveCar = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getMarks()), []);
    const marks = useSelector(state => state.marks.marks);

    const options = [];
    marks.forEach(mark => {
        options.push({value: mark.name})
    });
    console.log(options);

    return (
        <div className="test-drive-car">
            <div className="test-drive-car__input">
                <AutoComplete
                    className="test-drive-car__input__find-car"
                    placeholder="Audi"
                    options={options}
                />
                <SearchOutlined className="test-drive-car__input__icon"/>
            </div>
            <img className="test-drive-car__img-car" src="https://cutt.ly/5cOYMSo" alt="img-car"/>
        </div>
    )
}

export default TestDriveCar;
