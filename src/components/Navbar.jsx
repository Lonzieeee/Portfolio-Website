import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
    {name: "Home", href: "#hero"},
     {name: "About", href: "#about"},
      {name: "Skills", href: "#skills"},
       {name: "Projects", href: "#projects"},
        {name: "Contact", href: "#contact"},
];



export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

const [isMenuOpen, setIsMenuOpen] = useState(false);




useEffect (() => {

    const handleScroll = () => {
        setIsScrolled(window.screenY > 10)

    }
    window.addEventListener("scroll", handleScroll)

    return() =>  window.removeEventListener("scroll", handleScroll)

}, []
)


    return <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : styles.notScrolled}`}>

<div className={styles.container}>

<a className={styles.logo} href="#hero">
   <span className={styles.logoText}>
    <span className={styles.logoName}> Lorna </span> Portfolio
    </span> 
</a>

{/* Desktop */}

<div className={styles.desktopNav}>
    {navItems.map((item, key) =>(
        <a key = {key} href={item.href} className={styles.navLink}>{item.name}</a>

    )
)}
</div>

{/* mobile */}


<button onClick={() => setIsMenuOpen((prev) => !prev)} className={styles.menuButton} aria-label={isMenuOpen ? "Close Menu": "Open Menu"}>  {isMenuOpen ? <X size={24}/> : <Menu size={24} />} </button>




<div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : styles.closed}`}>

<div className={styles.mobileNavList}>
    {navItems.map((item, key) =>(
        <a key = {key} href={item.href} className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>{item.name}</a>

    )
)}
</div>

</div>


</div>

    </nav>;

}