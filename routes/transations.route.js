const express = require("express");


const router = express.Router();
const controller = require("../controller/transactions.controller");

router.get('/', controller.index)
router.get("/add", controller.add)
router.post("/add", controller.postAdd)
router.get("/:id/complete", controller.complete)
router.post("/:id/complete", controller.postComplete)

module.exports = router;