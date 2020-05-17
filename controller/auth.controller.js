const bcrypt = require('bcrypt');
const db = require("../db");

module.exports.login = (req, res, next) => {
    res.clearCookie("userId");
    res.render("auth/index");
}
module.exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;
    const user = db.get("users").find({ email }).value();
    if(!email) {
        res.render("auth/index", {
            errors: ["Email is required"] ,
            values: req.body
        })
        return;
    }
    if(!password) {
        res.render("auth/index", {
            errors: ["Password is required"] ,
            values: req.body
        })
        return;
    }
    if(!user) {
        res.render("auth/index", {
            errors: ["Email does not exist"] ,
            values: req.body
        })
        return;
    }
    bcrypt.compare(password, user.password, function(err, result) {
        if(result) {
            res.cookie("userId", user.id);
            res.redirect("/");
        }
        else {
            db.update("loginCount", n => n + 1).write();
            if(db.get("loginCount").value() >= 4) {
                res.render("auth/index", {
                    errors: ["You had login fall 4 times"],
                    values: req.body
                })
            }
            res.render("auth/index", {
                errors: ["Wrong password"],
                values: req.body
            })
            return;
        }
    });

}