const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nub_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error: " + err);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = db;
