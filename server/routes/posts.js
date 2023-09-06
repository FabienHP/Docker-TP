import express from "express";
import db from "../db/connection.js";
import {ObjectId} from "mongodb";

const router = express.Router();

// Get a list of posts
router.get("/", async (req, res) => {
    let collection = await db.collection("posts");
    let results = await collection.find({})
        .toArray();

    res.status(200).send(results);
});

// Get a single post
router.get("/:id", async (req, res) => {
    let collection = await db.collection("posts");
    let query = {_id: ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if (!result) res.status(404).send("Not found"); else res.status(200).send(result);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
    let collection = await db.collection("posts");
    console.log(req.body);
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.status(204).send(result);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
    const query = {_id: ObjectId(req.params.id)};

    const collection = db.collection("posts");
    let result = await collection.deleteOne(query);

    res.status(200).send(result);
});

export default router;
