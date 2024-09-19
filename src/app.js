const { connectDB } = require("./config/database");
const express = require("express");
const User = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added to database");
  } catch (err) {
    res.status(400).send("error saving the user data: " + err.message);
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Something went wrong ");
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
