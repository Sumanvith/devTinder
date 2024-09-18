const express = require("express");
const app = express();

app.get("/user/:userid", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Sumanvith", lastName: "GP" });
});

app.post("/user", (req, res) => {
  res.send("Data sent");
});

app.delete("/user", (req, res) => {
  res.send("Deleted");
});

app.use("/test", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("running");
});
