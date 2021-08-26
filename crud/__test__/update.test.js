const { updatePokemonsHpByLikeCategory } = require("../update.js");
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

describe("retrieve/read/find", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await db.SimplePokemon.bulkCreate(pokemons);
  });

  afterAll(async () => {
    //await db.SimplePokemon.truncate();
    await db.sequelize.close();
  });

  describe("UPDATE/ updatePokemonsHpByLikeCategory ", () => {
    it("should return 2 results when updating hp to 100 by Category Turtle ", async () => {
      let result = await updatePokemonsHpByLikeCategory(100, "Turtle");
      //console.log(result);
      expect(result).toEqual(2);
    });
  });
});
