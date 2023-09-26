
// LAB PRACTICE----------------------------------------------------------------

const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
  "Why did Levi kill Eren? (a) - to save Mikasa. (b) - to save Titans. ",
  function (answer) {
    if (answer.toUpperCase() === "A") {
      rl.question(
        "Why did he need to save Mikasa? (a) - She was in danger. (b) - She asked him to. ",
        function (secondAnswer) {
          if (secondAnswer.toUpperCase() === "A") {
            console.log(
              "Correct! Levi killed Eren to save Mikasa from danger."
            );
          } else if (secondAnswer.toUpperCase() === "B") {
            console.log(
              "Incorrect. Levi's decision to kill Eren was not based on her request."
            );
          } else {
            console.log("Invalid input.");
          }
          rl.close();
        }
      );
    } else if (answer.toUpperCase() === "B") {
      rl.question(
        "Why did he need to save the Titans? (a) - To protect humanity. (b) - To serve justice. ",
        function (secondAnswer) {
          if (secondAnswer.toUpperCase() === "A") {
            console.log(
              "Correct! Levi killed Eren to save the Titans and protect humanity."
            );
          } else if (secondAnswer.toUpperCase() === "B") {
            console.log(
              "Incorrect. Levi's decision to kill Eren was not based on serving justice to Titans."
            );
          } else {
            console.log("Invalid input.");
          }
          rl.close();
        }
      );
    } else {
      console.log("Invalid input.");
      rl.close();
    }
  }
); 






