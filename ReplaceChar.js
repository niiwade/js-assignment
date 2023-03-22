

// Write a function to replace a specific character or substring within a string with another character or substring.

const replaceString = (originalString, oldSubstring, newSubstring) =>{
    // Use the replace() method of the originalString to replace all occurrences of oldSubstring with newSubstring
    return originalString.replace(new RegExp(oldSubstring, 'g'), newSubstring); // new RegExp() method is used here to create a regular expression object that matches all occurrences of the oldSubstring parameter in the originalString, which is then used in the replace() method to replace all those occurrences with the newSubstring parameter.
}



let originalString = "The playstaion is good.";
let newString = replaceString(originalString, "new", "ps5");
console.log(newString); // 
