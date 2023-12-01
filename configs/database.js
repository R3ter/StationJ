const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://waleed23:ZQFnl1S51BzpWBrw@cluster0.wvgdcdz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to DB"));
