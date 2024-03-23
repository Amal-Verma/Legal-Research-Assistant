const mongoose  = require("mongoose");

module.exports =  () => {
  mongoose.connect("mongodb+srv://TestUser:yEEAV0NNqvShFD1R@cluster0.erolmtc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });
}


// yEEAV0NNqvShFD1R
