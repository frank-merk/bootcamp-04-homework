// Setting up arrays for password characters

// Boilerplate special characters pulled from the web

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var alphabetCaps = alphabet.map(alphabet => alphabet.toUpperCase());

function getRandomChar() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

console.log(getRandomChar());

function getRandomNumber(){
  return numeral[Math.floor(Math.random() * numeral.length)];
}

console.log(getRandomNumber());

function getRandomLower(){
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(getRandomLower());

function getRandomUpper(){
  return alphabetCaps[Math.floor(Math.random() * alphabetCaps.length)];
}
console.log(getRandomUpper());
// Go through the alphabet array and generate a new array of all capital letters



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} */

