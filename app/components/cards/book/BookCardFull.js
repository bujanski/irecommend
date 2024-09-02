import { getBooks } from "@/app/lib/data";
import styles from "./BookCardFull.module.css"
import Image from "next/image";

export default async function BookCardFull () {
    const book = await getBooks();
    console.log(book);

    return (
        <div id={styles.container}>
            <div id={styles.title}>Title</div>
            <div id="poster"><Image width="200" height="300" src="https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg"></Image></div>
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