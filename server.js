const http = require("http");
const PORT = 8000;

const server = http.createServer((req, res) => {
  //ブラウザからアクセスが来たときの処理
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Gabriel</h1>");
  res.end();
} );

server.listen(PORT, () => {
  console.log("server running!");
});