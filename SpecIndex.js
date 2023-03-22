
// Write a function to retrieve a portion of a string between two specified indices.



// Write a function to retrieve a portion of a string between two specified indices.

const BetweenTwoIndices = (str, startIndex, endIndex) =>{
   return str.substring(startIndex,endIndex)
}


const MyString = "hello ,this God of war";
const TwoString = BetweenTwoIndices(MyString, 1, 4)
console.log(TwoString)