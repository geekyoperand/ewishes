var express = require("express");
var router = express.Router();
const geoip = require("geoip-lite");
const UserService = require("../services/user");
/* GET home page. */
router.get("/", async (req, res, next) => {
  const ipAddress = req.headers["ip-address"];
  const geo = (await geoip.lookup(ipAddress)) || {};
  const { city, country, region, timezone } = geo;
  let name = req.query.n || "[Your_NAME]";
  await UserService.newUser({
    city,
    country,
    region,
    timezone,
    ipAddress,
    name
  });
  res.render("index", { name: name });
});

module.exports = router;
