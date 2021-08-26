// crud/read.js
const db = require("../db/models/index.js");

const { Op } = require("sequelize");

const findAllPokemon = async () => {
  const foundPokemons = await db.SimplePokemon.findAll();
  return foundPokemons;
};

const findPokemonsWithBaseHPGreaterThan = async (baseHP) => {
  //console.log("query1");
  const foundPokemons = await db.SimplePokemon.findAll({
    where: {
      baseHp: {
        [Op.gt]: baseHP,
      },
    },
    //raw: true,
  });
  //   console.log(
  //     `RESULT FOR findPokemonsWithBaseHPGreaterThan: ${foundPokemons.length}`
  //   );
  //   console.log(foundPokemons);
  return foundPokemons;
};

const findPokemonWithNameOrBaseHP = async (name, baseHp) => {
  console.log("query2");
  const foundPokemons = await db.SimplePokemon.findAll({
    where: {
      [Op.or]: [{ name: name }, { baseHp: baseHp }],
    },
    //raw: true,
  });
  console.log(
    `RESULT FOR findPokemonWithNameOrBaseHP: ${foundPokemons.length}`
  );
  console.log(foundPokemons[0].toJSON()); //virtual fields will appear when using .toJSON()
  return foundPokemons;
};

module.exports = {
  findAllPokemon,
  findPokemonsWithBaseHPGreaterThan,
  findPokemonWithNameOrBaseHP,
};
