// Write a function to find the index of a specific character or substring within a string.



const findIndex = (str , substring) =>{ //function takes two arguments: a string to search in, and a substring to search for. The indexOf method is then called on the string with the substring passed as its argument. This method returns the index of the first occurrence of the substring in the string, or -1 if the substring is not found.
    return str.indexOf(substring)
} 


let string = "Hello, Prince !";
let substring = "Prince";
let index = findIndex(string, substring);
console.log(index);  

substring = "JavaScript";
index = findIndex(string, substring);
console.log(index); 
