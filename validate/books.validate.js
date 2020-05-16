module.exports.postAdd = (req, res, next) => {
    const { title, description } = req.body;
    const errors = [];
    if (!title) {
        errors.push("Title must be required")
    }
    if (!description) {
        errors.push("Description must be require")
    }
    if (errors.length) {
        res.render("books/create", { errors , values: req.body});
        return;
    }
    next();
}