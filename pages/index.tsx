import React from "react";
import styles from "../styles/home.module.css";
import ArticleListWrapper from "../components/articleListWrapper";
import Footer from "../components/footer";
import Header from "../components/header";
import Filters from "../components/filters";
import { Manufacturer, Article } from '../types/types';

export interface PropsInterface {
    manufacturers: Manufacturer[];
    articles: Article[];
}

const Home: (props: PropsInterface) => JSX.Element = (props: PropsInterface) => {
    const [filters, setFilters] = React.useState<Manufacturer[]>(props.manufacturers);
    const [articles, setArticles] = React.useState<Article[]>([]);
    const [selectedManufacturers, setSelectedManufacturers] = React.useState<string[]>([]);

    React.useEffect(() => {
        const filterManufacturers = () => {
            const manufacturers = filters.filter((item) => item.isSelected).map((item) => item.name);
            setSelectedManufacturers(manufacturers);

            return manufacturers;
        };
        const filterArticles = () => {
            const manufacturers = filterManufacturers();
            let filteredArticles;
            if (manufacturers.length > 0) {
                filteredArticles = props.articles.filter((item) => manufacturers.includes(item.manufacturer));
            } else {
                filteredArticles = props.articles;
            }
            setArticles(filteredArticles);
        };
        filterArticles();
    }, [filters]);

    return (
        <div className={styles.container}>
            <Header/>
            <h3 className={styles.title}>Welcome to Guitar store!</h3>
            <div className={styles.row}>
                <Filters setFilters={setFilters} filters={filters} />
                <ArticleListWrapper
                    articles={articles}
                    selectedManufacturers={selectedManufacturers}
                    setFilters={setFilters}
                    filters={filters}
                />
            </div>
            <Footer/>
        </div>
    )
};

export default Home;

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/products.json');
    const data = await res.json();

    return {
        props: data
    }
};
