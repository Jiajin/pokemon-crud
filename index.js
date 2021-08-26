// index.js
const db = require("./db/models/index.js"); // --> REPLACE THIS

const createPikachu = require("./crud/create"); //  --> ADDED THIS
// [1] Just test connection, we don't neeed this in actual. --> REMOVE THIS SECTION
// [2] For dev exploration convenience, we forced synchronisation.
db.sequelize.sync({ force: true }); // --> REPLACE THIS
// db.sequelize.sync(); // --> REPLACE THIS

// [3] Use this to refer to the model in the app/router code later
// const SimplePokemon = await db.SimplePokemon.create();

// [4] Set timeout to simulate async calls to play with model --> ADDED THIS SECTION
// We need to hold a while for db sync
setTimeout(createPikachu, 500);
