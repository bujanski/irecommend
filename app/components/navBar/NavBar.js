"use client";

import { useContext } from "react";
import styles from './NavBar.module.css'
import { appContext } from "@/app/AppContext";
import { categories } from "@/app/lib/categories";
import NavLink from "./navLink/NavLink";



export default function NavBar () {

    return (
        <div id={styles.container}>
            {Object.values(categories).map((category, index) => (
                    <NavLink link={category} key ={category.title}/>
                ))}
        </div>
    );
}