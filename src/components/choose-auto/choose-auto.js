import React, {useEffect, useState} from "react";
import "./choose-auto.scss";
import ChooseAutoItem from "./choose-auto-item";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../redux/actions/carActions";
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';
import {getMarks} from "../redux/actions/markActions";


const ChooseAuto = ({selectedMark}) => {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars.cars);
    const marks = useSelector(state => state.marks.marks)

    const {search} = useLocation();
    const values = queryString.parse(search);

    useEffect(async () => {
        await dispatch(getCars(values.markId));
    }, []);

    useEffect(() => dispatch(getMarks()), []);
    return (
        <div className="choose-auto">
            <div className="main-title">
                <div className="main-title__mark-icon">
                    {/*<img src="#" alt="mark-logo"/>*/}
                </div>
                <div className="main-title__mark-name">
                    {marks.length && marks.find(mark => mark.mark_id == values.markId).name}
                </div>
            </div>
            <div className="all-mark-cars">
                <div className="all-mark-cars__row">
                    {cars.slice(0, 3).map(car => {
                        return <ChooseAutoItem car={car}/>
                    })}
                </div>
                <div className="all-mark-cars__row">
                    {cars.slice(3, 6).map(car => {
                        return <ChooseAutoItem car={car}/>
                    })}
                </div>
                <div className="all-mark-cars__row">
                    {cars.slice(6, 9).map(car => {
                        return <ChooseAutoItem car={car}/>
                    })}
                </div>
                <div className="all-mark-cars__row">
                    {cars.slice(9, 12).map(car => {
                        return <ChooseAutoItem car={car}/>
                    })}
                </div>

            </div>
        </div>
    )
}

export default ChooseAuto;
