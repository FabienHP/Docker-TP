import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postsCRD from "./routes/posts.js";
import logger from "./logger.js";

const app = express()
const port = process.env.SERVER_PORT || 3001

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URI + "docker-tp")
    .then((result) => logger.info("MongoDB Connected on host: " + result.connection.host))
    .catch(err => logger.error("Error when attempting to connect on database, with error message : " + err.message));

app.get('/', (req, res) => {
    res.send("Server express status: ON")
})

app.use("/posts", postsCRD)

app.get('*', (req, res) => {
    res.status(404).send('Not found');
});

app.listen(port, () => {
    logger.info(`Express app listening on port ${port}`)
})
