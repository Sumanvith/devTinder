const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:1N2uqOk4HESvczUJ@namastenode.mal27.mongodb.net/devTinder"
  );
};

module.exports = {
  connectDB,
};
