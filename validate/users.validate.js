const db = require("../db");

module.exports.postAdd = (req, res, next) => {
    const { name, email, password } = req.body;
    let errors = [];
    const user = db.get("users").find({ email }).value();
    if (!name) {
        errors.push("name is required");
    }
    if (!email) {
        errors.push("email is required");
    }
    if (!password) {
        errors.push("password is required");
    }
    if (user) {
        errors.push("Email already taken");
    }
    if (name.length > 30) {
        errors.push("name must be less 30 character")
    }
    if (errors.length) {
        res.render('users/create', { errors, values: req.body })
        return;
    }
    next();
}