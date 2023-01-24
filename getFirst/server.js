const http = require("http");
const {
  getUsers,
  getUser,
  createUser,
} = require("./controller/userController");

const PORT = process.env.PORT || 8080;

const requestListener = function (req, res) {
  if (req.url === "/users" && req.method === "GET") {
    getUsers(req, res);
  } else if (req.url.match(/\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[2];
    getUser(req, res, id);
  } else if (req.url.match("/users") && req.method === "POST") {
    const id = req.url.split("/")[2];
    createUser(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
};

const server = http.createServer(requestListener);

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server Running At PORT ${PORT}`);
});
