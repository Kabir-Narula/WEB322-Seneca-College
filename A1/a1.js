/*********************************************************************************
 * WEB322 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Kabir Narula Student ID: 127962223 Date: 8 September 2023
 *
 ********************************************************************************/


const fs = require("fs"); // It provides function to interact with filesystem...
const readline = require("readline-sync"); // it allows to read input....

// User Input----------------------------------------------------------------
const userInput = readline.question(
  "Do you wish to process a File (f) or directory (d): "
); // we ask for user input in this code...

if (userInput === "f") {
  // if user press [F] then...
  // Process a file
  const fileName = readline.question("Enter the file name: "); // we ask for the file name from the user // expected [post.txt]
  processFile(fileName); // we press the file function...[defined later]
} else if (userInput === "d") {
  // if user press [D] then ...
  // Process a directory
  const directoryName = readline.question("Enter the directory name: "); // we ask for the Directory name from the user // expected [files]
  processDirectory(directoryName); // implement processDirectory function...[defined later ]
} else {
  console.log("Invalid Selection"); // for invalid selection such as [abc] or [123]...
}

// Processing the File ---------------------------------------------------------------
function processFile(fileName) {
  // define the function processFile...
  fs.readFile(fileName, "utf8", (err, data) => {
    // three parameters passed [filename, [encoding], [callbackFunction]..
    if (err) {
      console.log(err.message); // print error message from terminal...
    } else {
      const content = data.toString().replace(/\s+/g, " "); // we convert data to string from binary to be read by user on terminal....
      //[/\s+/g, ' ');] to reduce multiple space to single space.
      const words = content.replace(/[^\w\s\']/g, "").split(" "); // replace non matching characters to empty-string[wide-spaces, and split rest to arrays

      const numCharacters = content.length; // checks contents length
      const numWords = words.length; // checks words length
      const longestWord = findLongestWord(words); //declaration of function to find longest word
      const mostRepeatedWord = findMostRepeatedWord(words); // declarations of function to find most repeated word

      //  Prints the instructed outputs to terminal...
      console.log(`Number of Characters (including spaces): ${numCharacters}`);
      console.log(`Number of Words: ${numWords}`);
      console.log(`Longest Word: ${longestWord}`);
      console.log(
        `Most Repeated Word: ${mostRepeatedWord.word} - ${mostRepeatedWord.count} times`
      );
    }
  });
}

// This is the Definition of function to find the longest word
function findLongestWord(words) {
  return words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );
}

// This is the Definition of function to find the most repeated word
function findMostRepeatedWord(words) {
  const wordCount = {}; // empty string to store the word counts....

  words.forEach((word) => {
    if (!wordCount[word]) {
      wordCount[word] = 1; // if wordCount doesn't exist then we declare as 1
    } else {
      wordCount[word]++; // increment to check occurrences of unique word
    }
  });

  let mostRepeated = "";
  let maxCount = 0;

  for (const word in wordCount) {
    if (wordCount[word] > maxCount) {
      // if the count of this word (wordCount[word]) is greater than the current maximum count (maxCount)...
      mostRepeated = word;
      maxCount = wordCount[word]; // update mostRepeated to the current word, and update maxCount to the count of this word.
    }
  }

  // Return the most repeated word and its count
  return { word: mostRepeated, count: maxCount };
}

function processDirectory(directoryName) {
  fs.readdir(directoryName, (err, files) => {
    if (err) {
      console.log(err.message);
    } else {
      const sortedFiles = files.sort((a, b) => b.localeCompare(a)); // Sort files in reverse alphabetical order.

      // Create an array to store file information (name and size).
      const fileInformation = [];

      // Loop through the sorted files and get their sizes.
      sortedFiles.forEach((file) => {
        const filePath = `${directoryName}/${file}`;
        const fileSize = getFileSize(filePath);
        fileInformation.push(`${file}: ${fileSize} bytes`);
      });

      console.log(
        `Files (reverse alphabetical order with sizes): ${fileInformation.join(", ")}`
      );
    }
  });
}

//  function to get the file size in bytes.
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (err) {
    return "N/A"; // If there's an error getting the file size, return "N/A".
  }
}
