const fs = require("fs");
const fsPromise = require("fs/promises");
const path = require("path");

// const writeFile = async (firstName, lastName) => {
//   try {
//     if (!fs.existsSync(path.join(__dirname, "users"))) {
//       await fsPromise.mkdir(path.join(__dirname, "users"));
//       console.log("Dir Created!!!");
//     }
//     if (
//       !fs.existsSync(
//         path.join(__dirname, "users", `${firstName}-${lastName}.txt`)
//       )
//     ) {
//       console.log("File First Created");
//       await fsPromise.writeFile(
//         path.join(__dirname, "users", `${firstName}-${lastName}.txt`),
//         "Hi Hello\n"
//       );
//     }
//     console.log("File already Created");
//     await fsPromise.appendFile(
//       path.join(__dirname,"users", `${firstName}-${lastName}.txt`),

//       `${Math.random() * 10}\n`
//     );
//     console.log("Write Success!!!");
//   } catch (err) {
//     console.log("err", err);
//   }
// };

// setInterval(() => {
//   const userId = Math.floor(Math.random() * 5);
//   writeFile(userId, userId * 2);
// }, 3000);

// const readFileData = async () => {
//     const ReadData = await fsPromise.readFile(path.join(__dirname,'demo.txt'),'utf-8')
//     console.log(ReadData);
// };

// readFileData();

const newData = "Hello Nice!!!";

const fileFunction = async () => {
  try {
    if (fs.existsSync(path.join(__dirname, "demo.txt"))) {
      const readData = await fsPromise.readFile(
        path.join(__dirname, "demo.txt"),
        "utf-8"
      );
      await fsPromise.writeFile(path.join(__dirname, "demo1.txt"), readData);
      await fsPromise.appendFile(path.join(__dirname, "demo1.txt"), newData);
      await fsPromise.rename(
        path.join(__dirname, "demo1.txt"),
        path.join(__dirname, "demo2.txt")
      );
      await fsPromise.unlink(path.join(__dirname, "demo.txt"));
    }
  } catch (error) {
    console.log("E=>", error);
  }
};

fileFunction();
