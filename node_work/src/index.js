const express = require("express");
const app = express();
const db = require(__dirname + "/database");
const cors = require("cors");
const multer = require("multer");
app.use(express.static("public"));
app.use(cors());
const product = require("./routes/product");
app.use("/product", product);
app.listen(3000, function () {
  console.log("啟動 server 偵聽埠號 3000");
});
