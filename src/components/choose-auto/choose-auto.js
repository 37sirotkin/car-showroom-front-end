import React, {useEffect, useState} from "react";
import "./choose-auto.scss";
import ChooseAutoItem from "./choose-auto-item";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../redux/actions/carActions";

const ChooseAuto = ({selectedMark}) => {
    const [allCars, setAllCars] = useState([]);
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars.cars);


    useEffect(async () => {
        await dispatch(getCars(selectedMark.mark_id));
        setAllCars(cars);
        console.log("all Cars: " + cars);
    }, []);




    return (
        <div className="choose-auto">
            <div className="main-title">
                <div className="main-title__mark-icon">
                    <img src="https://www.motortrend.com/uploads/makes/audi.png" alt="mark-logo"/>
                </div>
                <div className="main-title__mark-name">
                    {selectedMark.name}
                </div>
            </div>
            <div className="all-mark-cars">
                {allCars && allCars.map(car => <ChooseAutoItem/>)}
            </div>
        </div>
    )
}

export default ChooseAuto;
