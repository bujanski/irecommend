import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
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
    bio: {
        type: String,
    },
    awards: {
        type: [String],
    },
});

const Actor = mongoose.model('Actor', actorSchema);
