const express = require("express");

const router = express.Router();
const createPokemon = require("../crud/create");
const Read = require("../crud/read");
const { updatePokemonsHpByLikeCategory } = require("../crud/update.js");
const { deleteRecord } = require("../crud/delete.js");
router.get("/", async (req, res, next) => {
  try {
    const result = await Read.findAllPokemon();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const result = await createPokemon(req.body);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:category/:hp", async (req, res, next) => {
  try {
    const hp = req.params.hp;
    const category = req.params.category;
    // alternatively, const { hp, category } = req.params;

    const result = await updatePokemonsHpByLikeCategory(hp, category);
    console.log(result);
    res.status(200).send("No. of records updated: " + result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await deleteRecord(req.params.id);
    console.log(result);
    res.status(200).send("No. of records deleted: " + result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
