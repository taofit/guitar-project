import Image from 'next/image'
import styles from "../styles/Home.module.css";
import {Article, Manufacturer} from "../pages";
import FilterSummary from "./filterSummary";
import React from "react";

interface ArticleListProps {
    articles: Article[],
    selectedManufacturers: string[];
    filters: Manufacturer[];
    setFilters: (manufacturers: Manufacturer[]) => void;
}

const ArticleList:React.FC<ArticleListProps> = ({articles, filters, setFilters, selectedManufacturers}) => {
    const size = "300";

    return (
        <>
            <main className={`${styles.main} ${styles.columnRight}`}>
                <FilterSummary selectedManufacturers={selectedManufacturers} filters={filters} setFilters={setFilters} />
                <ul className={styles.grid}>
                    {articles.map((item: Article) => (
                        <li className={styles.li} key={item.id}>
                            <Image src={`/images/${item.image.file}`} height={size} width={size} alt={item.name}/>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
};

export default ArticleList;

