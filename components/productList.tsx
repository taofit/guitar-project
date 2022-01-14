import Image from 'next/image'
import styles from "../styles/Home.module.css";
import {Article} from "../pages";
import FilterSummary from "./filterSummary";

interface ProductListProps {
    articles: Article[],
    selectedManufacturers: string[];
}

const ProductList:React.FC<ProductListProps> = ({articles, selectedManufacturers}) => {
    const size = "300";
    return (
        <>
            <main className={`${styles.main} ${styles.columnRight}`}>
                <FilterSummary filters={selectedManufacturers} />
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

export default ProductList;

