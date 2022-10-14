import express from "express";
import user_data from "../model/index.js";

const router = express.Router();
//-----------create user--------------------------------------------
router.post("/create_user", async (req, res) => {
  const email = req.body.email;
  try {
    const user_found = await user_data.findOne({ email: email }, req.body);

    if (user_found) {
      res.send("email already exist");
    } else {
      const create_user = await user_data.create(req.body);
      res.send("new user created succssesfully");
    }
  } catch (error) {
    console.log("error", error);
    res.json(error);
  }
});

//------------------login user-----------------------------------

router.post("/login_user", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user_login = await user_data.find({ email, password });
    if (user_login.length) {
      console.log("user_login:", user_login);
      res.json(user_login);
    } else {
      console.log("user not found");
      res.send("user not found");
    }
  } catch (error) {
    console.log("error:", error);
    res.send(error);
  }
});

router.put("/update_user", async (req, res) => {
  const email = req.body.email;
  try {
    const updated_user = await user_data.updateOne({ email: email }, req.body);
    res.json({ updated_user });
  } catch (error) {
    res.json(err);
  }
});

export default router;
