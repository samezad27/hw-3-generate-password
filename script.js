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

  console.log(passwordLength, useUppercase, useLowercase, useSpecialChars)


}
