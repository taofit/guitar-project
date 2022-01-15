import styles from '../styles/filterSummary.module.css';
import {Manufacturer} from "../pages";

interface FilterSummaryProps {
    filters: Manufacturer[];
    setFilters: (manufacturers: Manufacturer[]) => void;
    selectedManufacturers: string[];
}

const FilterSummary: React.FC<FilterSummaryProps> = ({filters, setFilters, selectedManufacturers}) => {
    const handleDeselectManufacturers = (manufacturer: string) => {
        const filteredManufacturers = selectedManufacturers.filter((item) => item !== manufacturer);
        filters.forEach((filter) => {
            if (filteredManufacturers.includes(filter.name)) {
                filter.isSelected = true;
            } else {
                filter.isSelected = false;
            }
        });
        setFilters([...filters]);
    };

    return (
        <ul className={styles.ul}>
            {selectedManufacturers.map(item => (
                <li key={item}>
                    {item}<span className={styles.close} onClick={() => handleDeselectManufacturers(item)}>X</span>
                </li>
            ))}
        </ul>
    )
};

export default FilterSummary;
