const http = require("http");

const data = { name: "heel" };

const server = http.createServer((req, res) => {
  console.log("Jay Shree Ram");
  res.setHeader("dummy", "dummyValue");
  res.setHeader("Content-Type", "application/json");
  // res.end('<h1 style="color:red">Ram Ram Ji</h1>')
  res.end(JSON.stringify(data));
});

server.listen(8080);
