const express = require("express");
const { createPost } = require("../controllers/postController");
const upload = require("../multer/multer");

const router = express.Router();
//! must be schema name
router.post("/posts", upload.single("post"), createPost);

module.exports = router;
