const express = require("express");
const app = express();
// const json = require('express-json');
// app.use(json());
const Promise = require("bluebird");
const { getAllChamps, queryChamps } = require("./controller");

app.use(express.static("views"));
//Store all HTML files in view folder.

// initial route
app.get("/", (req, res) => res.sendFile("index.html"));

// GET requests -> async becuase we talk to the DB
// Options:
// all => shows all champs
// all?tag=xx => shows all champs with that tag (can only search one tag)
// all?name=xx => shows champ with that name
app.get("/all", async (req, res) => {
  const query = Object.keys(req.query)[0];
  if (!query) {
    const allChamps = await getAllChamps();
    res.json(allChamps);
  }
  if (query === "tag") {
    const value = req.query.tag;
    const result = await queryChamps(query, value);
    res.json(result);
  }
  if (query === "name") {
    const value = req.query.name;
    const result = await queryChamps(query, value);
    res.json(result);
  } 
});

// next: 
// 1. POST champs into my own DB
// 2. PUT new stuff into the own DB
// 3. DELETE own DB
// 4. Frontend

app.listen(3000, () => console.log("Example app listening on port 3000!"));
