import React, {useEffect} from "react";
import "./all-brands.scss"
import {useDispatch, useSelector} from "react-redux";
import {getMarks} from "../../redux/actions/markActions";
import AllBrandsItem from "./AllBrandsItem";

const AllBrands = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getMarks()), []);
    const marks = useSelector(state => state.marks.marks)
    return (
        <div className="all-brands">
            <div className="all-brands__column">
                {marks.map(mark => <AllBrandsItem mark={mark}/>)}
            </div>
            <div className="all-brands__column">

            </div>
            <div className="all-brands__column">

            </div>

        </div>
    )
}

export default AllBrands;
