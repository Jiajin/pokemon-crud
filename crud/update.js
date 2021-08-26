// No returning records by default
const db = require("../db/models/index.js");
const { Op } = require("sequelize");

// const updatePokemons = async (category) => {

// };
const updatePokemonsHpByLikeCategory = async (hp, category) => {
  console.log("Hello im inside");
  const numberOfAffectedRecords = await db.SimplePokemon.update(
    { baseHp: hp },
    {
      where: {
        category: {
          //   [Op.like]: "%" + category + "%",
          [Op.like]: `%${category}%`,
        },
      },
    }
  );
  console.log("Result: " + numberOfAffectedRecords);
  return numberOfAffectedRecords;
};

// With updated records
// const [numberOfAffectedRecords, updatedPokemons] = await SimplePokemon.update(
//   { baseHP: 100 },
//   {
//     where: {
//       category: {
//         [Op.like]: "%Turtle%",
//       },
//     },
//     returning: true,
//   }
// );
module.exports = {
  updatePokemonsHpByLikeCategory,
};
