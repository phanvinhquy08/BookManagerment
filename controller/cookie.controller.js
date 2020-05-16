const db = require("../db");

module.exports.countCookie = (req, res, next) => {
    db.update("cookieCount", n => n + 1).write();
    const count = db.get("cookieCount").value();
    console.log(count);
    next();
}