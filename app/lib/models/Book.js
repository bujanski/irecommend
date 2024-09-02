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

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
    },
    nationality: {
        type: String,
    },
});

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
        authors: {
            type: [authorSchema],
            required: true,
        },
        editors: {
            type: [String],
        },
        translators: {
            type: [String],
        },
        publicationDate: {
            type: Date,
            required: true,
        },
        publishers: {
            type: [String],
        },
        language: {
            type: String,
            required: true,
        },
        genres: {
            type: [String],
        },
        pages: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: (props) =>
                    `${props.value} is not a valid number of pages!`,
            },
        },
        isbn: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function (v) {
                    return /^(97(8|9))?\d{9}(\d|X)$/.test(v);
                },
                message: (props) =>
                    `${props.value} is not a valid ISBN number!`,
            },
        },
        synopsis: {
            type: String,
        },
        coverImageUrl: {
            type: String,
        },
        awards: {
            type: [awardSchema],
        },
        keywords: {
            type: [String],
        },
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);