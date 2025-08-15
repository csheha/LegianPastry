import mongoose from "mongoose";
const { Schema } = mongoose;

const videoSchema = new Schema({
    food: {
        type: String,
        required: true,
        minlength: [3, "Food must be at least 3 characters"], // Minimum length
        validate: {
            validator: function(v) {
                return typeof v === 'string' && isNaN(v) && v.trim().length > 0; // Ensure title is a non-empty string
            },
            message: "Food must be a non-empty string",
        },
    },
    chef: {
        type: String,
        required: true,
        minlength: [5, "Chef must be at least 5 characters"], // Minimum length
        validate: {
            validator: function(v) {
                return typeof v === 'string' && isNaN(v) && v.trim().length > 0; // Ensure description is a non-empty string
            },
            message: "Chef must be a non-empty string",
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

