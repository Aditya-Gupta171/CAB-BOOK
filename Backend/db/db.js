const mongoose = require("mongoose");

function connect() {
  return mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
    });
}

module.exports = connect;
