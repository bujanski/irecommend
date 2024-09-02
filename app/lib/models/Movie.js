import mongoose from "mongoose";

const movieAwardSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    award: {
        type: String,
        required: true,
    },
});

const movieCastSchema = new mongoose.Schema({
    actor: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
});

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
        directors: {
            type: [String],
        },
        producers: {
            type: [String],
        },
        screenwriters: {
            type: [String],
        },
        cast: {
            type: [movieCastSchema],
        },
        cinematographers: {
            type: [String],
        },
        editor: {
            type: String,
        },
        composer: {
            type: String,
        },
        releaseDate: {
            type: Date,
            required: true,
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
            validate: {
                validator: function(v) {
                    return /\d{1,3} min/.test(v);
                },
                message: props => `${props.value} is not a valid runtime!`
            },
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
        awards: {
            type: [movieAwardSchema],
        },
        budget: {
            type: Number,
        },
        boxOffice: {
            type: Number,
        },
        posterURL: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
export const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema)