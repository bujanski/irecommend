"use server";
import mongoose from "mongoose";
// import { Movie } from "./models/Movie";
import OMDBdata from "./OMDB-movies.json";
import OMDBTv from "./OMDB-tv-results.json"

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
    if (cached.conn) {
        console.log("Using cached connection");
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export const seedMovieDb = async () => {
    try {
        await dbConnect();
        const { default: Movie } = await import('./models/Movie');
        const moviesArray = OMDBdata;

        // Helper function to split comma-separated strings into an array
        const splitToArray = (data) => {
            return typeof data === 'string' ? data.split(',').map(item => item.trim()) : data || [];
        };

        for (let i = 0; i < moviesArray.length; i++) {


            const movieData = moviesArray[i];

            try {
                // Create the Movie object, handling missing or nonexistent fields
                const movie = new Movie({
                    title: movieData?.Title || '', // Default to an empty string if the title is missing
                    year: movieData?.Year || '',
                    directors: splitToArray(movieData?.Director), // Use helper function
                    producers: splitToArray(movieData?.producers),
                    writers: splitToArray(movieData?.Writer),
                    actors: splitToArray(movieData?.Actors),
                    cinematographers: splitToArray(movieData?.cinematographers),
                    editors: splitToArray(movieData?.editors),
                    composers: splitToArray(movieData?.composers),
                    releaseDate: movieData?.Released || '', // Default to an empty string
                    productionCompanies: splitToArray(movieData?.productionCompanies),
                    countryOfOrigin: movieData?.Country || '', // Default if missing
                    languages: splitToArray(movieData?.Language),
                    runTime: movieData?.Runtime || '',
                    genres: splitToArray(movieData?.Genre),
                    ageRatings: splitToArray(movieData?.Rated),
                    keywords: splitToArray(movieData?.keywords),
                    synopsis: movieData?.Plot || '',
                    color: movieData?.color || '',
                    imdbId: movieData?.imdbID || '',
                    tmdbId: movieData?.tmdbId || '',
                    wikipedia: movieData?.Wikipedia || '',
                    website: movieData?.Website || '',
                    streamPlatforms: splitToArray(movieData?.streamPlatforms),
                    budget: movieData?.budget || 0,
                    boxOffice: movieData?.BoxOffice || 0,
                    posterURL: movieData?.posterURL || '',
                });

                await movie.save();
                console.log(`Added movie: ${movie.title}`);
            } catch (error) {
                console.error(`Error adding movie at position ${i} with title "${movieData?.Title}":`, error);
            }
        }

        console.log('Movies added successfully!');
    } catch (error) {
        console.error('Error adding movies:', error);
    }
};

export const seedTvDb = async () => {
    try {
        await dbConnect();
        const { default: TVShow } = await import('./models/TVShow.js');
        const showsArray = OMDBTv;

        // Helper function to split comma-separated strings into an array
        const splitToArray = (data) => {
            return typeof data === 'string' ? data.split(',').map(item => item.trim()) : data || [];
        };

        for (let i = 0; i < showsArray.length; i++) {


            const tvData = showsArray[i];

            try {
                // Create the Movie object, handling missing or nonexistent fields
                const show = new TVShow({
                    title: tvData?.Title || '', // Default to an empty string if the title is missing
                    year: tvData?.Year || '',
                    writers: splitToArray(tvData?.Writer),
                    actors: splitToArray(tvData?.Actors),
                    firstAirDate: tvData?.Released || '', // Default to an empty string
                    countryOfOrigin: splitToArray(tvData?.Country) || '', // Default if missing
                    languages: splitToArray(tvData?.Language),
                    runTime: tvData?.Runtime || '',
                    genres: splitToArray(tvData?.Genre),
                    ageRatings: splitToArray(tvData?.Rated),
                    keywords: splitToArray(tvData?.keywords),
                    synopsis: tvData?.Plot || '',
                    imdbId: tvData?.imdbID || '',
                    tmdbId: tvData?.tmdbId || '',
                    wikipedia: tvData?.Wikipedia || '',
                    website: tvData?.Website || '',
                    streamPlatforms: splitToArray(tvData?.streamPlatforms),
                    posterURL: tvData?.posterURL || '',
                    seasons: tvData?.totalSeasons || '',
                });

                await show.save();
                console.log(`Added movie: ${show.title}`);
            } catch (error) {
                console.error(`Error adding show at position ${i} with title "${tvData?.Title}":`, error);
            }
        }

        console.log('Shows added successfully!');
    } catch (error) {
        console.error('Error adding show:', error);
    }
};