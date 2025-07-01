import multer from "multer";
import path from "path";

// Configure storage: where and how to save uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/videos/"); // Folder to save uploaded videos
    },
    filename: (req, file, cb) => {
        // Save with timestamp + original filename to avoid conflicts
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// Filter to allow only video files
const fileFilter = (req, file, cb) => {
    const allowedType = /mp4|avi|mov|mkv/;
    const extname = allowedType.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedType.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true); // Accept the file
    } else {
        cb(new Error("Only video files are allowed!"), false); // Reject the file
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 100 } // Limit file size to 100MB
});

export { upload };