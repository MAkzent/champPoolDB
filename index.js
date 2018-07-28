const express = require('express')
const app = express()
const { getAllChamps } = require("./helper")

app.get('/', (req, res) => res.json(getAllChamps()))

app.listen(3000, () => console.log('Example app listening on port 3000!'))