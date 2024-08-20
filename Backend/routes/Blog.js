import express from "express";
import AuthController from "../Controller/authcontroller.js";
import blogroute from "../Controller/blogcontroller.js";
import catroute from "../Controller/categorycontroller.js";
import checkuserauthentication from "../middlewares/authmiddleware.js";
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'public/uploads';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    // File type validation (e.g., images only)
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Only image files are allowed!"));
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB file size limit
});

const router = express.Router();

// User registration and login routes
router.post('/user/register', AuthController.userRegistration);
router.post('/user/login', AuthController.userLogin);

// Blog routes with authentication and file upload
router.get('/get/allblogs', checkuserauthentication, blogroute.getallblog);
router.post('/add/blogs', checkuserauthentication, upload.single('Thumbnail'), (req, res, next) => {
  // console.log("Request Body:", req.body);
  // console.log("Request File:", req.file);
  // console.log("Request User:", req.user);
  next();
}, blogroute.createblog);
router.get('/get/oneblog/:id', checkuserauthentication, blogroute.getoneblog);

// Category routes with authentication
router.get('/get/allcat', checkuserauthentication, catroute.getallCat);
router.post('/add/newcat', checkuserauthentication, catroute.addnewCat);

// Error handling middleware
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading.
    res.status(500).json({ message: err.message });
  } else if (err) {
    // An unknown error occurred.
    res.status(500).json({ message: err.message });
  }
  next();
});

export default router;
