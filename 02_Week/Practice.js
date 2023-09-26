// Define a constructor function for an Attack on Titan character
function AOTCharacter(name, rank, affiliation) {
  // Private members
  let _name = name;
  let _rank = rank;
  let _affiliation = affiliation;

  // Public getter for the character's name
  this.getName = function () {
    return _name;
  };

  // Public getter for the character's rank
  this.getRank = function () {
    return _rank;
  };

  // Public getter for the character's affiliation
  this.getAffiliation = function () {
    return _affiliation;
  };

  // Public setter for the character's name
  this.setName = function (newName) {
    _name = newName;
  };

  // Public setter for the character's rank
  this.setRank = function (newRank) {
    _rank = newRank;
  };

  // Public setter for the character's affiliation
  this.setAffiliation = function (newAffiliation) {
    _affiliation = newAffiliation;
  };

  // Introduce the character with a custom String.prototype extension
  this.introduce = function () {
    console.log(`I am ${_name}, ranked as ${_rank} in the ${_affiliation}.`);
  };
}

// Extend String.prototype with a custom method to capitalize the first letter
String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Create an instance of AOTCharacter
const eren = new AOTCharacter('Eren Yeager', 'Former Scout Regiment Member', 'Survey Corps');

// Access object properties and call methods using getters
console.log(eren.getName()); // Output: Eren Yeager
console.log(eren.getRank()); // Output: Former Scout Regiment Member
console.log(eren.getAffiliation()); // Output: Survey Corps

// Use setters to modify object properties
eren.setName('Eren Jaeger');
eren.setRank('Former Member of the Scout Regiment');
eren.setAffiliation('Scout Regiment');

// Access object properties and call methods using getters after modification
console.log(eren.getName()); // Output: Eren Jaeger
console.log(eren.getRank()); // Output: Former Member of the Scout Regiment
console.log(eren.getAffiliation()); // Output: Scout Regiment

// Use setTimeout to delay calling the introduce method
setTimeout(() => {
  // Capitalize the first letter of the character's name using the String.prototype extension
  const capitalizedName = eren.getName().capitalizeFirstLetter();
  eren.setName(capitalizedName);
  eren.introduce(); // Output after a delay: I am Eren Jaeger, ranked as Former Member of the Scout Regiment in the Scout Regiment.
}, 2000); // Delay for 2 seconds


// String Prototypes----------------------------------------------------------------

// count the number of times word javascript appears in the string; [ output - 2]
String.prototype.countOccurrences = function (substring) {
  return this.split(substring).length - 1;
};

const text = "Levi is the strongest AOT character.Mikasa loves Levi not Eren";
console.log(text.countOccurrences("JavaScript"));


// Joining some arrays.....
// Create two arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

// Slice elements from both arrays
const slicedNumbers = numbers.slice(0, 2); // Extract elements from index 0 to 1 (2 elements)
const slicedFruits = fruits.slice(0, 2);   // Extract elements from index 0 to 1 (2 elements)

// Create a third array by combining the sliced elements
const combinedArray = [...slicedNumbers, ...slicedFruits];

console.log('Sliced Numbers:', slicedNumbers); // Output: [1, 2]
console.log('Sliced Fruits:', slicedFruits);   // Output: ['apple', 'banana']
console.log('Combined Array:', combinedArray); // Output: [1, 2, 'apple', 'banana']
