const Users = require("../models/usersModal");

async function getUsers(req, res) {
  try {
    const users = await Users.findAll();
    const totalUsers = users?.length;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ count: totalUsers ?? 0, data: users }));
  } catch (error) {
    console.log("Error", error);
  }
}

async function getUser(req, res, id) {
  try {
    const user = await Users.findById(id);
    if (!user) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "User not found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    }
  } catch (error) {
    console.log(error);
  }
}

async function createUser(req, res) {
  try {
    let body = "";
    req.on("data", (data) => {
      body += data.toString();
    });
    req.on("end", async () => {
      const { first_name, last_name } = JSON.parse(body);
      const newUser = {
        first_name,
        last_name,
      };
      const savedUser = await Users.save(newUser);
      if (!savedUser) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User Not Created" }));
      } else {
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            message: "User Created Successfully",
            data: savedUser,
          })
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
};
