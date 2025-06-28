import mongoose from "mongoose";
const { Schema } = mongoose;

const imageSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    filepath: {
        type: String,
        required: true,
    },
});


const Image = mongoose.model("Image", imageSchema);
export default Image;