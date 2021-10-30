const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  res.send("Cart Section");
});
router.post("/getcartitems",async (req, res) => {
  db.query(
      "SELECT * FROM cart",
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
    const p_quantity = req.body.props.quantity;
    console.log("p_quantity : "+p_quantity);
    const id = email.slice(1,email.length-1);
    db.query("INSERT INTO cart(pid,pname,quantity,price,email,img_url,p_quantity) VALUE (?,?,?,?,?,?,?)",[pid,name,1,price,id,img_url,p_quantity],(err,result)=>{
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
router.post("/order", async (req,res)=>{
  const email = req.body.email;
  const id = email.slice(1,email.length-1);
  const today = new Date().toISOString().slice(0, 10);
  db.query("INSERT INTO orders(pid,pname,quantity,total,date,buyer_email) (SELECT pid,pname,quantity,total,?,email from cart WHERE email=?)",[today,id],(err,result)=>{
    if (err) {
      console.log(err);
    } else {
      res.send("Order placed");
    }
    });
});
router.post("/updateinventory", async (req,res)=>{
  const email = req.body.email;
  const id = email.slice(1,email.length-1);
  db.query("update products pd,orders od,(select distinct o.pid as pid,sum(o.quantity) as t_qty from orders o,products p where (o.pid = p.pid and o.buyer_email = ? and o.status='pending') group by o.pid) as ordersQty set pd.quantity = (pd.quantity - ordersQty.t_qty),od.status='dispatched' where pd.pid = ordersQty.pid;",[id],(err,result)=>{
    if (err) {
      console.log(err);
    } else {
      res.send("Inventory Updated");
    }
    });
});
router.post("/clearcart", async (req,res)=>{
  const email = req.body.email;
  const id = email.slice(1,email.length-1);
  db.query("DELETE FROM cart where email=?",[id],(err,result)=>{
    if (err) {
      console.log(err);
    } else {
      res.send("Order placed");
    }
    });
});
module.exports = router;