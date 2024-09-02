"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Hamburger from "./Hamburger";
import NavBar from "./navBar/NavBar";
import { AppContextProvider } from "../AppContext";

export default function Header() {
    return (
        <div id={styles.container}>
            <div id={styles.row1}>
                <div id={styles.hamburger}>
                    <Hamburger />
                </div>

                <div id={styles.iRecommend}>
                    <Link href="/">iRecommend</Link>
                </div>
                <div id={styles.account}>sign in</div>
            </div>
            <div id={styles.row2}>
                find your favorites. share your favorites.
            </div>
            <NavBar />
        </div>
    );
}
