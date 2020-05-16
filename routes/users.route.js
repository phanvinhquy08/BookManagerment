const express = require("express");
const router = express.Router();

const controller = require("../controller/users.controller");

router.get('/', controller.index);
router.get('/add', controller.add);
router.get('/edit/:id', controller.edit)
router.post('/add', controller.postAdd)
router.post('/edit/:id', controller.postEdit)
router.get('/delete/:id',controller.delete)

module.exports = router;