const db = require("../db");

module.exports.requireAuth = (req, res, next) => {
    if (!req.cookies.userId) {
        res.redirect("/auth/login");
        return;
    }
    const user = db.get("users").find({ id: req.cookies.userId }).value();
    if (!user) {
        res.redirect("/auth/login");
        return;
    }
    next();
}
module.exports.requireAdmin = (req, res, next) => {
    const user = db.get("users").find({ id: req.cookies.userId }).value();
    const transactions = db.get("transactions").value();
    const transactionfilter = transactions.filter(x => x.user === user.name)
    if (user.position !== "admin") {
        res.locals.transactions = transactionfilter;
        res.render("transactions", {transactions: transactionfilter})
    }
    else {
        res.locals.transactions = transactions;
        next();
    }
}