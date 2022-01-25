import styles from "../styles/articleList.module.css";
import {Article} from "../types/types";
import Image from "next/image";
import React from "react";

interface ArticleListProps {
    articlesInCurrentPage: Article[];
}

const ArticleList: ({articlesInCurrentPage}: ArticleListProps) => JSX.Element = ({articlesInCurrentPage}) => {
    const imageSize = "300";
    const getDescription = (cleanText: string) => {
        const descriptionLength = 200;
        let description = cleanText;
        description = description.length > descriptionLength ? description.substring(0, descriptionLength).concat('...') : description;

        return description;
    }

    return (
        <>
            {articlesInCurrentPage.length > 0 && (
                <ul className={styles.grid}>
                    {articlesInCurrentPage.map((item: Article) => {
                            const description = getDescription(item.text.cleanText);

                            return (
                                <li className={styles.card} key={item.id}>
                                    <Image src={`/images/${item.image.file}`} height={imageSize} width={imageSize} alt={item.name}/>
                                    <h3>{item.name}</h3>
                                    <p>{item.manufacturer}
                                        <Image src={`/images/${item.manufacturerData.image.file}`}
                                               width={item.manufacturerData.image.width}
                                               height={item.manufacturerData.image.height}
                                        />
                                    </p>
                                    <p>{item.price.primary.raw} {item.price.currencyCode}</p>
                                    <p>{description}</p>
                                </li>
                            );
                        }
                    )}
                </ul>
            )}
            {articlesInCurrentPage.length === 0 && <div>No Result</div>}
        </>
    )
};

export default ArticleList;
