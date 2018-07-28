const allChamps = require("lol-champions")

const getAllChamps = () => {
  const allChampsArr = [];
  allChamps.map((champ) => {
    const champObj = {
      name: champ.name,
      tags: champ.tags.join(', '),
      description: champ.description.split(".")[0] + ".",
      icon: champ.icon
    }
    allChampsArr.push(champObj);
  })
  return allChampsArr
}

console.log(getAllChamps())

module.exports = { getAllChamps };