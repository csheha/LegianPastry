import expressAsyncHandler from "express-async-handler";
import Video from "../models/video.model.js";

// Upload a new video
export const uploadVideo = expressAsyncHandler(async (req, res) => {
    try {
        // Check if the file is present
        if (!req.file) {
            return res.status(500).json({ message: "No file found" });
        }

        const title = req.body.title;
        const description = req.body.description;

        // Validate title and description
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        // Create new video document
        const videoFile = new Video({
            title: title,
            description: description,
            filepath: req.file.path,
        });

        // Save the video document to the database
        const savedVideo = await videoFile.save();

        // Return the success response
        res.status(200).json({
            message: "Video uploaded successfully",
            video: savedVideo,
        });
    } catch(error) {
        console.error(error);
    }
});

// Get all videos
export const getAllVideos = expressAsyncHandler(async (req, res) => {
    try {
        // Fetch all videos from the database
        const videos = await Video.find();

        // Return the videos in the response
        res.status(200).json(videos);
    } catch (error) {
        console.log(error);
    }
});

// Get a video by ID
export const getVideoById = expressAsyncHandler(async (req, res) => {
    try {
        // Validate the video ID
        const video = await Video.findById(req.params.id);

        // Check if the video exists
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }

        // Return the video in the response
        res.status(200).json(video);
    } catch (error) {
        console.log(error);
    }
});

// Update title and description of a video
export const editVideo = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        // Validate title and description
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        // Find the video by ID and update it
        const updatedVideo = await Video.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );

        // Check if the video was found and updated
        if (!updatedVideo) {
            return res.status(404).json({ message: "Video not found" });
        }

        // Return the updated video in the response
        res.status(200).json({
            message: "Video updated successfully",
            video: updatedVideo,
        });
    } catch (error) {
        console.log(error);
    }
});

// Delete a video by ID
export const deleteVideo = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        // Find the video by ID and delete it
        const deletedVideo = await Video.findByIdAndDelete(id);

        // Check if the video was found and deleted
        if (!deletedVideo) {
            return res.status(404).json({ message: "Video not found" });
        }

        // Return success response
        res.status(200).json({ message: "Video deleted successfully" });
    } catch (error) {
        console.log(error);
    }
});
