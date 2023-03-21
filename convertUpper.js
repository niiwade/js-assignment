// Write a function that can convert any string to all uppercase letters.



const ConvertUpperString  = (str ) =>{ // this function takes a str as an parameter and returns the str as a capitals using the uppercase() method
    return str.toUpperCase() 
}


const MyString = "hello , this is good"
const uppercaseString = ConvertString(MyString) // this variable holds the value of the converted MyString variable
console.log(uppercaseString)