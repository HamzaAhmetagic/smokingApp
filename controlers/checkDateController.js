const mongojs = require("mongojs");
const db = mongojs("smokingapp", ['users']);

function checkDate (req, res) {
    let user = req.session.user;
    let id = req.session.user._id;
    console.log(user.startdate);

    db.users.find({_id:mongojs.ObjectID(id)},(err,docs) => {
        let user = docs[0];
        if(user.startdate){
            res.send("Ima")
        }else{
            db.users.update({_id:mongojs.ObjectID(id)},{
                $set:{
                    startdate:new Date().toISOString(),
                    today:0,
                    total:0,
                    last:0
                }
            },(err,docs) => {
                res.send("First time")
            }
            )
        }

    }
    )

    
}

module.exports = checkDate;