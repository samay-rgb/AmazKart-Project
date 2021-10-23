const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  res.send("User");
});

router.post("/getseller", async (req,res)=>{
    db.query("SELECT * FROM seller",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
});
router.post("/getbuyer", async (req,res)=>{
    db.query("SELECT * FROM buyer",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
});
module.exports = router;