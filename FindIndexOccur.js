// Write a function to find the index of the first occurrence of a specified regular expression within a string


const findFirstIndex = (str, regex) => { //function takes two parameters: str, which is the string you want to search, and regex, which is the regular expression you want to use to find the first occurrence.
    return str.search(regex); // The search() method returns the index of the first occurrence of the regular expression within the string, or -1 if no match is found.
  };
  
  const str = "we have to japa";
  const regex = /to/;
  console.log(findFirstIndex(str, regex));
  