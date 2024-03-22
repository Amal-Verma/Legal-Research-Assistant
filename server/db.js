const mongoose  = require("mongoose");

module.exports =  () => {
  mongoose.connect("mongoDbLink")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });
}


// yEEAV0NNqvShFD1R
