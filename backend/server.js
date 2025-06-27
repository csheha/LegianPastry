import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/ConnectDB.js";

//Routes files importing
import UserRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();

// Middelware
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

//Connect to the Database
connectDB();

//routes
app.use("/auth", UserRoutes);

app.listen(PORT, (err) => {
  console.log(`App is listening on ${PORT}`);
});
