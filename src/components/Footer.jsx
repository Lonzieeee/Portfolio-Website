import { ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (

        <footer className={styles.footer}>
            <p className={styles.copyright}> &copy; {new Date().getFullYear()} Lonzieee, All rights reserved. </p>

<a href="#hero" className={styles.scrollToTop}> <ArrowUp size={20}/></a>



        </footer>

    );
}