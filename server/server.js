import express from "express";
import cors from "cors";

const app = express()
const port = process.env.SERVER_PORT || 3001

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server express status: ON")
})

app.get('*', (req, res) => {
    res.status(404).send('Not found');
});

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})
