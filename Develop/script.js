// Assignment code here
function generatePassword(){
  var pwLength=prompt("Choose length of password between 8-128");
  var pwNumLength=Number(pwLength);
  // throws an INVALID if password is too short or long
  while (isNaN(pwNumLength) || pwLength < 8 || pwLength > 128) {
    pwLength=prompt("INVALID. Choose length of password between 8-128");
    pwNumLength=Number(pwLength);
  }
  var lcConfirm=confirm("Do you want lower case values in your password?");

  var ucConfirm=confirm("Do you want upper case values in your password?");

  var numConfirm=confirm("Do you want numbers in your password?");

  var specialConfirm=confirm("Do you want special characters in your password? Ex. $ % *.");

  // Code that runs if none of the options are chosen
  while (!lcConfirm && !ucConfirm && !numConfirm && !specialConfirm ) {
    lcConfirm=confirm("INVALID, YOU NEED AT LEAST ONE VALUE FOR YOUR PASSWORD! Do you want lower case values in your password?");
    
    ucConfirm=confirm("Do you want upper case values in your password?");

    numConfirm=confirm("Do you want numbers in your password?");

    specialConfirm=confirm("Do you want special characters in your password? Ex. $ % *.");
  }
  var password = "";
  // Arrays of characters and numbers to randomly pick from
  var lcOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var ucOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]; 

  var arrayOfCategories = []
  // Pushes options to array that have been chosen
  var numberOfValidCategories = 0;
  if(lcConfirm){
    arrayOfCategories.push("lcOptions");
    numberOfValidCategories++;
  }
  if (ucConfirm) {
    arrayOfCategories.push("ucOptions");
    numberOfValidCategories++;
  }
  if (numConfirm) {
    arrayOfCategories.push("numConfirm");
    numberOfValidCategories++;
  }
  if (specialChars) {
    arrayOfCategories.push("specialChars");
    numberOfValidCategories++;
  }


  for(i = 0; i < pwLength; i++){
    // Randomly decide what category to pick from from the numberOfValidCategories variable
    var randomIndex =  Math.floor(Math.random() * numberOfValidCategories);
    var selectedCategory = arrayOfCategories[randomIndex];

    var characterToAdd = "";
    if(selectedCategory == "lcOptions"){
      var  index = Math.floor(Math.random() * lcOptions.length);
      characterToAdd = lcOptions[index];
    }
    if (selectedCategory == "ucOptions"){
      var index = Math.floor(Math.random() * ucOptions.length);
      characterToAdd = ucOptions[index];
    }
    if (selectedCategory == "numConfirm"){
      var index = Math.floor(Math.random() * numbers.length);
      characterToAdd = numbers[index];
    }
    if (selectedCategory == "specialChars"){
      var index = Math.floor(Math.random() * specialChars.length);
      characterToAdd = specialChars[index];
    }

  
    

    password = password + characterToAdd;
    
  }


  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

