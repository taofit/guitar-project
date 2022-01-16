import styles from "../styles/filter.module.css";
import {Manufacturer} from "../types/types";
import React from "react";
import {ChangeEvent} from "react";

interface ManufacturersListProps {
    filters: Manufacturer[];
    setFilters: (manufacturers: Manufacturer[]) => void;
}

const Filters: ({filters, setFilters}: ManufacturersListProps) => JSX.Element = ({filters, setFilters}) => {
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
            <h3>Filters</h3>
            <ul>
                {filters.map((item) => (
                    <li key={item.name} className={styles.li}>
                        <label>
                            <input type={"checkbox"} name={item.name} value={item.name} checked={item.isSelected} onChange={handleCheckBoxChecked} />
                            {item.name}
                        </label>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Filters;


