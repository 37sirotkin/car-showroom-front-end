import React, {useEffect} from "react";
import "./all-brands.scss"
import {useDispatch, useSelector} from "react-redux";
import {getMarks} from "../../redux/actions/markActions";
import AllBrandsItem from "./AllBrandsItem";

const AllBrands = ({setSelectedMark}) => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getMarks()), []);
    const marks = useSelector(state => state.marks.marks);
    const groupedMarks = groupMarks(marks.filter(m => m.name.toLowerCase().indexOf('') !== -1), 5);
    return (
        <div className="all-brands">
            {groupedMarks.map(group => (
                <div className="all-brands__column">
                    {group.map(mark => <AllBrandsItem setSelectedMark={setSelectedMark} mark={mark}/>)}
                </div> 
            ))}            
        </div>
    )
}

const groupMarks = (marks, columnsCount) => {
    const groupSize =  Math.ceil(marks.length / columnsCount);
   
    let group = [];
    const groups = [group];
    for (const mark of marks) {
        group.push(mark);
        if (group.length === groupSize) {
            group = [];
            groups.push(group);
        }
    }
    return groups;
};

export default AllBrands;
