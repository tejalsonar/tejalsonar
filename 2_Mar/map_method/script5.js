//write a program to select only those elements in the arrayOfNumbers that are greater than 4.

let arrayOfNumbers = [1, 2, 3, 4, 5, 6];

arrayOfNumbers.filter(checkFilterCondition);

function checkFilterCondition(singleNumber) {
    console.log("The singleNumber is", singleNumber);
    return singleNumber > 4;
}
console.log("The requiredArray is", requiredArray);