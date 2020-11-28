const mongojs = require("mongojs");
const db = mongojs("smokingapp", ['users']);

function smoke (req, res) {
res.send("Smoke")
}

module.exports = smoke;

// TO DO
// today ++
// total ++
// set last to current time