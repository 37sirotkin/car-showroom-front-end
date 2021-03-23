import React, {useEffect} from "react";
import "./all-brands.scss"
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../../redux/actions/carActions";

const AllBrands = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getCars()), []);
    const allCars = useSelector(state => state.cars.cars)
    const allBrands = allCars.map(car => car.mark)
    console.log(allBrands);
    return (
        <div className="all-brands">
            {allBrands.map(brand => <div>{brand}</div>)}
        </div>
    )
}

export default AllBrands;
