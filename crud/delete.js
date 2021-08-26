const db = require("../db/models/index.js");
const { Op } = require("sequelize");

const deleteRecord = async (id) => {
  const numberofDelRecords = await db.SimplePokemon.destroy({
    where: {
      id: id,
    },
  });

  return numberofDelRecords;
};

module.exports = {
  deleteRecord,
};
