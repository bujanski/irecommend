import mongoose from "mongoose";

const tvShowSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
        writers: {
            type: [String],
        },
        actors: {
            type: [String],
        },
        year: {
            type: String,
        },
        firstAirDate: {
            type: String,
        },
        countryOfOrigin: {
            type: [String],
        },
        languages: {
            type: [String],
        },
        genres: {
            type: [String],
        },
        ageRatings: {
            type: [String],
        },
        seasons: {
            type: String,
        },
        keywords: {
            type: [String],
        },
        synopsis: {
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
        posterURL: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const TVShow = mongoose.models.TVShow || mongoose.model("TVShow", tvShowSchema);

export default TVShow;