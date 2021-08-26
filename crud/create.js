const db = require("../db/models/index.js");

const createPikachu = async () => {
  const pikachu = {
    name: "Pikachu",
    japaneseName: "ピカチュウ",
    baseHP: 35,
    category: "Mouse Pokemon",
  };
  const created = await db.SimplePokemon.create(pikachu);
  //await db.SimplePokemon.create(pikachu); this was to test 
  const pokemons = [
    {
      name: "Squirtle",
      japaneseName: "ゼニガメ",
      baseHP: 44,
      category: "Tiny Turtle Pokemon",
    },
    {
      name: "Wartortle",
      japaneseName: "カメール",
      baseHP: 59,
      category: "Turtle Pokémon",
    },
    {
      name: "Meowth",
      japaneseName: "ニャース",
      baseHP: 40,
      category: "Scratch Cat Pokémon",
    },
  ];
  const created2 = await db.SimplePokemon.create(pokemons[0]);
  await db.SimplePokemon.create(pokemons[1]);
  await db.SimplePokemon.create(pokemons[2]);
  // console.log(created); // Not recommended, since Sequelize instances have a lot of things attached. This might produce a lot of clutter.
  //console.log(created2.toJSON()); // The recommended way to log an instance, but do note that this might still log sensitive data stored in database. Need processing.
};

module.exports = createPikachu;
