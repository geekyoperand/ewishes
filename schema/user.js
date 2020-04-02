var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: { type: String },
  ipAddress: { type: String },
  city: { type: String },
  country: { type: String },
  region: { type: String },
  timezone: { type: String }
});
module.exports = mongoose.model("User", UserSchema);
