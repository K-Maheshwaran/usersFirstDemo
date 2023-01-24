const fs = require("fs");

const readingFileData = () => {
  try {
    fs.readFile("./add.js", "utf-8", (error, data) => {
      console.log("data =>", data);
    });
  } catch (error) {
    console.log("Error => ", error.message);
  }
};

readingFileData();
