const express = require("express");
const router = express.Router();
const { creategroup, getAllGroup } = require("../controllers/group");

router.post("/creategroup", creategroup);
router.get("/getallgroup", getAllGroup);

module.exports = router;
