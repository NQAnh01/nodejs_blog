const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/blog_dev");
    console.log("connect succeeded");
  } catch (error) {
    console.log("error: " + error);
  }
}
module.exports = { connect };
