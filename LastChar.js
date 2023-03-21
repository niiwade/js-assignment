// Write a function to retrieve the last character of any string.


const LastCharacter = (str) =>{
    return str.charAt(str.length -1)
}


const MyString = "This is big news"
const LocateLast = LastCharacter(MyString)
console.log(LocateLast)