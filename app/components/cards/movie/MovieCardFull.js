import { getMovies } from "@/app/lib/data";
import styles from "./MovieCardFull.module.css"
import Image from "next/image";

export default async function MovieCardFull (movie) {
    const movies = await getMovies();
    console.log(movies);

    return (
        <div id={styles.container}>
            <div id={styles.title}>{movies[0].title} | {movies[0].id}</div>
            <div id="poster"><Image width="200" height="300" src="https://images.pexels.com/photos/7991314/pexels-photo-7991314.jpeg"></Image></div>
            <div>year</div>
            <div>director</div>
            <div>screenwriter</div>
            <div>cast</div>
            <div>country</div>
            <div>language</div>
            <div>run time</div>
            <div>genre</div>
            <div>age rating</div>
            <div>purchase</div>
            <div>stream</div>
            <div>full details | imdb | tmdb</div>
        </div>
    );
}