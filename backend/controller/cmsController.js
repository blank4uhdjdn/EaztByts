const BlogPost = require('../models/BlogPost');

const handleCreatePost = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        // Validate input
        if (!title || !content || !author) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new blog post
        const newPost = new BlogPost({
            title,
            content,
            author,
        });

        // Save the post to the database
        await newPost.save();

        // Respond with the created post as JSON
        return res.status(201).json({
            id: newPost._id,
            title: newPost.title,
            content: newPost.content,
            author: newPost.author,
        });
    } catch (error) {
        console.log(`Error in create post controller: ${error.message}`);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { handleCreatePost };
