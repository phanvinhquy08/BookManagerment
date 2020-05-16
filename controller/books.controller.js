const db = require("../db");
const shortid = require("shortid");

module.exports.index = (req, res) => {
    const books = db.get("books").value();
    res.render("books/index", { books })
}
module.exports.add = (req, res) => {
    res.render('books/create');
}
module.exports.delete = (req, res) => {
    const id = req.params.id;
    db.get("books").remove({ id }).write();
    res.redirect("/books")
}
module.exports.edit = (req, res) => {
    const id = req.params.id;
    const book = db.get("books").find({ id }).value();
    res.render("books/edit", { book })
}
module.exports.postAdd = (req, res) => {
    const { title, description } = req.body;
    db.get("books").push({ id: shortid.generate(), title, description }).write();
    res.redirect("/books")
}
module.exports.postEdit = (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    db.get("books").find({ id }).assign({ title, description }).write();
    res.redirect("/books")
}