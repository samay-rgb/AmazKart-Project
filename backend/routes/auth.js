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
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      // console.log(email);
      useremail = `"${req.body.email}"`;

      // if (data.length === 0) {
      const salt = await bcrypt.genSalt(10);
      //const email = String(req.body.email);
      const secPas = await bcrypt.hash(req.body.password, salt);
      db.query(
        "INSERT INTO user(name,password,email) VALUES (?,?,?)",
        [req.body.name, secPas, useremail],
        (err, result) => {
          if (err) {
            res.send("User with given email exists");
          } else {
            // console.log(result);
            const data = {
              user: {
                id: useremail,
              },
            };
            success = true;
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({ success, authToken });
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
    body("password", "Password must be atleast 5 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
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
              .json({ success, error: "Wrong email id or password" });
          } else {
            //const rpass = result[0].password;
            // console.log(rpass);
            if (result.length === 0) {
              return res
                .status(400)
                .json({ success, error: "Wrong email id or password" });
            } else {
              const passwordCompare = await bcrypt.compare(
                password,
                result[0].password
              );
              if (!passwordCompare) {
                return res
                  .status(400)
                  .json({ success, error: "Wrong password" });
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
      "SELECT name,email FROM user WHERE email = ?",
      [useremail],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          res.send(result);
        }
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
