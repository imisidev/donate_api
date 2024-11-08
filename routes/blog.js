const Router = require("express");
const route = Router();
const { Blog } = require('../models/Blogs');

route.post('/create', async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = route;