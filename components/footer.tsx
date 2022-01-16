import styles from "../styles/Home.module.css";
import Image from 'next/image';

const Footer = () => (
    <footer className={styles.footer}>
        Powered by{' Guitar Store'}
        <span className={styles.logo}>
            <Image src="/guitar-Silhouette.svg" alt="Guitar Logo" width={72} height={16}/>
        </span>
    </footer>
);

export default Footer;
