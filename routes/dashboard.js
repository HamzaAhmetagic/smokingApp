const express = require("express");
const router = express.Router();
router.use(checkUser);
router.get("/", (req, res) => {
    res.render("dashboard",{
        user:req.session.user
    })
})

function checkUser(req, res, next) {
    console.log(req.url);
    let user = req.session.user;
    if (user) {
        
            next()
       
    } else {
        res.redirect("/");
    }
}

module.exports = router;