import React from "react";
import { range } from "../../utils/utils";
import PaginationItem from "./PaginationItem";

const Pagination = ({ total, limit, url, currentPage }) => {
    const pageCount = Math.ceil(total / limit);
    const pages = range(1, pageCount);

    return (
        <ul className="pagination">
            {pages.map((page) => {
                return (
                    <PaginationItem
                        page={page}
                        currentPage={currentPage}
                        url={url}
                        key={page}
                    />
                );
            })}
        </ul>
    );
};

export default Pagination;
