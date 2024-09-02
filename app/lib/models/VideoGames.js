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

const developerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
    },
});

const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
    },
});

const platformSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
    },
});

const videoGameSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
        developers: {
            type: [developerSchema],
        },
        publishers: {
            type: [publisherSchema],
        },
        releaseDate: {
            type: Date,
            required: true,
        },
        platforms: {
            type: [platformSchema],
        },
        genres: {
            type: [String],
        },
        modes: {
            type: [String], // e.g., Single-player, Multiplayer, Co-op
        },
        esrbRating: {
            type: String,
        },
        pegiRating: {
            type: String,
        },
        synopsis: {
            type: String,
        },
        coverImageUrl: {
            type: String,
        },
        website: {
            type: String,
        },
        awards: {
            type: [awardSchema],
        },
        keywords: {
            type: [String],
        },
        imdbId: {
            type: String,
            index: true,
        },
        igdbId: {
            type: String,
            index: true,
        },
        metacriticScore: {
            type: Number,
            min: 0,
            max: 100,
        },
    },
    {
        timestamps: true,
    }
);

export const VideoGame = mongoose.models.VideoGame || mogoose.model("VideoGame", videoGameSchema);