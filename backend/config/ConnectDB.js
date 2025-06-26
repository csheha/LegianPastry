import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => console.log("Database connected..."))
    .catch((err) => console.error("Database connection error:", err));
};

export default connectDB;
