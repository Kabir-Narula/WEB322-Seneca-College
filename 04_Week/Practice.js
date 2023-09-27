let data = [];
data.push(10);

// [try 1] -Promises and returning resolved values.......
function fight() {
  return new Promise((resolve, reject) => {
    try {
      if (data.includes(10)) { // checks if data had value 10......
        console.log("Levi is killing Titans");  /// is true and will print.....
        resolve("Titans are defeated"); // You should resolve with a value // will be returned later in result...
      } else {
        reject("No Titans found"); // You should reject with a reason
      }
    } catch (err) {
      reject(err);
    }
  });
}

fight()  // calling fight function.....
  .then((result) => { // result stores value of resolve// [Titans are defeated]
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error); // else error.....
  });


