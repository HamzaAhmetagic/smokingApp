const mongojs = require("mongojs");
const db = mongojs("smokingapp", ['users']);

const loginController = (req, res) => {
    let emailIzForme = req.body.email;
    let passwordIzForme = req.body.password;
    db.users.find({ email: emailIzForme, password: passwordIzForme }, (err, docs) => {
        console.log(docs);
        if (err) {
            console.log("greska");
            res.redirect('/');
        } else {
            if (docs.length === 1) {
                let user = docs[0];
                req.session.user = user;
                res.redirect("/dashboard");
            }else{
                res.redirect('/')
            }
        }
    });
}

module.exports = loginController;
