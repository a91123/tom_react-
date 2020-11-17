const express = require("express");
const router = express.Router();
const db = require("../database");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const multer = require("multer");
const upload = multer({ dest: "tmp_upload" });
const fs = require("fs");

router.post("/get-db", jsonParser, async (req, res) => {
  let orderBy = "";
  let sql = "";
  switch (parseInt(req.body.Options)) {
    default:
    case 0:
      orderBy = " ORDER BY Specialoffer DESC ";
      break;
    case 1:
      orderBy = " ORDER BY Specialoffer ";
      break;
    case 2:
      orderBy = " ORDER BY Selling  ";
      break;
    case 3:
      orderBy = " WHERE  Specialoffer < price ";
      break;
  }
  sql = "SELECT * FROM `product` " + orderBy;
  if (req.body.inputSearch) {
    sql =
      "SELECT * FROM `product` WHERE `name` LIKE " +
      `'%${req.body.inputSearch}%'` +
      orderBy;
  }
  //解構付值
  const [results] = await db.query(sql);

  res.json(results);
  console.log(results);
});
router.post("/upload-photo", upload.single("imgurl"), (req, res) => {
  if (req.file && req.file.originalname) {
    switch (req.file.mimetype) {
      case "image/png":
      case "image/jpeg":
      case "image/gif":
        fs.rename(
          req.file.path,
          __dirname + "/../../public/img/" + req.file.originalname,
          (error) => {
            return res.json({
              success: true,
              path: "/img/" + req.file.originalname,
              req: req.file,
            });
          }
        );

        break;
      default:
        fs.unlink(req.file.path, (error) => {
          return res.json({
            msg: "不是圖檔",
          });
        });
    }
  } else {
    return res.json({
      msg: "沒有上傳檔案",
    });
  }
});
router.use("/ProductData", jsonParser, async (req, res) => {
  let sql = "SELECT * FROM product ";
  if (req.body.inputSearch) {
    sql =
      "SELECT * FROM `product` WHERE `name` LIKE " +
      `'%${req.body.inputSearch}%'`;
  }
  console.log(req.body);
  const [results] = await db.query(sql);

  res.json(results);
});
router.use("/ProductData/:sid", async (req, res) => {
  let sql = "SELECT * FROM product WHERE sid=?";
  const [results] = await db.query(sql, [req.params.sid]);
  res.json(results);
});
router.post("/edit/:sid", jsonParser, async (req, res) => {
  const data = { ...req.body };
  const sql = "UPDATE `product` SET ? WHERE sid=?";
  res.json("ok");
  console.log(req.params.sid);
  await db.query(sql, [data, parseInt(req.params.sid)]);
  console.log(data);
});
router.post(
  "/addProduct",
  jsonParser,
  upload.single("imgurl"),
  async (req, res) => {
    const data = { ...req.body };
    let sql = "INSERT INTO `product` set ?";
    await db.query(sql, [data]);
    console.log(data);

    res.json("ok");
  }
);

router.delete("/del/:sid", async (req, res) => {
  const sql = "DELETE FROM `product` WHERE sid=?";
  console.log(req.params.sid);
  const [results] = await db.query(sql, [req.params.sid]);
  res.json([results]);
});

module.exports = router;
