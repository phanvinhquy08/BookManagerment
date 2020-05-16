const express = require("express");

const router = express.Router();
const controller = require("../controller/books.controller");
const validate = require("../validate/books.validate");
const authMiddleware = require("../middleware/auth.middleware")

router.get('/',authMiddleware.requireAuth, controller.index);
router.get('/add', controller.add);
router.get('/delete/:id', controller.delete);
router.get('/edit/:id', controller.edit);
router.post("/add",validate.postAdd, controller.postAdd)
router.post("/edit/:id", controller.postEdit)

module.exports = router;