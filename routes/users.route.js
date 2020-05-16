const express = require("express");
const router = express.Router();

const controller = require("../controller/users.controller");
const validate = require("../validate/users.validate");
const authMiddleware = require("../middleware/auth.middleware")

router.get('/', authMiddleware.requireAuth, authMiddleware.requireAdmin, controller.index);
router.get('/add', controller.add);
router.get('/edit/:id', controller.edit)
router.post('/add', validate.postAdd, controller.postAdd)
router.post('/edit/:id', controller.postEdit)
router.get('/delete/:id', controller.delete)

module.exports = router;