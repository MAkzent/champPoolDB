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

const fakeChampObj = [
  {
    "id": 7,
    "champ_id": 7,
    "added_at": "2018-07-29T06:32:32.609Z",
    "name": "Annie",
    "tags": "Mage",
    "description": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power.",
    "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Annie.png"
  },
  {
    "id": 8,
    "champ_id": 8,
    "added_at": "2018-07-29T06:32:32.610Z",
    "name": "Ashe",
    "tags": "Marksman, Support",
    "description": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north.",
    "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ashe.png"
  },
  {
    "id": 33,
    "champ_id": 33,
    "added_at": "2018-07-29T06:32:32.614Z",
    "name": "Garen",
    "tags": "Fighter, Tank",
    "description": "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard.",
    "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Garen.png"
  },
  {
    "id": 47,
    "champ_id": 47,
    "added_at": "2018-07-29T06:32:32.622Z",
    "name": "Jinx",
    "tags": "Marksman",
    "description": "A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences.",
    "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Jinx.png"
  },
  {
    "id": 96,
    "champ_id": 96,
    "added_at": "2018-07-29T06:32:32.630Z",
    "name": "Ryze",
    "tags": "Mage, Fighter",
    "description": "Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear.",
    "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ryze.png"
  },
  {
    "id": 133,
    "champ_id": 133,
    "added_at": "2018-07-29T06:32:32.634Z",
    "name": "Xin Zhao",
    "tags": "Fighter, Assassin",
    "description": "Xin Zhao is a resolute warrior loyal to the ruling Lightshield dynasty.",
    "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/XinZhao.png"
  }
]

module.exports = { generateChampsArr, fakeChampObj };