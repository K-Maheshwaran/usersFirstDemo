let users = require("../data/data.json");
const { writeDataToFile } = require("../utils");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
}

function findById(id) {
  const singleUser = users.find((user) => user.id === Number(id));
  return new Promise((resolve, reject) => {
    resolve(singleUser);
  });
}

async function save(userData) {
  return new Promise((resolve, reject) => {
    const newUser = { id: new Date().getMilliseconds() * 1000, ...userData };
    users.push(newUser);
    writeDataToFile("./data/data.json", users);
    resolve(newUser);
  });
}

module.exports = {
  findAll,
  findById,
  save,
};
