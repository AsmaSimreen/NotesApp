const mongoose = require("mongoose");
const keys = require("./keys");
require("dotenv").config();
/**
 * @description Database Connection
 * @author Pranish
 * @function
 */
async function dbConnect() {
  try {
    await mongoose.connect("mongodb+srv://asma:simmu1234@cluster0.uockj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports = dbConnect;