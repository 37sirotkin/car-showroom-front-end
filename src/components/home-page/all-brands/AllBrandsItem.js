import React from "react";
import "./all-brands-item.scss";

const AllBrandsItem = ({ mark }) => {
    return (
        <div className="all-brands-item">
            {mark.id_mark}.{mark.name}
        </div>
    )
}

export default AllBrandsItem;