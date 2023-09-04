const express = require('express')
const app = express()
const port = process.env.SERVER_PORT | 3001

app.get('/', (req, res) => {
    res.send(process.env.MONGO_URI)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
