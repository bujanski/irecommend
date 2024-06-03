"use client";

import React, { useState } from "react";
import styles from "./MovieEntry.module.css";

export default function MovieEntry() {
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        releaseYear: "",
        genres: "",
        writers: "",
        cast: "",
        runtime: "",
        rating: "",
        languages: "",
        iRecId: "",
        imdbId: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie({
            ...movie,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Movie Details:", movie);
        // Add logic to handle form submission, such as sending data to an API or updating state
    };

    return (
        <div id={styles.container}>
            <h1>Add a movie</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.entryLine}>
                    <label>Title: </label>
                    <input
                        type="text"
                        name="title"
                        value={movie.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.entryLine}>
                    <label>Director: </label>
                    <input
                        type="text"
                        name="director"
                        value={movie.director}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.entryLine}>
                    <label>Release Year: </label>
                    <input
                        type="number"
                        name="releaseYear"
                        value={movie.releaseYear}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.entryLine}>
                    <label>Genres: </label>
                    <input
                        type="text"
                        name="genres"
                        value={movie.genres}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.entryLine}>
                    <label>Writers: </label>
                    <input
                        type="text"
                        name="writers"
                        value={movie.writers}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.entryLine}>
                    <label>Cast: </label>
                    <input
                        type="text"
                        name="cast"
                        value={movie.cast}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.entryLine}>
                    <label>Runtime (in minutes): </label>
                    <input
                        type="number"
                        name="runtime"
                        value={movie.runtime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.entryLine}>
                    <label>MPAA Rating: </label>
                    <select
                        name="rating"
                        value={movie.rating}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Not rated</option>
                        <option value="">Select Rating</option>

                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">
                            PG-13
                        </option>
                        <option value="R">R</option>
                        <option value="NC-17">NC-17</option>
                    </select>
                </div>
                <div className={styles.entryLine}>
                    <label>Languages: </label>
                    <input
                        type="text"
                        name="languages"
                        value={movie.languages}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.entryLine}>
                    <label>IMDB ID: </label>
                    <input
                        type="text"
                        name="imdbId"
                        value={movie.imdbId}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
