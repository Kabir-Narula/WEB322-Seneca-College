// Not part of the course notes-----

// Using Maps is Good and easy practice if we need to read arrays and result new values...
const number =  [1,2,3,4,5];  // imagine we have a array of numbers
const squaredNumbers = number.map((number) => {  // we create a new array named square numbers
return number * number;    // we map through array of the maps and return the result with square of numbers in squared numbers....
});


// Old Timeouts Recap-----------
function delayWithPromise(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Levi is killing titans after " + ms + " milliseconds!");
    }, ms);
  });
}

delayWithPromise(3000) // Wait for 3 seconds
  .then((message) => {
    console.log(message); // This will be printed after 3 seconds
  })
  .catch((error) => {
    console.error("Error:", error);
  });

