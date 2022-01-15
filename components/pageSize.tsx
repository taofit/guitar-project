import styles from "../styles/pageSize.module.css";
import {sizeOptions} from "./articleListWrapper";
import React from "react";

interface PageSizeProps {
    pageSize: number;
    setPageSize: (size: number) => void;
}

const PageSize:React.FC<PageSizeProps> = ({pageSize, setPageSize}) => {
    const handleSizeChange = (size: string) => {
        setPageSize(Number.parseInt(size));
    }

    return (
        <div className={styles.pageSizeWrapper}>
            <span>Show</span>
            <select className={styles.pageSize} value={pageSize} onChange={({ target: { value } }) => handleSizeChange(value)}>
                {sizeOptions.map((option) => (
                    <option value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <span>products per page</span>
        </div>
    )
};

export default PageSize;
