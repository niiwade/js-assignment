// Write a function to determine if a string ends with a specific character or substring.


const endsWithSubstring = (str, substr) => {
    return str.endsWith(substr); //startsWith() method returns true if the string starts with the specified substring, and false otherwise.

  };
  

  const str = "Hello, press start!";
const substr1 = "start!";
const substr2 = "Hello";
console.log(endsWithSubstring(str, substr1)); // true
console.log(endsWithSubstring(str, substr2)); // false
