// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start of code to generate password

function makePassword() {


var lengthofPassword = window.prompt(
  "How many characters do you wish your password to contain?");

  var userchoiceCharacters = parseInt(lengthofPassword);

  if (
    lengthofPassword < 8 ||
    lengthofPassword > 128 ||
    isNaN(userchoiceCharacters) )
 { return alert("Please insert a number between 8 and 128");
}

var userchoiceCaps = window.prompt(
  "Do you wish to include capital letters in the password? Please enter yes or no"
);



var userchoiceSpecial = window.prompt(
  "Do you wish to include special characters in the password? Please enter yes or no"
);

userchoiceSpecial = userchoiceSpecial.toUpperCase();


var userchoiceNumbers = window.prompt(
  "Do you wish to include numbers in the password? Please enter yes or no"
);

userchoiceNumbers = userchoiceNumbers.toUpperCase();



var characters = window.prompt(
  "How many characters do you wish your password to contain?"
);







var letters = [
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

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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



var passwordContainer = [];

function characters();

if (characters <= 128);




var characters = window.prompt(
  "How many characters do you wish your password to contain?"
);

characters();
}
