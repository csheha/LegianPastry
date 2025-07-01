import mongoose from "mongoose";
const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: [3, "Title must be at least 3 characters"], // Minimum length
    },
    description: {
      type: String,
      required: true,
      minlength: [10, "Description must be at least 10 characters"], // Minimum length
    },
    filepath: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

const Image = mongoose.model("Image", imageSchema);
export default Image;
