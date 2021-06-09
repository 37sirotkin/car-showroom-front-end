import React, {useEffect, useState} from "react";
import "./all-brands.scss"
import {useDispatch, useSelector} from "react-redux";
import {getMarks} from "../../redux/actions/markActions";
import AllBrandsItem from "./all-brands-item";
import {SearchOutlined} from "@ant-design/icons";
import {Input} from "antd";

const AllBrands = ({setSelectedMark}) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    useEffect(() => dispatch(getMarks()), []);
    const marks = useSelector(state => state.marks.marks);
    const groupedMarks = groupMarks(marks.filter(m => m.name.toLowerCase().indexOf(inputValue) !== -1), 4);
    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <div className="all-brands">
            <Input className="input-search" onChange={onChangeInput} placeholder="Введите марку автомобиля" prefix={<SearchOutlined/>}/>
            <div className="all-brands__columns">
                {groupedMarks.map(group => (
                    <div className="all-brands__column">
                        {group.map(mark => <AllBrandsItem setSelectedMark={setSelectedMark} mark={mark}/>)}
                    </div>
                ))}
            </div>

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
