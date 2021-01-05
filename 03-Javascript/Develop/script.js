// Setting up arrays for password characters

// Boilerplate special characters pulled from the web

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Go through the alphabet array and generate a new array of all capital letters
var alphabetCaps = alphabet.map(alphabet => alphabet.toUpperCase());

// Object that holds results of the randomizing functions to get a bunch of different random characters
var random = {
  special: getRandomChar,
  number: getRandomNumber,
  lower: getRandomLower,
  upper: getRandomUpper
};

function getRandomChar() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

function getRandomNumber(){
  return numeral[Math.floor(Math.random() * numeral.length)];
}

function getRandomLower(){
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function getRandomUpper(){
  
  return alphabetCaps[Math.floor(Math.random() * alphabetCaps.length)];
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var pwLength = parseInt(prompt("How long would you like your password to be? You can choose between 8 and 128"));
  if (!pwLength || pwLength < 8 || pwLength > 128) {
    alert("Invalid input, try again");
  }
  else {
    var useSpecial = confirm("Would you like your password to contain special characters?");
    var useNumber = confirm("Would you like your password to contain numbers?");
    var useLower = confirm("Would you like your password to contain lower case letters?");
    var useUpper = confirm("Would you like your password to contain upper case letters?");
    console.log(useSpecial, useNumber, useLower, useUpper);
  }


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);