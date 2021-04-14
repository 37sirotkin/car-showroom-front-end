import React from "react";
import "./all-brands-item.scss";
import {NavLink} from "react-router-dom";

const AllBrandsItem = ({ mark }) => {
    return (
        <div className="all-brands-item">
            <NavLink to="/allBrands">{mark.id_mark}.{mark.name}</NavLink>
        </div>
    )
}

export default AllBrandsItem;