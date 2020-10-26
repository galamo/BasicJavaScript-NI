console.log("Script start");
/* Save my user name in variable */
// another way to comment

var userName = "galamouyal88@gmail.com";
// string - array of characters
console.log(userName);

// length - get the length of the string
// charAt - get the caracter in a specific index
var userNameLength = userName.length;
var userName3 = userName.charAt(3);

console.log(userNameLength);
console.log(userName3);

// indexOf - get the index of the specific given substring or character
var atLocation = userName.indexOf("@");
console.log("@ location: " + atLocation);

// subString - get substring according to index start and index end not included

var subStringOf = userName.substring(1, 5);
console.log(subStringOf);

// print the user name from mail
var extractUserNameFromMail = userName.substring(0, atLocation);
console.log(extractUserNameFromMail);

var firstDot = userName.lastIndexOf(".");
var extractDomain = userName.substring(atLocation + 1, firstDot);
console.log(extractDomain);

// string concatanating
var messageToManager =
  "email is: " +
  userName +
  " user name from email: " +
  extractUserNameFromMail +
  " email domain is: " +
  extractDomain;

console.log(messageToManager);
console.log(messageToManager.length);

// string interpulation es6
var messageTpManagerNS = `email is: ${userName} 
user mail: ${extractUserNameFromMail}
email domain: ${extractDomain}
`;
console.log(messageTpManagerNS);
