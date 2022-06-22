const express = require('express');
const router = express.Router();
const API = require('../controllers/api');
const multer = require('multer');

// multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    },
});

let upload = multer({
    storage: storage
}).single('image');

// post
router.get("/post/", API.fetchAllPosts);
router.get("/post/:id", API.fetchPostByID);
router.post("/post/", upload, API.createPost);
router.patch("/post/:id", upload, API.updatePost);
router.delete("/post/:id", API.deletePost);

// users
router.get("/user/", API.fetchAllUsers);
router.get("/user/:id", API.fetchUserByID);
router.post("/user/", upload, API.createUser);
router.patch("/user/:id", upload, API.updateUser);
router.delete("/user/:id", API.deleteUser);

module.exports = router;