
let colorObj = {
    colorName: "Red",
  };
  
  colorObj = Object.freeze(colorObj);
  
  colorObj.colorName = "Yellow";
  
  console.log("The value of colorObj is ", colorObj);