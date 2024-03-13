const express = require("express");
const jellyfishController = express.Router();
// const jellyfish = express.Router();
const router = express.Router();
const { checkName, checkBoolean, checkWebsite } = require("../validation/checkJellyfish");
const db = require('../db/dbConfig')

const {
  getAllJellyfish,
  getJellyfish,
  createJellyfish,
  deleteJellyfish,
  updateJellyfish
} = require("../queries/jellyfish.js");

// INDEX/GET ALL
router.get("/", async (req, res) => {
// jellyfish.get("/", async (req, res) => {
  const allJellyfish = await getAllJellyfish();
  if (allJellyfish[0]) {
    res.status(200).json(allJellyfish);
  }
  else {
    res.status(500).json({ error: "server error" });
  }
});
// for above: see R & S file dated 3.12.24 // INDEX/GET ALL for previous alt codes:

// SHOW
router.get("/:id", async (req, res) => {
// getJellyfish.get("/:id", async (req, res) => {
  const { id } = req.params;
  const jellyfish = await getJellyfish(id);
  if (jellyfish) {
    res.json(jellyfish);
  }
  else {
    res.status(404).json({ error: "not found" });
  }
});
// for above: see R & S file dated 3.12.24 // SHOW for previous alt codes:

jellyfishController.post("/", checkName, checkBoolean, checkWebsite, async (req, res) => {
  try {
    const jellyfish = await createJellyfish(req.body);
    res.json(jellyfish);
  }
  catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
jellyfishController.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJellyfish = await deleteJellyfish(id);
    if (deletedJellyfish.id) {
      res.status(200).json(deletedJellyfish);
    }
    else {
      res.status(404).json("jellyfish not found!");
    }
  }
  catch (error) {
    res.status(500).json({error: error})
  }
});

// UPDATE
jellyfishController.put("/:id", checkName, checkBoolean, checkWebsite, async (req, res) => {
  const { id } = req.params;
  const updatedJellyfish = await updateJellyfish(id, req.body);
  res.status(200).json(updatedJellyfish);
});

// module.exports = jellyfish;
module.exports = router;
// module.exports = jellyfishController
