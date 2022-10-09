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

// Letters numbers etc library

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

function getrandomInt(max) {
  return Math.ceil(Math.random() * max)
}


// Generate password Function
function generatePassword(){

  // step 1 ask how many characters the user wants the password to be
  var passwordLength = prompt('How many characters woudl you like your password to be? (8-128)', '12')

  // step 2 ask if the user wants to use uppercase 
  var useUppercase = confirm('Would you like to include uppercase letters?')

  // step 3 ask if the user wants to use lowercase
  var useLowercase = confirm('Would you like to include lowercase letters?')

  // step 4 ask if the user wants to use numbers
  var useNumbers = confirm('Would you like to include numbers?')

  // step 5 ask if the user wants to use special characters

  var useSpecialChars = confirm('Would you like to include special characters?')

  // test if things log ---> console.log(passwordLength, useUppercase, useLowercase, useSpecialChars)

  // create structure of characters
  var potentialChars = []

  if (useUppercase) {
    potentialChars = potentialChars.concat(uppercase)
  }

  if (useLowercase) {
    potentialChars = potentialChars.concat(lowercase)
  }

  if (useNumbers) {
    potentialChars = potentialChars.concat(numbers)
  }

  if (useSpecialChars) {
    potentialChars = potentialChars.concat(special)
  }

  // create the password length

  var password = ''
  for (var i=0; i < passwordLength; i++) {
    password = password + potentialChars[getrandomInt(potentialChars.length)]
  }

  return password
}
