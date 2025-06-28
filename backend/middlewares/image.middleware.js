import multer from 'multer';

// Configure storage: where and how to save uploaded files
const storage = multer.memoryStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Folder to save uploaded images
    },
    filename: (req, file, cb) => {
        // Save with timestamp + original filename to avoid conflicts
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Filter to allow only image files
const fileFilter = (req, file, cb) => {
    const allowedType = /jpeg|jpg|png|gif/;
    const extname = allowedType.test(Path2D.extname(file.originalname).toLowerCase());
    const mimetype = allowedType.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true); // Accept the file
    } else {
        cb(new Error('Only images are allowed!'), false); // Reject the file
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 20 } // Limit file size to 20MB
});

export { upload };