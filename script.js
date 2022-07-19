// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start of code to generate password

var lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var specialCharacters = [
  "!",
  "£",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "?",
  "/",
  '",',
  ">",
  "<",
  "@",
  "#",
  "~",
];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var passwordContainer = [];

var finishedPassword = [];

function generatePassword() {
  var lengthofPassword = window.prompt(
    "How many characters do you wish your password to contain?"
  );

  var userchoiceCharacters = parseInt(lengthofPassword);

  if (
    lengthofPassword < 8 ||
    lengthofPassword > 128 ||
    isNaN(userchoiceCharacters)
  ) {
    return alert("Please insert a number between 8 and 128");
  }

  console.log(userchoiceCharacters);

  var userchoiceCaps = window.prompt(
    "Do you wish to include capital letters in the password? Please enter yes or no"
  );

  if (userchoiceCaps === "yes") {
    capsValue = lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    finishedPassword.push(capsValue);
    passwordContainer = passwordContainer.concat(lowerLetters);
  } else if (userchoiceCaps === "no") {
    null;
  } else if (userchoiceCaps === null) {
    alert("you exited the password generator!");
    return;
  }

  var userchoiceSpecial = window.prompt(
    "Do you wish to include special characters in the password? Please enter yes or no"
  );

  if (userchoiceSpecial === "yes") {
    specialValue =
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    finishedPassword.push(specialValue);
    passwordContainer = passwordContainer.concat(specialCharacters);
  } else if (userchoiceSpecial === "no") {
    null;
  } else if (userchoiceSpecial === null) {
    alert("you exited the password generator!");
    return;
  }

  var userchoiceNumbers = window.prompt(
    "Do you wish to include numbers in the password? Please enter yes or no"
  );

  if (userchoiceNumbers === "yes") {
    numbersValue = numbers[Math.floor(Math.random() * numbers.length)];
    finishedPassword.push(numbersValue);
  }
}

// if (userchoiceCaps === "yes") {
//   capsValue = lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
//   finishedPassword.unshift(capsValue);
//   passwordContainer = passwordContainer.concat(lowerLetters);
// } else if (userchoiceCaps === "no") {
//   null;
// } else if (userchoiceCaps === null) {
//   alert("you exited the password generator!");
// }
// }

// if (
