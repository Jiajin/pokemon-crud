const express = require("express");
const app = express();
app.use(express.json());
const pokemonRouter = require("./router/pokemon.router");

const db = require("./db/models/index.js"); // --> REPLACE THIS

const Read = require("./crud/read");
const updatePokemonsHpByLikeCategory = require("./crud/update");

// [1] Just test connection, we don't neeed this in actual. --> REMOVE THIS SECTION
// [2] For dev exploration convenience, we forced synchronisation.
//db.sequelize.sync({ force: true }); // --> Use this to reset the DB each time (DANGEROUS)
// db.sequelize.sync(); // --> REPLACE THIS

app.use("/pokemon/", pokemonRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// [4] Set timeout to simulate async calls to play with model --> ADDED THIS SECTION
// We need to hold a while for db sync
//setTimeout(createPikachu, 300);

//setTimeout(() => Read.findPokemonsWithBaseHPGreaterThan(40), 500);
//setTimeout(() => Read.findPokemonWithNameOrBaseHP("Pikachu", 59), 500);

module.exports = app;
