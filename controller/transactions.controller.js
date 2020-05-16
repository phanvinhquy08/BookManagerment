const db = require("../db");
const shortid = require("shortid");

module.exports.index = (req, res) => {
    const { transactions } = res.locals;
    res.render("transactions/index", { transactions });
}
module.exports.add = (req, res) => {
    const books = db.get("books").value();
    const users = db.get("users").value();
    res.render("transactions/create", { books, users });
}
module.exports.postAdd = (req, res) => {
    const { user, book } = req.body;
    console.log(user, book)
    db.get("transactions").push({ id: shortid.generate(), user, book, isComplete: false }).write();
    res.redirect("/transactions");
}
module.exports.complete = (req, res) => {
    const id = req.params.id;
    const transaction = db.get("transactions").find({ id }).value();
    res.render("transactions/complete", { transaction })
}
module.exports.postComplete = (req, res) => {
    const id = req.params.id;
    const isComplete = req.body.hasOwnProperty("status") ? true : false
    db.get("transactions").find({ id }).assign({ isComplete }).write();
    res.redirect("/transactions")
}