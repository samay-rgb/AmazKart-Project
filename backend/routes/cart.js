const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  res.send("Cart Section");
});
router.post("/getcartitems" ,async (req, res) => {
  const email = req.body.email;
  const id = email.slice(1,email.length-1);
  db.query(
      "SELECT * FROM cart WHERE email=?",[id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  })
router.post("/addtocart", async (req,res) =>{
    const pid = req.body.props.pid;
    const price = req.body.props.price;
    const name = req.body.props.name;
    const img_url = req.body.props.img_url;
    const email = req.body.email;
    const id = email.slice(1,email.length-1);
    db.query("INSERT INTO cart(pid,pname,quantity,price,email,img_url) VALUE (?,?,?,?,?,?)",[pid,name,1,price,id,img_url],(err,result)=>{
        if (err) {
            console.log(err);
          } else {
            res.send("Product added to cart");
          }
    });
});
router.post("/removefromcart", async (req,res) =>{
    const id = req.body.id;
    db.query("DELETE FROM cart WHERE cart_id = ?",[id],(err,result)=>{
        if (err) {
            console.log(err);
          } else {
            res.send("Product removed from cart");
          }
    });
});
router.post("/increaseQty", async (req,res)=>{
    const quantity = req.body.quantity;
    const id = req.body.id;
    db.query("UPDATE cart SET quantity = ? WHERE cart_id=?",[quantity,id],(err,result)=>{
        if (err) {
          console.log(err);
        } else {
          res.send("Quantity increased");
        }
    });
});
router.post("/decreaseQty", async (req,res)=>{
  const quantity = req.body.quantity;
  const id = req.body.id;
  db.query("UPDATE cart SET quantity = ? WHERE cart_id=?",[quantity,id],(err,result)=>{
      if (err) {
        console.log(err);
      } else {
        res.send("Quantity decreased");
      }
  });
});
module.exports = router;