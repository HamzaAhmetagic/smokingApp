const express = require('express')
const router = express.Router()

router.use('/', require('./home'))

router.use('/login', require('./login'))

router.use("/dashboard",require("./dashboard"))

router.use("/api",require("./api"))

// router.use('/operater', require('./operater'))

// router.use('/savetnik', require('./savetnik'))

// router.use('/sef', require('./sef'))

// router.use('/logout', require('./logout'))

module.exports = router
