const express = require("express");
const router = express.Router();



router.get("/checkDate",require("../controlers/checkDateController"));
router.get("/smoke",require("../controlers/smokeController"));


module.exports = router;