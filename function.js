// function decleration + implementation
const str = "gal@gmail.com,sivan@hotmail.com,luba@yahoo.com";

// galamouyal@gmail.com
function extractEmailDomain(userName) {
  const splittedUserName = userName.split("@");
  const splittedDomain = splittedUserName[1].split(".");
  return splittedDomain[0];
}

// function execution
var result = extractEmailDomain("gal.amouyal@gmail.com.il");

console.log(result);
