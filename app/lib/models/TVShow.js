import mongoose from "mongoose";

const awardSchema = new mongoose.Schema({
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

const episodeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    airDate: {
        type: Date,
    },
    runTime: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{1,3} min/.test(v);
            },
            message: (props) => `${props.value} is not a valid runtime!`,
        },
    },
    synopsis: {
        type: String,
    },
});

const seasonSchema = new mongoose.Schema({
    seasonNumber: {
        type: Number,
        required: true,
    },
    episodes: {
        type: [episodeSchema],
    },
    airDate: {
        type: Date,
    },
});

const tvCastSchema = new mongoose.Schema({
    actor: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
});

const tvShowSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
        creators: {
            type: [String],
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
            type: [tvCastSchema],
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
        firstAirDate: {
            type: Date,
            required: true,
            validate: {
                validator: function (v) {
                    return v <= Date.now();
                },
                message: (props) => `${props.value} is not a valid air date!`,
            },
        },
        lastAirDate: {
            type: Date,
        },
        productionCompanies: {
            type: [String],
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
            type: [seasonSchema],
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
        awards: {
            type: [awardSchema],
        },
        posterURL: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const TVShow = mongoose.models.TVShow || mongoose.model("TVShow", tvShowSchema);