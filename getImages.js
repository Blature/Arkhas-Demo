const fs = require("fs");
const path = require("path");

const carsDir = "f:/Arkhas-Demo/public/assets/cars";
const result = {};

fs.readdirSync(carsDir, { withFileTypes: true }).forEach(dirent => {
  if (dirent.isDirectory()) {
    const images = fs.readdirSync(path.join(carsDir, dirent.name))
                     .filter(f => f.endsWith(".jpg"))
                     .map(f => `/assets/cars/${dirent.name}/${f}`);
    result[dirent.name] = images;
  }
});

console.log(JSON.stringify(result, null, 2));
