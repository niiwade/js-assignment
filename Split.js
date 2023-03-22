// Write a function to split a string into an array of substrings based on a specified delimiter.


const splitString = (str, delimiter) => {
  // this two parameters: str, which is the string you want to split, and delimiter, which is the string that separates the substrings in str. The split() method splits str into an array of substrings based on the delimiter, and returns the resulting array.
  return str.split(delimiter);
};

const str = "The gameplay of God of war is fire .";
const delimiter = " ";
const result = splitString(str, delimiter);
console.log(result);
