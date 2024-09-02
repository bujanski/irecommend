"use client";

import { useState } from "react";
import styles from "./Hamburger.module.css";
import { categories } from "../lib/categories";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <button className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? "✖" : "☰"}
            </button>
            <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
                <div className={styles.iRecommend}>iRecommend</div>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                </div>
                {Object.values(categories).map((category, index) => (
                    <div key={index} className={styles.menuItem}>
                        <a href={category.url} className={styles.menuLink}>
                            {category.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hamburger;
