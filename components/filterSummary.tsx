import styles from '../styles/filterSummary.module.css';

interface FilterSummaryProps {
    filters: string[];
}

const FilterSummary: React.FC<FilterSummaryProps> = ({filters}) => {
    return (
        <ul className={styles.ul}>
            {filters.map(item => (
                <li key={item} className={styles.li}>
                    {item}<span className={styles.close}>X</span>
                </li>
            ))}
        </ul>
    )
};

export default FilterSummary;
