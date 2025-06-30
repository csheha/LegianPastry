import expressAsyncHandler from "express-async-handler";
import Image from "../models/image.model.js";

// Upload a new image
export const uploadImage = expressAsyncHandler(async (req, res) => {
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

        // Create new image document
        const imageFile = Image({
            title: title,
            description: description,
            filepath: req.file.path,
        });

        // Save the image document to the database
        const savedImage = await imageFile.save();

        // Raturn the success response
        res.status(200).json({
            message: "Image uploaded successfully",
            image: savedImage,
        });
    } catch(error){
        console.error(error);
    }
});

// Get all images
export const getAllImages = expressAsyncHandler(async (req, res) => {
    try {
        // Fetch all images from the database
        const images = await Image.find();

        // Return the images in the response
        res.status(200).json(images);
    } catch (error) {
        console.log(error);
    }
});

// Get an image by ID
export const getImageById = expressAsyncHandler(async (req, res) => {
    try {
        // Validate the image ID
        const image = await Image.findById(req.params.id);

        // Check if the image exists
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }

        // Return the image in the response
        res.status(200).json(image);
    } catch (error) {
        console.log(error);
    }
});

// Update title and description of an image
export const editImage = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        // Validate input
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        // Find and update the image
        const updatedImage = await Image.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );

        // Check if the image exists
        if (!updatedImage) {
            return res.status(404).json({ message: "Image not found" });
        }

        // Return the updated image in the response
        res.status(200).json(updatedImage);
    } catch (error) {
        console.log(error);
    }
});

// Delete an image by ID
export const deleteImage = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the image
        const deletedImage = await Image.findByIdAndDelete(id);

        // Check if the image exists
        if (!deletedImage) {
            return res.status(404).json({ message: "Image not found" });
        }

        // Return success response
        res.status(200).json({ message: "Image deleted successfully" });
    } catch (error) {
        console.log(error);
    }
});