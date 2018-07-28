const allChamps = require("lol-champions")

const generateChampsArr = () => {
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

module.exports = { generateChampsArr };