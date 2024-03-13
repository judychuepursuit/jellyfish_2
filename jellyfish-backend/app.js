// const port = 4440;
// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(port, () => console.log(`Express app running on port ${port}!`));

// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the jellyfish App");
});

// jellyfish ROUTES
const jellyfishController = require("./controller/jellyfishController");
app.use("/jellyfish", jellyfishController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;