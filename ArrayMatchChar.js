// Write a function to retrieve an array of all matches of a specified regular expression within a string.


const findAllMatches = (str, regex) => { //The function takes two parameters: str, which is the string you want to search, and regex, which is the regular expression you want to use to find matches. The match() method returns an array of all matches found in the string.
    return str.match(regex);
  };
  

  const str = "Css is a best.";
  const regex = /[aeiou]/g; // The regular expression /[aeiou]/g matches any vowel character (i.e., "a", "e", "i", "o", or "u") and the "g" flag means that it will search for all matches in the string.
  console.log(findAllMatches(str, regex));
  