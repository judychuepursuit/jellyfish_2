const db = require("../db/dbConfig.js");

// ALL Jellyfish
const getAllJellyfish = async () => {
  try {
    const allJellyfish = await db.any("SELECT * FROM jellyfish");
    return allJellyfish;
  }
  catch (error) {
    return error;
  }
};

// ONE Jellyfish
const getJellyfish = async (id) => {
  try {
    const oneJellyfish = await db.oneOrNone("SELECT * FROM jellyfish WHERE id=$1", id);
    return oneJellyfish;
  }
  catch (error) {
    return error;
  }
};

// INSERT INTO jellyfish (name, is_venomous, scientific, information, website, image_link) VALUES
// CREATE/NEW
const createJellyfish = async (jellyfish) => {
  try {
    const newJellyfish = await db.oneOrNone(
      "INSERT INTO jellyfish (name, is_venomous, scientific, information, website, image_link) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [jellyfish.name, jellyfish.is_favorite, jellyfish.scientific_name, jellyfish.information, jellyfish.website, jellyfish.image_link]
    );
    return newJellyfish;
  }
  catch (error) {
    return error;
  }
};

// DELETE
const deleteJellyfish = async (id) => {
  try {
    const deletedJellyfish = await db.oneOrNone(
      "DELETE FROM jellyfish WHERE id = $1 RETURNING *", id
    );
    return deletedJellyfish;
  }
  catch (error) {
    throw error;
  }
};

// INSERT INTO jellyfish (name, is_venomous, scientific, information, website, image_link) VALUES
// UPDATE/EDIT
const updateJellyfish = async (id, jellyfish) => {
  try {
    const updatedJellyfish = await db.one(
      "UPDATE jellyfish SET name=$1, venomous=$2, scientific=$3, information=$4, website=$5, image_link=$6, where id=$7 RETURNING *",
      [jellyfish.name, jellyfish.is_venomous, jellyfish.scientific, jellyfish.information, jellyfish.website, jellyfish.image_link]
    );
    return updatedJellyfish;
  }
  catch (error) {
    return error;
  }
};
  
module.exports = {
  getAllJellyfish,
  getJellyfish,
  createJellyfish,
  deleteJellyfish,
  updateJellyfish
};