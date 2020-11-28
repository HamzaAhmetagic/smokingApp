const express = require("express");
const router = express.Router();



router.post("/", require("../controlers/loginController"));


module.exports = router;