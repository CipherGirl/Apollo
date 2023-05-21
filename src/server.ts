const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Database connection

main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log(`Database conntection successfull`)
  }
  catch (err) {
    console.log(`Failed to connect`, err);
  }
}

main();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})