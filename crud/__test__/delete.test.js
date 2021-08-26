const { deleteRecord } = require("../delete.js");
const db = require("../../db/models/index");

const pikachu = {
  name: "Pikachu",
  japaneseName: "ピカチュウ",
  baseHp: 35,
  category: "Mouse Pokemon",
};
const pokemons = [
  pikachu,
  {
    name: "Squirtle",
    japaneseName: "ゼニガメ",
    baseHp: 44,
    category: "Tiny Turtle Pokemon",
  },
  {
    name: "Wartortle",
    japaneseName: "カメール",
    baseHp: 59,
    category: "Turtle Pokémon",
  },
  {
    name: "Meowth",
    japaneseName: "ニャース",
    baseHp: 40,
    category: "Scratch Cat Pokémon",
  },
];

describe("Setup", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await db.SimplePokemon.bulkCreate(pokemons);
  });

  afterAll(async () => {
    //await db.SimplePokemon.truncate();
    await db.sequelize.close();
  });

  describe("Delete/ deleteRecord ", () => {
    it.only("should return 1 when deleting a record that exists", async () => {
      let result = await deleteRecord(1);
      //console.log(result);
      expect(result).toEqual(1);
    });
  });
});
