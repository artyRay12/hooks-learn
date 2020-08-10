import React from "react";
import { Link } from "react-router-dom";

const PaginationItem = ({ page, currentPage, url }) => {
    return (
        <li
            key={page}
            className={`page-item ${currentPage === page && "active"}`}
        >
            <Link to={`${url}?page=${page}`} className="page-link">
                {page}
            </Link>
        </li>
    );
};

export default PaginationItem;
