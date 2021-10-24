const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  res.send("User");
});

router.post("/getpendingseller", async (req,res)=>{
    db.query("SELECT distinct u.name,u.email,s.w_state,s.w_address,s.w_pincode FROM user u inner join seller s on u.email=s.email WHERE (u.approved=0 and u.role='Seller')",(err, result) => {
        if (err) {
          console.log(err);
        } else {

          res.send(result);
        }
      });
});
router.post("/approveseller", async (req,res)=>{
  const email = req.body.email;
  db.query("UPDATE user SET approved=1 WHERE email=?",[email],(err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Seller Approved");
      }
    });
});
router.post("/rejectseller", async(req,res)=>{
    const email = req.body.email;
    db.query("delete user,seller from user inner join seller on user.email = seller.email where seller.email=?",[email],(err,result)=>{
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