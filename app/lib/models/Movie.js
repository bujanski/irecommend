import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
        year: {
            type: String,
        },
        directors: {
            type: [String],
        },
        producers: {
            type: [String],
        },
        writers: {
            type: [String],
        },
        actors: {
            type: [String],
        },
        cinematographers: {
            type: [String],
        },
        editors: {
            type: [String],
        },
        composers: {
            type: [String],
        },
        releaseDate: {
            type: String,
        },
        productionCompanies: {
            type: [String],
        },
        countryOfOrigin: {
            type: String,
        },
        languages: {
            type: [String],
        },
        runTime: {
            type: String,
        },
        genres: {
            type: [String],
        },
        ageRatings: {
            type: [String],
        },
        keywords: {
            type: [String],
        },
        synopsis: {
            type: String,
        },
        color: {
            type: String,
        },
        imdbId: {
            type: String,
            index: true,
        },
        tmdbId: {
            type: String,
            index: true,
        },
        website: {
            type: String,
        },
        streamPlatforms: {
            type: [String],
        },
        budget: {
            type: String,
        },
        boxOffice: {
            type: String,
        },
        posterURL: {
            type: String,
        },
        wikipedia: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

export default Movie;