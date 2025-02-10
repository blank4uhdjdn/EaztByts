const mongoose = require('mongoose');

// Define the Blog Post Schema
const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the Blog Post Model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;