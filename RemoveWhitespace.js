
// Write a function to remove any whitespace from the beginning or end of a string 

const removeWhitespace = (str) => {
  return str.trim(); //The trim() method removes any whitespace (spaces, tabs, and newlines) from the beginning and end of the string, and returns the resulting string.
};

const str = "   Hello, playstation!   \n";
const result = removeWhitespace(str);
console.log(result);
