//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password = "";

app.use(bodyParser.urlencoded({ extended: true }));

function GetPassword(req, res, next) {
  password = req.body["password"];
  next();
}

function checkPassword(req, res) {
  if (password == "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.send("<script>alert('Wrong Password');</script>");
  }
}

app.use(GetPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", checkPassword);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});