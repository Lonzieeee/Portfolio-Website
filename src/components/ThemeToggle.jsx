import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
             localStorage.setItem("theme", "light");
              setIsDarkMode(
                false);


        }

    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
             document.documentElement.classList.remove("dark");
             localStorage.setItem("theme", "light");

            setIsDarkMode(
                false);

        } else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");


             setIsDarkMode(true);



        }
    }


    return(
            <button onClick={toggleTheme} className={styles.themeToggle}>
               
                
                
                
                {isDarkMode ? <Sun className={styles.sunIcon}/>: <Moon className={styles.moonIcon}/>}</button>
    );
    
    

}