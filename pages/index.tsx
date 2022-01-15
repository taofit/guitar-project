import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ArticleListWrapper from "../components/articleListWrapper";
import Footer from "../components/footer";
import Header from "../components/header";
import Filters from '../components/filters';
import React from "react";

type Image = {
    "type": string;
    "file": string;
    "width": string;
    "height": string;
    "exists": boolean;
}

type Price = {
    "primary": {
        "raw": string,
        "formatted": string,
    },
    "secondary": {
        "formatted": boolean
    },
    "currencyCode": string
}

type text = {
    "title": string,
    "subheadline": string,
    "cleanText": string,
    "features": string[],
    "featuresClean": string[]
}

export type Manufacturer = {
    name: string;
    count: string;
    isSelected: boolean;
    isManufacturer: boolean;
}

export type Article = {
    id: number;
    name: string;
    manufacturer: string;
    availability: object;
    rank: object;
    price: Price;
    isReorderable: boolean;
    rating: object;
    text: text;
    manufacturerData: object;
    image: Image;
}

export interface PropsInterface {
    manufacturers: Manufacturer[];
    articles: Article[];
}

const Home: (props: PropsInterface) => JSX.Element = (props: PropsInterface) => {
    const [filters, setFilters] = React.useState<Manufacturer[]>(props.manufacturers);
    const [articles, setArticles] = React.useState<Article[]>([]);
    const [selectedManufacturers, setSelectedManufacturers] = React.useState<string[]>([]);

    React.useEffect(() => {
        const manufacturers = filters.filter((item) => item.isSelected).map((item) => item.name);
        setSelectedManufacturers(manufacturers);
        let filteredArticles;
        if (manufacturers.length > 0) {
            filteredArticles = props.articles.filter((item) => manufacturers.includes(item.manufacturer));
        } else {
            filteredArticles = props.articles;
        }
        setArticles(filteredArticles);
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
}

export default Home;

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/products.json');
    const data = await res.json();

    return {
        props: data
    }
}
