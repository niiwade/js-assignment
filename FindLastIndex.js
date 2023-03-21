// Write a function to find the index of the last occurrence of a specific character or substring within a string.


const FindLastIndex = (str, value) =>{

    return str.lastIndexOf(value)
}


const MyString = "Wow, Gold";
const LastIndex = FindLastIndex(MyString, "w")
console.log(LastIndex)


//find the index of the last occurrence of a substring:
const MyString2 = "Wow, Good";
const LastIndex2 = FindLastIndex(MyString, "G")
console.log(LastIndex2)
