const knex = require("./knex");
const Promise = require("bluebird");

const getAllChamps = async () => {
  const output = await (knex.select().from("all_champs"))
  return output;
};

const getAllMyChamps = async () => {
  const output = await (knex.select().from("my_champs").innerJoin("all_champs", "my_champs.champ_id", "all_champs.id"))
  return output;
};

const queryChamps = async (query, value) => {
  const output = [];
  const allChamps = await (knex.select().from("all_champs"))
  if (query === "tags"){
    allChamps.map((champ) => {
      if (champ.tags.toLowerCase().includes(value)){
        output.push(champ);
      };
    })
    if (output.length === 0) return `Seems like there are no matches for ${value}. Here are all available tags: Tank, Fighter, Mage, Assassin, Marksman, and Support`
    return output;
  }
  if (query === "name"){
    allChamps.map((champ) => {
      if (champ.name.toLowerCase().includes(value)){
        output.push(champ);
      };
    })
    if (output.length === 0) return "No Matches, try again!"
    return output;
  }
};

const queryMyChamps = async (query, value) => {
  const output = [];
  const allChamps = await (knex.select().from("my_champs"))
  if (query === "tags"){
    allChamps.map((champ) => {
      if (champ.tags.toLowerCase().includes(value)){
        output.push(champ);
      };
    })
    if (output.length === 0) return `Seems like there are no matches for ${value}. Here are all available tags: Tank, Fighter, Mage, Assassin, Marksman, and Support`
    return output;
  }
  if (query === "name"){
    allChamps.map((champ) => {
      if (champ.name.toLowerCase().includes(value)){
        output.push(champ);
      };
    })
    if (output.length === 0) return "No Matches, try again!"
    return output;
  }
}

const addChamp = async (id) => {
  return await (knex("my_champs").insert({"champ_id": id}));
}

const replaceMyDb = async (newChamps) => {
  await knex("my_champs").select().del()
  const promisesArray = [];
  newChamps.map((champId) => {
    promisesArray.push(addChamp(champId))
  })
  return Promise.all(promisesArray);
}

const deleteAllChamps = async () => {
  return await knex("my_champs").select().del()
}

const deleteChamp = async (id) => {
  return await knex("my_champs").select().where({champ_id: id}).del()
}

module.exports = { getAllChamps, queryChamps, queryMyChamps, getAllMyChamps, addChamp, replaceMyDb, deleteChamp, deleteAllChamps };
