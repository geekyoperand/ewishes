var express = require("express");
var router = express.Router();
const ipInfo = require("ipinfo");
const UserService = require("../services/user");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const ipAddress =
    req.headers["ip-address"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress;
  await ipInfo(ipAddress, async (err, data) => {
    if (err) {
      console.log("Error: ", err.message);
    }
    let name = req.query.n || "[Your_NAME]";
    await UserService.newUser({
      name,
      ...data
    });
    res.render("index", { name: name });
  });
});

module.exports = router;
