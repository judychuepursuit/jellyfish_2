const pgp = require("pg-promise")();
require("dotenv").config();

// const {PG_HOST, PG_USER, PG_PORT, PG_DATABASE} = process.env

// // from my yoga pose app
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
};

const db = pgp(cn);

module.exports = db;