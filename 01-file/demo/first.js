const path = require("path");

console.log("\nDirectory Name => ", __dirname);
console.log("Filename Name => ", __filename, "\n");

console.log("--basename", path.basename(__dirname));
console.log("--basename", path.basename(__filename),"\n");

console.log("--dirname", path.dirname(__dirname), "\n");
console.log("--dirname", path.dirname(__filename), "\n");

console.log("--extname", path.extname(__dirname), "\n");
console.log("--extname", path.extname(__filename), "\n");  

console.log("--parse", path.parse(__dirname), "\n");
console.log("--parse", path.parse(__filename), "\n");
