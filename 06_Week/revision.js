function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

function processObject(inputObject) {
  return new Promise((resolve, reject) => {
    // Spread the properties of the inputObject into a new object
    const processedObject = {
      ...inputObject,
      additionalProperty: "Additional Property Value",
    };

    fetchData()
      .then((result) => {
        processedObject.fetchedData = result;

        resolve(processedObject);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

//  usage of the processObject function
const inputObject = {
  prop1: "Property 1 Value",
  prop2: "Property 2 Value",
};

processObject(inputObject)
  .then((result) => {
    console.log("Processed Object:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
