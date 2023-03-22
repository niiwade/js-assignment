// Write a function to concatenate two or more strings together.



const concatenateStrings = (...strings) => { // this function uses the rest parameter syntax (...strings) to allow any number of string arguments to be passed in. The join() method is then used to concatenate all the strings together into a single string, with no separator between the substrings.
    return strings.join("");
  };
  


  const str1 = "Hello, ";
const str2 = "world!";
const str3 = " How are you?";
const result = concatenateStrings(str1, str2, str3);
console.log(result);
