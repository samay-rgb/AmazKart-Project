const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "darthskywalker";

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array()[0].msg });
    }
    try {
      // console.log(email);
      useremail = `"${req.body.email}"`;

      // if (data.length === 0) {
      const salt = await bcrypt.genSalt(10);
      //const email = String(req.body.email);
      const secPas = await bcrypt.hash(req.body.password, salt);
      db.query(
        "INSERT INTO user(name,password,email,role) VALUES (?,?,?,?)",
        [req.body.name, secPas, useremail, req.body.role],
        (err, result) => {
          if (err) {
            console.log(err);
            res.send({ success, errors: "User with given email exists" });
          } else {
            // console.log(result);
            const data = {
              user: {
                id: useremail,
              },
            };
            success = true;
            const authtoken = jwt.sign(data, JWT_SECRET);
            res.json({ success, authtoken });
          }
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
  }
);
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array()[0].msg });
    }
    const { email, password } = req.body;
    useremail = `"${email}"`;
    try {
      db.query(
        "SELECT * FROM user WHERE email =?",
        [useremail],
        async (err, result) => {
          if (err) {
            return res
              .status(400)
              .json({ success, errors: "Wrong email id or password" });
          } else {
            //const rpass = result[0].password;
            // console.log(rpass);
            if (result.length === 0) {
              return res
                .status(400)
                .json({ success, errors: "Wrong email id or password" });
            } else {
              const passwordCompare = await bcrypt.compare(
                password,
                result[0].password
              );
              if (!passwordCompare) {
                return res
                  .status(400)
                  .json({ success, errors: "Wrong password" });
              }
              success = true;
              const data = {
                user: {
                  id: result[0].email,
                },
              };
              //console.log(data.user.id);
              const authtoken = jwt.sign(data, JWT_SECRET);
              res.json({ success, authtoken });
            }
          }
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const useremail = req.user.id;
    // console.log(req.user.id);
    db.query(
      "SELECT name,email,role,approved FROM user WHERE email = ?",
      [useremail],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          //  console.log(result);
          res.send(result[0]);
        }
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/buyerinfo", fetchuser, async (req, res) => {
  let success = false;
  try {
    let useremail = req.user.id;
    useremail = useremail.slice(1, useremail.length - 1);
    const email = `"${useremail}"`;
    console.log(useremail);
    // console.log(req.user.id);
    db.query(
      "INSERT INTO buyer(email,pincode,address,contact) VALUES(?,?,?,?)",
      [email, req.body.pincode, req.body.address, req.body.contact],
      (err, result) => {
        if (err) {
          console.log(useremail);
          console.log(err);
        } else {
          success = true;
          //  console.log(result);
          res.send({ success, msg: "Buyer info added successfully" });
        }
      }
    );
  } catch (error) {
    //console.log("logging error from here");
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/sellerinfo", fetchuser, async (req, res) => {
  let success = false;
  try {
    let useremail = req.user.id;
    useremail = useremail.slice(1, useremail.length - 1);
    const email = `"${useremail}"`;
    // console.log(req.user.id);
    db.query(
      "INSERT INTO seller(email,w_address,w_pincode,w_contact,w_state,ac_number,ifsc_code) VALUES (?,?,?,?,?,?,?)",
      [
        email,
        req.body.address,
        req.body.pincode,
        req.body.contact,
        req.body.state,
        req.body.acno,
        req.body.ifsc,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          success = true;
          //  console.log(result);
          res.send({ success, msg: "Buyer info added successfully" });
        }
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/isApproved", fetchuser, async (req, res) => {
  try {
    const useremail = req.user.id;
    // console.log(req.user.id);
    db.query(
      "SELECT approved FROM seller WHERE email = ?",
      [useremail],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          //  console.log(result);
          res.send(result[0]);
        }
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
