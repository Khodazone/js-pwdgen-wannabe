// Input acquisition from user
const myname = prompt("Insert your name:");
const mysurname = prompt("Insert your surname:");
const favcolor = prompt("Insert your favorite color:");
let number1 = prompt("Days in one year:");
let number2 = prompt("Working days in a week");

// conversion type
number1 = parseInt(number1); 
number2 = parseInt(number2);

// Random for password computation
let division = number1 / number2;

// Generating password
let newPasswordGenerated = myname + mysurname + favcolor + division;

// Print information output
let passwordGeneratorString = `
--------- General Data --------------
> General Informations
--- Name: ${myname}
--- Surname: ${mysurname}
--- Favorite color: ${favcolor}
--- Days in one year: ${number1}
---Working days in a week: ${number2}
-------------------------------------
`;

console.log(passwordGeneratorString);
console.log(newPasswordGenerated);

document.getElementById("password-generator").innerHTML = newPasswordGenerated; 