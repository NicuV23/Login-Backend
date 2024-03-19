const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "test",
    database: "loginformytvideo",
  },
});

const app = express();
const intialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(intialPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(intialPath, "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(intialPath, "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(intialPath, "register.html"));
});

app.post("/register-user", (req, res) => {
  // Codul pentru înregistrare utilizator
});

app.post("/login-user", (req, res) => {
  // Codul pentru autentificare utilizator
});

app.listen(3000, () => {
  console.log("Serverul ascultă pe portul 3000...");
});
