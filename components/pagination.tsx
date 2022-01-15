import styles from '../styles/pagination.module.css';
import React, {useEffect, useState} from "react";
import {Manufacturer} from "../pages";

interface PaginationProps {
    pageSize: number;
    totalArticles: number;
    filters: Manufacturer[];
    paginate: (page: number) => void;
}

const Pagination:React.FC<PaginationProps> = ({pageSize, totalArticles, paginate, filters}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalArticles / pageSize);
    const gotoPage = (crement: number) => {
        const nextPage = currentPage + crement;
        setCurrentPage(nextPage);
        paginate(nextPage);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [filters, pageSize]);

    if (totalPages <= 1) return null;

    return (
        <ul className={styles.ul}>
            {
                currentPage > 1 && <li onClick={() => gotoPage(-1)}>&lt; Prev</li>
            }
            <li className={styles.page}>{currentPage} of {totalPages}</li>
            {
                currentPage < totalPages && <li onClick={() => gotoPage(1)}>Next &gt;</li>
            }
        </ul>

    );
};

export default Pagination;
