const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const Promise = require("bluebird");
const { getAllChamps, queryChamps, queryMyChamps, getAllMyChamps, addChamp, replaceMyDb, deleteChamp, deleteAllChamps } = require("./controller");

//Store all static files in view folder (HTML, CSS, JS).
app.use(express.static("views"));

app.get("/", (req, res) => res.sendFile("index.html"));

app.get("/all", async (req, res) => {
  const query = Object.keys(req.query)[0];
  if (!query) {
    const allChamps = await getAllChamps();
    res.status(200).json(allChamps);
  }
  if (query === "tags") {
    const value = req.query.tags;
    const result = await queryChamps(query, value);
    res.status(200).json(result);
  }
  if (query === "name") {
    const value = req.query.name;
    const result = await queryChamps(query, value);
    res.status(200).json(result);
  } 
});

app.get("/mydb", async (req, res) => {
  const query = Object.keys(req.query)[0];
  if (!query) {
    const allChamps = await getAllMyChamps();
    res.status(200).json(allChamps);
  }
  if (query === "tags") {
    const value = req.query.tags;
    const result = await queryMyChamps(query, value);
    res.status(200).json(result);
  }
  if (query === "name") {
    const value = req.query.name;
    const result = await queryMyChamps(query, value);
    res.status(200).json(result);
  } 
})

app.post("/mydb/add/:id", async (req, res) => {
  const input = req.params.id
  if (input === "random") {
    const randomId = Math.floor(Math.random() * 141);
    await addChamp(randomId)
    const result = await getAllMyChamps();
    return res.status(200).json(result);
  }
  if (!Number(input) || Number(input) > 141 || Number(input) < 1){
    res.send("Please type in a number between 1 and 141 (both included).")
    return;
  }
  if (Number(input)) {
    await addChamp(input)
    const result = await getAllMyChamps();
    return res.status(200).json(result);
  }
})

app.put("/mydb/reset", async (req, res) => {
  let newChamps = Object.keys(req.query);
  await replaceMyDb(newChamps);
  const allChamps = await getAllMyChamps()
  res.status(200).json(allChamps);
})

app.put("/mydb/reset/starter", async (req, res) => {
  let newChamps = [7,8,33,47,96,133];
  await replaceMyDb(newChamps);
  const allChamps = await getAllMyChamps()
  res.status(200).json(allChamps);
})

app.put("/mydb/reset/troll", async (req, res) => {
  let newChamps = [12,22,81,113,117,134]
  await replaceMyDb(newChamps);
  const allChamps = await getAllMyChamps()
  res.status(200).json(allChamps);
})

app.delete("/mydb/delete", async (req, res) => {
  await deleteAllChamps();
  const allChamps = await getAllMyChamps()
  res.status(200).json(allChamps)
})

app.delete("/mydb/delete/:id", async (req, res) => {
  let champId = req.params.id;
  await deleteChamp(champId);
  const allChamps = await getAllMyChamps()
  res.status(200).json(allChamps)
})

console.log("let's go!")

module.exports = app.listen(process.env.PORT || 5000)
