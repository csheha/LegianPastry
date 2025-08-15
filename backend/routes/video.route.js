import express from 'express';
import { 
    uploadVideo, 
    getAllVideos, 
    getVideoById,
    editVideo,
    deleteVideo
} from '../controllers/video.controller.js';

import { upload } from '../middlewares/video.middleware.js';

const videoRouter = express.Router();

// Route to upload a new video
videoRouter.post('/upload', upload.single('video'), uploadVideo);

// Route to get all videos
videoRouter.get('/', getAllVideos);

// Route to get a video by ID
videoRouter.get('/:id', getVideoById);

// Route to edit a video by ID
videoRouter.put('/:id', upload.single('video'), editVideo);

// Route to delete a video by ID
videoRouter.delete('/:id', deleteVideo);

export default videoRouter;