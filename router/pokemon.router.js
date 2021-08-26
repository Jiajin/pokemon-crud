const express = require("express");

const router = express.Router();
const createPokemon = require("../crud/create"); //  --> ADDED THIS

router.get("/create", async (req, res) => {
  console.log(req.body);
  const result = await createPokemon(req.body);
  res.status(201).send(result);
});
module.exports = router;
