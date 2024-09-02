"use client"
import { useState, useEffect } from 'react';



async function getMovies() {
    const movieList = ["tt0144084", "tt0084787", "tt0073195"];

    let movieData = [];

    for (let i = 0; i < movieList.length; i++) {
        let response = await fetch(`http://www.omdbapi.com/?apikey=c1adbf81&i=${movieList[i]}`);
        let movie = await response.json();
        console.log(movie);
        movieData.push(movie);
    }
    return movieData;
}

function ScrapeOmdb() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const selectedMovies = await getMovies();
                setMovies(selectedMovies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Movies</h2>
            {movies && (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Year</th>
                            <th>Actors</th>
                            <th>Awards</th>
                            <th>BoxOffice</th>
                            <th>Country</th>
                            <th>Genre</th>
                            <th>Language</th>
                            <th>Metascore</th>
                            <th>Poster</th>
                            <th>Rated</th>
                            <th>Runtime</th>
                            <th>Writer</th>
                            <th>imdbID</th>
                            <th>imdbRating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie, index) => (
                            <tr key={index}>
                                <td>{movie.Title}</td>
                                <td>{movie.Director}</td>
                                <td>{movie.Year}</td>
                                <td>{movie.Actors}</td>
                                <td>{movie.Awards}</td>
                                <td>{movie.BoxOffice}</td>
                                <td>{movie.Country}</td>
                                <td>{movie.Genre}</td>
                                <td>{movie.Language}</td>
                                <td>{movie.Metascore}</td>
                                <td><img src={movie.Poster} alt={movie.Title} style={{ width: '50px' }} /></td>
                                <td>{movie.Rated}</td>
                                <td>{movie.Runtime}</td>
                                <td>{movie.Writer}</td>
                                <td>{movie.imdbID}</td>
                                <td>{movie.imdbRating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ScrapeOmdb;
