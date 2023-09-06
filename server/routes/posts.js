import express from "express";
import PostsModel from "../model/posts.js";
import logger from "../logger.js";

const router = express.Router();

// Get a list of posts
router.get("/", async (req, res) => {
    logger.debug("GET /posts" + req.origins)
    let results = await PostsModel.find({});

    res.status(200).send(results);
});

// Get a single post
router.get("/:id", async (req, res) => {
    logger.debug("GET /posts/:id" + req.origins)
    let query = {_id: req.params.id};
    let result = await PostsModel.findOne(query);

    if (!result) res.status(404).send("Not found"); else res.status(200).send(result);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
    logger.debug("POST /posts" + req.origins)
    let result = await PostsModel.create(req.body);
    res.status(204).send(result);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
    logger.debug("DELETE /posts/:id" + req.origins)
    const query = {_id: req.params.id};

    let result = await PostsModel.findOneAndDelete(query);

    res.status(200).send(result);
});

export default router;
