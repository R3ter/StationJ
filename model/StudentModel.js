const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: String,
  age: Number,
  paymentStatus: Boolean,
  residence: String,
  cityAccessPermit: Boolean,
});

module.exports = mongoose.model("Student", StudentSchema);
