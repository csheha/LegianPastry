import mongoose from "mongoose";
const { Schema } = mongoose;

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: [3, "Title must be at least 3 characters"], // Minimum length
        validate: {
            validator: function(v) {
                return typeof v === 'string' && isNaN(v) && v.trim().length > 0; // Ensure title is a non-empty string
            },
            message: "Title must be a non-empty string",
        },
    },
    description: {
        type: String,
        required: true,
        minlength: [10, "Description must be at least 10 characters"], // Minimum length
        validate: {
            validator: function(v) {
                return typeof v === 'string' && isNaN(v) && v.trim().length > 0; // Ensure description is a non-empty string
            },
            message: "Description must be a non-empty string",
        },
    },
    filepath: {
        type: String,
        required: true,
    },
}, 
{ timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Video = mongoose.model("Video", videoSchema);
export default Video;

