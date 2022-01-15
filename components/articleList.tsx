import styles from "../styles/articleList.module.css";
import {Article} from "../pages";
import Image from "next/image";
import React from "react";

interface ArticleListProps {
    articlesInCurrentPage: Article[];
    size: string;
}

const ArticleList:React.FC<ArticleListProps> = ({articlesInCurrentPage, size}) => (
    <ul className={styles.grid}>
        {articlesInCurrentPage.map((item: Article) => (
            <li className={styles.card} key={item.id}>
                <Image src={`/images/${item.image.file}`} height={size} width={size} alt={item.name}/>
                <h2>{item.name}</h2>
                <p>{item.manufacturer}</p>
                <p>{item.price.primary.raw} {item.price.currencyCode}</p>
                <p>{item.text.cleanText}</p>
            </li>
        ))}
    </ul>
);

export default ArticleList;
