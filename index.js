const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

require("./configs/database");

app.use(express.json());

app.use(cors());

const StudentRouter = require("./Routers/StudentRouter");

app.use("/api/Students", StudentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
