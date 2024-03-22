//variables declared using var keyword have function scope.

function greetingI() {
    var a = 5;
    console.log("Good Morning Everone");

}

greetingI(); //calling the function

console.log("The value of a is" , a);