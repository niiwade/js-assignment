
// Write a function to determine if a string starts with a specific character or substring 


const startsWithSubstring = (str, substr) => {
    return str.startsWith(substr); //The startsWith() method returns true if the string starts with the specified substring, and false otherwise.
  };
  


  const str = "Hello, this is Nii!";
const substr1 = "Hello";
const substr2 = "Nii";
console.log(startsWithSubstring(str, substr2)); 
console.log(startsWithSubstring(str, substr1));
