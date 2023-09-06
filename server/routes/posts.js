import express from "express";
import PostsModel from "../model/posts.js";

const router = express.Router();

// Get a list of posts
router.get("/", async (req, res) => {
    let results = await PostsModel.find({});

    res.status(200).send(results);
});

// Get a single post
router.get("/:id", async (req, res) => {
    let query = {_id: req.params.id};
    let result = await PostsModel.findOne(query);

    if (!result) res.status(404).send("Not found"); else res.status(200).send(result);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
    console.log(req.body);
    let result = await PostsModel.create(req.body);
    res.status(204).send(result);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
    const query = {_id: req.params.id};

    let result = await PostsModel.findOneAndDelete(query);

    res.status(200).send(result);
});

export default router;
