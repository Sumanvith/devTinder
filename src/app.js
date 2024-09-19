const { connectDB } = require("./config/database");
const express = require("express");
const User = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "sumanvith",
    lastName: "gp",
    emailId: "test@test.com",
    password: "123456",
  });
  try {
    await user.save();
    res.send("User added to database");
  } catch (err) {
    res.status(400).send("error saving the user data: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Connected");
    app.listen(3000, () => {
      console.log("running");
    });
  })
  .catch((err) => {
    console.log("Not Connected");
  });
