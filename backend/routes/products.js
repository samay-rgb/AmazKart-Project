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
router.get("/getSellerItems/:id", async (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM products WHERE seller = ${id}`, (err, result) => {
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

router.post("/addproducts", async (req, res) => {
  const pname = req.body.pname;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const img_url = req.body.img_url;
  const category = req.body.category;
  const description = req.body.description;
  db.query(
    "INSERT INTO products(pname,price,quantity,category,img_url,description,seller_id) VALUES (?,?,?,?,?,?,?)",
    [pname, price, quantity, category, img_url, description, 213],
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
