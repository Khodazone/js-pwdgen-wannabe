const myname=prompt ("Insert your name:");

const mysurname=prompt ("Insert your surname:");

const favcolor=prompt ("Insert your favorite color:");

const number1=prompt ("Days in one year:");

let number2=prompt ("Working days in a week");

let division = number1 / number2;

let newpasswordgenerated = myname + mysurname + favcolor + division;

let PasswordGeneratorString = `
--------- General Data --------------
> General Informations
--- Name: ${myname}
--- Surname: ${mysurname}
--- Favorite color: ${favcolor}
--- Days in one year: ${number1}
---Working days in a week: ${number2}
-------------------------------------
`;



console.log(PasswordGeneratorString);
console.log(newpasswordgenerated);


document.getElementById("password-generator").innerHTML = newpasswordgenerated; 