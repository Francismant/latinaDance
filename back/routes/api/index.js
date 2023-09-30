const router = require("express").Router();
const apiUsers = require("./users");
const apiDances = require("./dances");

router.use("/users", apiUsers);
router.use("/dances", apiDances);

module.exports = router;