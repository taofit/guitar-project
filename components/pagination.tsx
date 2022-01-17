import styles from "../styles/pagination.module.css";
import React, {useEffect, useState} from "react";
import {Manufacturer} from "../types/types";
import {firstPage} from "./articleListWrapper";

interface PaginationProps {
    pageSize: number;
    totalArticles: number;
    filters: Manufacturer[];
    paginate: (page: number) => void;
}

const Pagination: ({pageSize, totalArticles, filters, paginate}: PaginationProps) => JSX.Element
    = ({pageSize, totalArticles, paginate, filters}) => {
    const onePage = 1;
    const [currentPage, setCurrentPage] = useState(firstPage);
    const totalPages = Math.ceil(totalArticles / pageSize);
    const gotoPage = (crement: number) => {
        const newPage = currentPage + crement;
        setCurrentPage(newPage);
        paginate(newPage);
    };

    useEffect(() => {
        setCurrentPage(firstPage);
    }, [filters, pageSize]);

    if (totalPages <= firstPage) return <></>;

    return (
        <ul className={styles.ul}>
            {
                currentPage > firstPage && <li onClick={() => gotoPage(-onePage)}>&lt; Prev</li>
            }
            <li className={styles.page}>{currentPage} of {totalPages}</li>
            {
                currentPage < totalPages && <li onClick={() => gotoPage(onePage)}>Next &gt;</li>
            }
        </ul>

    );
};

export default Pagination;
