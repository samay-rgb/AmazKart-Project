const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const port = 3001;
const db = require("./db");
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
app.use("/product", require("./routes/products"));
app.use("/auth", require("./routes/auth"));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
