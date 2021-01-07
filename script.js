// initializing a variable to store our password string
var pw = '';

// Setting up arrays for password characters
// Boilerplate special characters pulled from the web
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Go through the alphabet array and generate a new array of all capital letters
var alphabetCaps = alphabet.map(alphabet => alphabet.toUpperCase());

// This function pulls a random character from the special characters array
function getRandomChar() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

// This function pulls a random character from the number array
function getRandomNumber() {
  return numeral[Math.floor(Math.random() * numeral.length)];
}

// This function pulls a random character from the number lower case array
function getRandomLower() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// This function pulls a random character from the number upper case array
function getRandomUpper() {
  return alphabetCaps[Math.floor(Math.random() * alphabetCaps.length)];
}

// Object that holds results of the randomizing functions to get a bunch of different random characters that we can call later.
var random = {
  special: getRandomChar,
  number: getRandomNumber,
  lower: getRandomLower,
  upper: getRandomUpper
};

// A function that creates the password string based on the user input paramaters
function combine(special, number, lower, upper, pwLength) {
  // we put this pw here as empty in case the user wants to generate a new password. Clears the value of pw
  pw = '';
  // A counter to track the number of character sets being used
  var count = special + number + lower + upper;
  // Types is an array that holds our character set information. The filter() method goes through the elements in the object to see if they are "true" or "false". If the user confirms, the value is "true" and it uses that character set in the password. If "False", that character set is removed from the array and not used in the password.
  var types = [{special}, {number}, {upper}, {lower}].filter(item => Object.values(item)[0]);

  // If the user gives us no paramaters, they get an alert to enter a choice of characters, and nothing is returned.
  if (count === 0) {
    alert("You must make a choice of characters");
  }

  // Grab random characters from a random index in the types array and store that in the pw variable. Go through the loop and keep appending values to the pw string until it's as long as the user specified.
  for (var i = 0; i < pwLength; i++) {
    var randomIndex = Math.floor(Math.random() * types.length);
    pw += random[Object.keys(types[randomIndex])[0]]();
  }
}

// Main function to take user input and spit out a string of random characters based on parameters set by the user
function generatePassword() {
  
  // Ask users to specify password length and convert the string into a number
  var pwLength = parseInt(prompt("How long would you like your password to be? You can choose between 8 and 128"));

  // If we don't get a number between 8 and 128, or if we get a non number character, return nothing and go back to step one
  if (!pwLength || pwLength < 8 || pwLength > 128) {
    alert("Invalid input, try again");
  }

  // Valid input triggers a round of confirmations for what infurmation we want to use in the password
  else {
    var useSpecial = confirm("Would you like your password to contain special characters?");
    var useNumber = confirm("Would you like your password to contain numbers?");
    var useLower = confirm("Would you like your password to contain lower case letters?");
    var useUpper = confirm("Would you like your password to contain upper case letters?");
  }

  // Sends the result of the combine function to that password id in the html file and returns the pw string
  password.innerText = combine(useSpecial, useNumber, useLower, useUpper, pwLength);
  return pw;
}

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