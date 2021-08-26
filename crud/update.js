// No returning records by default
const db = require("../db/models/index.js");
const { Op } = require("sequelize");

// const updatePokemons = async (category) => {

// };
const updatePokemonsHpByLikeCategory = async (hp, category) => {
  console.log("Hello im inside");
  const [numberOfAffectedRecords, updatedPokemons] =
    await db.SimplePokemon.update(
      { baseHp: hp },
      {
        returning: true, //to return both No. of records and Results updated
        raw: true,
        where: {
          category: {
            //   [Op.like]: "%" + category + "%",
            [Op.like]: `%${category}%`,
          },
        },
      }
    );
  console.log("Result: " + numberOfAffectedRecords);
  console.log(updatedPokemons);
  return numberOfAffectedRecords;
};

module.exports = {
  updatePokemonsHpByLikeCategory,
};
