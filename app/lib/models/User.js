import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            minlength: 2,
            maxlength: 24,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+\@.+\..+/, "Please fill a valid email address"],
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        roles: {
            type: [String],
            default: ["user"],
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        emailVerificationToken: {
            type: String,
        },
        resetPasswordToken: {
            type: String,
        },
        resetPasswordExpires: {
            type: Date,
        },
    },
    { timestamps: true }
);

// Pre-save hook to hash password before saving
userSchema.pre("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Export the model, using an existing one if it already exists
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
