const fs = require("fs");

// Specify the file paths
const setDataPath = "../setData.json"; // Adjust the path as needed
const oldDataPath = "../oldData.json"; // Adjust the path as needed

// Load the JSON data from files
const setData = require(setDataPath);
const oldData = require(oldDataPath);

// Function to update themes
function updateThemes() {
  // Loop through setData and update themes based on oldData
  setData.forEach((set) => {
    const matchingOldData = oldData.find((oldSet) => oldSet.set_num === set.set_num);
    if (matchingOldData) {
      set.theme = matchingOldData.theme;
    }
    console.log(setData);
  });

  // Save the updated data back to setData.json
  fs.writeFileSync(setDataPath, JSON.stringify(setData, null, 2), "utf-8", (err) => {
    if (err) {
      console.error("Error writing setData.json:", err);
    } else {
      console.log("Themes updated and saved to setData.json");
    }
  });
}

// Call the updateThemes function
updateThemes();
