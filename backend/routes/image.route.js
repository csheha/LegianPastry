import express from 'express';
import { 
    uploadImage, 
    getAllImages, 
    getImageById,
    editImage,
    deleteImage
} from '../controllers/image.controller.js';
import { upload } from '../middlewares/image.middleware.js';

const imageRouter = express.Router();

// Route to upload a new image
imageRouter.post('/upload', upload.single('image'), uploadImage);

// Route to get all images
imageRouter.get('/', getAllImages);

// Route to get an image by ID
imageRouter.get('/:id', getImageById);

// Route to edit an image by ID
imageRouter.put('/:id', upload.single('image'), editImage);

// Route to delete an image by ID
imageRouter.delete('/:id', deleteImage);

export default imageRouter;