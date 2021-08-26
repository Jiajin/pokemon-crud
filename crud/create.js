const db = require("../db/models/index.js");

const createPikachu = async () => {
  const pikachu = {
    name: "Pikachu",
    japaneseName: "ピカチュウ",
    baseHP: 35,
    category: "Mouse Pokemon",
  };
  console.log("HERE");
  const created = await db.SimplePokemon.create(pikachu);
  console.log("HERE");

  const pikachu2 = {
    id: 2,
    ...pikachu,
  };
  console.log("HERE");
  const created2 = await db.SimplePokemon.create(pikachu2);

  console.log("Pikachu was saved to the database!");
  // console.log(created); // Not recommended, since Sequelize instances have a lot of things attached. This might produce a lot of clutter.
  console.log(created2.toJSON()); // The recommended way to log an instance, but do note that this might still log sensitive data stored in database. Need processing.
};

module.exports = createPikachu;
