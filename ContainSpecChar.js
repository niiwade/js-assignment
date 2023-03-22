//  Write a function to determine if a string contains a specific character or substring.

const containsSubstring = (str, substr) => {  //function takes two parameters: str, which is the string you want to test, and substr, which is the substring you want to check for in the string. The includes() method returns true if the string contains the specified substring, and false otherwise.
    return str.includes(substr);
  };
  

  const str = "Hello, Joseph!";
const substr1 = "Joseph";
const substr2 = "lol";
console.log(containsSubstring(str, substr1)); 
console.log(containsSubstring(str, substr2)); 

