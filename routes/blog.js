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

route.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            order: [["createdAt", "DESC"]]
        });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json(error);
    }
});

route.delete('/delete/:id',async(req,res)=>{
    try {
        await Blog.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json(error);
    }
});

route.get('/blog/:id',async(req,res)=>{
    try {
        const blog = await Blog.findByPk(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = route;