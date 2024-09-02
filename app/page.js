import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import ColorPalette from "./components/ColorPalette";
import MovieCardFull from "./components/cards/movie/MovieCardFull";
import MovieForm from "./components/dataEntry/MovieForm"
import BookCardFull from "./components/cards/book/BookCardFull";
import ScrapeOmdb from "./components/Scrape";

export default function Home() {
    return (
        <div id={styles.container}>
            <MovieCardFull />
            <MovieForm />
            <ScrapeOmdb />
        </div>
    );
}
