require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 8081;

//hbs
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//serve static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { title: "Home", name: "Camilo Rivera" });
});

app.get("/hello", (req, res) => {
  res.send("hello route");
});

app.get("/generic", (req, res) => {
  res.render("generic", { title: "generic", name: "Camilo Rivera" });
});

app.get("/elements", (req, res) => {
  res.render("elements", { title: "elements", name: "Camilo Rivera" });
});

app.get("*", (req, res) => {
  res.render("404", { title: "not found" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
