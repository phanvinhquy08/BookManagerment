const db = require("../db");
const shortid = require("shortid");

module.exports.index = (req, res) => {
    const users = db.get("users").value();
    res.render("users/index", { users })
}
module.exports.add = (req, res) => {
    res.render('users/create')
}
module.exports.edit = (req, res) => {
    const id = req.params.id;
    const user = db.get('users').find({ id }).value();
    res.render('users/edit', { user })
}
module.exports.postAdd = (req, res) => {
    const { name } = req.body;
    db.get("users").push({ id: shortid.generate(), name }).write();
    res.redirect("/users")
}
module.exports.postEdit = (req, res) => {
    const id = req.params.id;
    const { name } = req.body
    db.get("users").find({ id }).assign({ name }).write();
    res.redirect("/users");
}
module.exports.delete = (req, res) => {
    const id = req.params.id;
    db.get("users").remove({id}).value();
    res.redirect("/users")
}