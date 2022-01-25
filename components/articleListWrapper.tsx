import styles from "../styles/home.module.css";
import {Article, Manufacturer} from "../types/types";
import FilterSummary from "./filterSummary";
import React, {useEffect, useState} from "react";
import Pagination from "./pagination";
import PageSize from "./pageSize";
import ArticleList from "./articleList";

interface ArticleListProps {
    articles: Article[],
    selectedManufacturers: string[];
    filters: Manufacturer[];
    setFilters: (manufacturers: Manufacturer[]) => void;
}
export const sizeOptions = [12, 20, 50, 100];
export const firstPage = 1;

const ArticleListWrapper: ({articles, selectedManufacturers, filters, setFilters}: ArticleListProps) => JSX.Element
    = ({articles, filters, setFilters, selectedManufacturers}) => {
    const [articlesInCurrentPage, setArticlesInCurrentPage] = useState<Article[]>([]);
    const [pageSize, setPageSize] = useState<number>(sizeOptions[0]);

    const paginate = (pageNumber: number) => {
        const startPage = (pageNumber - 1) * pageSize;
        const endPage = pageNumber * pageSize;
        const articlesInCurrPage = articles.slice(startPage, endPage);
        setArticlesInCurrentPage(articlesInCurrPage);
    }

    useEffect(() => {
        paginate(firstPage);
    }, [selectedManufacturers, pageSize]);

    return (
        <main className={`${styles.main} ${styles.columnRight}`}>
            <FilterSummary selectedManufacturers={selectedManufacturers} filters={filters} setFilters={setFilters}/>
            <ArticleList articlesInCurrentPage={articlesInCurrentPage} />
            <Pagination pageSize={pageSize} totalArticles={articles.length} paginate={paginate} filters={filters}/>
            <PageSize pageSize={pageSize} setPageSize={setPageSize}/>
        </main>
    );
};

export default ArticleListWrapper;

