//write a program to mutiply each number in the arrayOfNumbernby 2

let arrayOfNumbers = [1, 2, 3, 4, 5, 6];

let multiplidArrayOfNumbers = arrayOfNumbers.map(arrayMultiplier);

const arrayMultiplier = (singleNumber) {
    return singleNumber * 2;
}

console.log("The multiplidArrayOfNumbers is", multiplidArrayOfNumbers);