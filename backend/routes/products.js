const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  res.send("Hello there");
});
router.get("/getproducts", async (req, res) => {
  db.query("SELECT * from products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
router.get("/getlaptops", async (req, res) => {
  db.query(
    "SELECT * FROM products WHERE category LIKE 'Laptop'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
router.post("/getSellerItems", async (req, res) => {
  const seller_id =  req.body.seller_id;
  const id = seller_id.slice(1, seller_id.length-1)
  db.query("SELECT * FROM products WHERE seller_id = ?",[id] ,(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
router.get("/getphones", async (req, res) => {
  db.query(
    "SELECT * FROM products WHERE category LIKE 'Smartphone'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
router.get("/getcamera", async (req, res) => {
  db.query(
    "SELECT * FROM products WHERE category LIKE 'Camera'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
router.get("/getwireless", async (req, res) => {
  db.query(
    "SELECT * FROM products WHERE category LIKE 'Wireless'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
})
router.post("/addproducts", async (req, res) => {
  const pname = req.body.pname;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const img_url = req.body.img_url;
  const category = req.body.category;
  const description = req.body.description;
  const seller_id =  req.body.seller_id;
  const id = seller_id.slice(1, seller_id.length-1)
  db.query(
    "INSERT INTO products(pname,price,quantity,category,img_url,description,seller_id) VALUES (?,?,?,?,?,?,?)",
    [pname, price, quantity, category, img_url, description,id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Product added successfuly");
      }
    }
  );
});
module.exports = router;
