const { rejects } = require("assert");
const fs = require("fs");
const page = require("../src/page")

// Function that takes data from the answered prompts and creates the index.html file in the dist folder
const createFile = (data) => {
  fs.writeFile('./dist/index.html', page(data), err => {
    if (err) {
      rejects(err);
      return;
    } else {
      console.log("Created file successfully")
    }
  })
}

module.exports = { createFile };