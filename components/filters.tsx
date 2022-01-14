import styles from "../styles/Home.module.css";
import {Manufacturer} from "../pages";
import React from "react";
import {ChangeEvent} from "react";

interface ManufacturersListProps {
    filters: Manufacturer[];
    setFilters: (manufacturers: Manufacturer[]) => void;
}

const Filters:React.FC<ManufacturersListProps> = ({filters, setFilters}) => {
    const handleCheckBoxChecked = (event: ChangeEvent<HTMLInputElement>) => {
        filters.forEach((filter) => {
            if (filter.name === event.target.value) {
                filter.isSelected = event.target.checked;
            }
        });
        setFilters([...filters]);
    };

    return (
        <section className={`${styles.filters} ${styles.columnLeft}`}>
            <h3 className={styles.title}>Filters</h3>
            <ul>
                {filters.map((item) => (
                    <li key={item.name}><input type={"checkbox"} name={item.name} value={item.name} onChange={handleCheckBoxChecked}/>{item.name}</li>
                ))}
            </ul>
        </section>
    );
};
export default Filters;


