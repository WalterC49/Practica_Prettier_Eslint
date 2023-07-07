const express = require("express");
const app = express();
const PORT = 3000;

// probando prettier
const fn = a => {
  console.log(a);
};

fn(2);

app.get("/", (req, res) => {
  res.send("¡Hola Mundo!");
});

app.listen((req, res) => {
  console.log(`Server at http://localhost:${PORT}`);
});
