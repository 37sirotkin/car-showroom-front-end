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
                {marks.map(mark => mark.mark_id < 11 ? <AllBrandsItem mark={mark}/> : undefined)}
            </div>
            <div className="all-brands__column">
                {marks.map(mark => {
                    if (mark.mark_id > 11 && mark.mark_id < 21) {
                        return <AllBrandsItem mark={mark}/>
                    }
                })}
            </div>
            <div className="all-brands__column">
                {marks.map(mark => {
                    if (mark.mark_id > 21 && mark.mark_id < 31) {
                        return <AllBrandsItem mark={mark}/>
                    }
                })}
            </div>
            <div className="all-brands__column">
                {marks.map(mark => {
                    if (mark.mark_id > 31) {
                        return <AllBrandsItem mark={mark}/>
                    }
                })}
            </div>

        </div>
    )
}

export default AllBrands;
