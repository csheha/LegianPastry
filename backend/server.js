import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/ConnectDB.js";

//Routes files importing
import UserRoutes from "./routes/user.routes.js";
import imageRouter from "./routes/image.route.js";
import AdminRoutes from "./routes/admin.routes.js";
import videoRouter from "./routes/video.route.js";

dotenv.config();
const app = express();

// Middelware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://legian-pastry-8atz.vercel.app/"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Serve static files from the uploads directory
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 3000;

//Connect to the Database
connectDB();

//routes
app.use("/auth", UserRoutes);
// image routes
app.use("/images", imageRouter);
// Admin routes
app.use("/admin", AdminRoutes);
// Video routes
app.use("/videos", videoRouter);

app.listen(PORT, (err) => {
  console.log(`App is listening on ${PORT}`);
});
