let FirstColourObj = {
    colourOne: "Red",
    colourTwo: "Blue";
    colourThree: "Green"
}

let secodColourObj = StructureClone(firstColoursObj);//deep copy

secondColourObj.colourOne = "Pink";

console.log("The value of firstColourObj and secondColorObj is", firstColourObj, secodColourObj);