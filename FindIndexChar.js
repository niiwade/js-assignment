// Write a function to find the index of a specific character or substring within a string


const FindIndex = (str, value) =>{   //findIndex function takes two parameters: str, which is the string to search in, and value, which is the character or substring to search for. The function returns the index of the first occurrence of value in str, or -1 if value is not found.
    return str.indexOf(value)
}



//find index of specific character
const MyString = "This is wild good"
const LocateIndex = FindIndex(MyString, "s")
console.log(LocateIndex)


//find substring within a string
const MyString1 = "This is wild good"
const LocateIndex1 = FindIndex(MyString, "wild")
console.log(LocateIndex1)