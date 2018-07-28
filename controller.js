const knex = require("./knex");
const Promise = require("bluebird");

const getAllChamps = async () => {
  const output = await (knex.select().from("all_champs"))
  return output;
};

const queryChamps = async (query, value) => {
  const output = [];
  const allChamps = await (knex.select().from("all_champs"))
  if (query === "tag"){
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

module.exports = { getAllChamps, queryChamps };
