import React, {useEffect} from "react";
import "./all-brands-item.scss";
import {NavLink} from "react-router-dom";

const AllBrandsItem = ({ mark, setSelectedMark }) => {

    return (
        <div className="all-brands-item">
            <NavLink onClick={() => setSelectedMark(mark)}  to={`/allBrands?markId=${mark.mark_id}`}>{mark.mark_id}.{mark.name}</NavLink>
        </div>
    )
}

export default AllBrandsItem;