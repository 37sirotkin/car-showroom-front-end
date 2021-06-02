import React, {useEffect} from "react";
import "./all-cars.scss";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../redux/actions/carActions";
import AllBrandsItem from "../home-page/all-brands/AllBrandsItem";
import {getMarks} from "../redux/actions/markActions";

const AllCars = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCars())
        dispatch(getMarks())
    },[])
    const cars = useSelector(state => state.cars.cars);
    const marks = useSelector(state => state.marks.marks);

    const groupCars = (cars, columnsCount) => {
        const groupSize =  Math.ceil(cars.length / columnsCount);

        let group = [];
        const groups = [group];
        for (const car of cars) {
            group.push(car);
            if (group.length === groupSize) {
                group = [];
                groups.push(group);
            }
        }
        return groups;
    };
    const groupedCars = groupCars(cars, 14);
    const currentModelName = (car) => {
        return marks.length && marks.find(m => m.mark_id == car.id_mark).name
    };

    return (
        <div className="all-cars">
            <div className="all-cars__title">ВСЕ АВТОМОБИЛИ</div>
            {groupedCars.map(group => (
                <div className="all-cars__column">
                    {group.map(car => (
                        <div className="all-cars__column__item">
                            <img className="all-cars__column__item__img" src={car.img} alt=""/>
                            <div className="all-cars__column__item__title">{currentModelName} {car.model}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )



}

export default AllCars;