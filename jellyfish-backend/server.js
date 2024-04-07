
// server.js - acts as a switch board OPERATOR - Listens for a request made to that PORT- Once the request is made to that PORT > directs the request (or call) it to the appropriate route from app.js 

// app.js acts as the switch board- hosting all the proper connections.
// goes to the "home" or "404" route

// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
