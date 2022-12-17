var express = require("express");
const {
  getData,
  getDataById,
  saveData,
  updateData,
  deleteData,
} = require("../controllers/controller");
var router = express.Router();

/* GET home page. */
router.get("/", getData);
router.post("/id", getDataById);
router.post("/save", saveData);
router.post("/update", updateData);
router.post("/delete", deleteData);

module.exports = router;
