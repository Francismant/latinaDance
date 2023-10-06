const router = require("express").Router();
const apiUsers = require("./users");
const apiDances = require("./dances");
const apiProfile = require("./profile");

router.use("/users", apiUsers);
router.use("/dances", apiDances);
router.use("/profile", apiProfile);

module.exports = router;
