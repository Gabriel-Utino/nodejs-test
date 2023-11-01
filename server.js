var express = require("express");
var app = express();
var PORT = 3000;

app.get("/", (req, res) => {
  console.log("hello gabriel");
  res.send("こんにちは");
})

var





app.listen(PORT, () => console.log("サーバー起動"));

