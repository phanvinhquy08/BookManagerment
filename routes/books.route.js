const express = require("express");

const router = express.Router();
const controller = require("../controller/books.controller");

router.get('/', controller.index);
router.get('/add', controller.add);
router.get('/delete/:id', controller.delete);
router.get('/edit/:id', controller.edit);
router.post("/add", controller.postAdd)
router.post("/edit/:id", controller.postEdit)

module.exports = router;