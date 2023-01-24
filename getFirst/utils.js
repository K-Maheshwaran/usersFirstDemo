const { writeFile } = require("fs/promises");
async function writeDataToFile(fileName, content) {
  try {
    await writeFile(fileName, JSON.stringify(content));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  writeDataToFile,
};
