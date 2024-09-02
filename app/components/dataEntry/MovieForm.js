"use client";
import React, { useState } from "react";
import styles from "./MovieForm.module.css";

export default function MovieForm({ initialMovie, onSubmit }) {
    const [movie, setMovie] = useState(
        initialMovie || {
            title: "",
            directors: [],
            producers: [],
            screenwriters: [],
            cast: [],
            cinematographers: [],
            editor: "",
            composer: "",
            releaseDate: "",
            productionCompanies: [],
            countryOfOrigin: "",
            languages: [],
            runTime: "",
            genres: [],
            ageRatings: [],
            keywords: [],
            synopsis: "",
            color: "",
            imdbId: "",
            tmdbId: "",
            website: "",
            streamPlatforms: [],
            awards: [],
            budget: 0,
            boxOffice: 0,
            posterURL: "",
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie({
            ...movie,
            [name]: value,
        });
    };

    const handleArrayChange = (e, field) => {
        const { value } = e.target;
        setMovie({
            ...movie,
            [field]: value.split(",").map((item) => item.trim()),
        });
    };

    const handleCastChange = (index, field, value) => {
        const newCast = [...movie.cast];
        newCast[index][field] = value;
        setMovie({ ...movie, cast: newCast });
    };

    const handleAwardChange = (index, field, value) => {
        const newAwards = [...movie.awards];
        newAwards[index][field] = value;
        setMovie({ ...movie, awards: newAwards });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(movie);
    };

    return (
        <form onSubmit={handleSubmit} id={styles.movie_form}>
            <div className={styles.input_text}>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={movie.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.input_text}>
                <label>Directors</label>
                <input
                    type="text"
                    value={movie.directors.join(", ")}
                    onChange={(e) => handleArrayChange(e, "directors")}
                />
            </div>
            <div className={styles.input_text}>
                <label>Screen Writers</label>
                <input
                    type="text"
                    value={movie.screenwriters.join(", ")}
                    onChange={(e) => handleArrayChange(e, "directors")}
                />
            </div>
            {/* Add similar fields for producers, screenwriters, cinematographers, languages, genres, ageRatings, keywords, streamPlatforms */}
            <div className={styles.input_text}>
                <label>Cast</label>
                {movie.cast.map((castMember, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={castMember.actor}
                            onChange={(e) =>
                                handleCastChange(index, "actor", e.target.value)
                            }
                            placeholder="Actor"
                            required
                        />
                        <input
                            type="text"
                            value={castMember.role}
                            onChange={(e) =>
                                handleCastChange(index, "role", e.target.value)
                            }
                            placeholder="Role"
                            required
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() =>
                        setMovie({
                            ...movie,
                            cast: [...movie.cast, { actor: "", role: "" }],
                        })
                    }
                >
                    Add Cast Member
                </button>
            </div>
            <div className={styles.input_text}>
                <label>Cinematographers</label>
                <input
                    type="text"
                    value={movie.cinematographers.join(", ")}
                    onChange={(e) => handleArrayChange(e, "directors")}
                />
            </div>
            <div className={styles.input_text}>
                <label>Release Date</label>
                <input
                    type="date"
                    name="releaseDate"
                    value={movie.releaseDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.input_text}>
                <label>Runtime</label>
                <input
                    type="text"
                    name="runTime"
                    value={movie.runTime}
                    onChange={handleChange}
                    required
                    pattern="\d{1,3} min"
                    title="Please enter the runtime in the format '123 min'"
                />
            </div>
            
            <div className={styles.input_text}>
                <label>Awards</label>
                {movie.awards.map((award, index) => (
                    <div key={index}>
                        <input
                            type="number"
                            value={award.year}
                            onChange={(e) =>
                                handleAwardChange(index, "year", e.target.value)
                            }
                            placeholder="Year"
                            required
                        />
                        <input
                            type="text"
                            value={award.category}
                            onChange={(e) =>
                                handleAwardChange(
                                    index,
                                    "category",
                                    e.target.value
                                )
                            }
                            placeholder="Category"
                            required
                        />
                        <input
                            type="text"
                            value={award.award}
                            onChange={(e) =>
                                handleAwardChange(
                                    index,
                                    "award",
                                    e.target.value
                                )
                            }
                            placeholder="Award"
                            required
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() =>
                        setMovie({
                            ...movie,
                            awards: [
                                ...movie.awards,
                                { year: "", category: "", award: "" },
                            ],
                        })
                    }
                >
                    Add Award
                </button>
            </div>
            <div>
                <button type="submit">Save Movie</button>
            </div>
        </form>
    );
}
