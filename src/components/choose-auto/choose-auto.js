import React, {useEffect, useState} from "react";
import "./choose-auto.scss";
import ChooseAutoItem from "./choose-auto-item";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../redux/actions/carActions";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


const ChooseAuto = ({selectedMark}) => {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars.cars);

    const { search } = useLocation();
    const values = queryString.parse(search);

    useEffect(() => {
        dispatch(getCars(values.markId));
    }, []);




    return (
        <div className="choose-auto">
            <div className="main-title">
                <div className="main-title__mark-icon">
                    <img src="https://www.motortrend.com/uploads/makes/audi.png" alt="mark-logo"/>
                </div>
                <div className="main-title__mark-name">
                    {selectedMark && selectedMark.name}
                </div>
            </div>
            <div className="all-mark-cars">
                {cars && cars.map(car => <ChooseAutoItem car={car}/>)}
            </div>
        </div>
    )
}

export default ChooseAuto;
