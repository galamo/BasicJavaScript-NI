// function decleration + implementation
const str =
  "gal@gMail.com,sivan@gmail.com,luba@yahoo.com,luba@gmail.com,luba@hotmail.com";

// function execution
var result = extractEmailDomain("gal.amouyal@gmail.com.il");

// Ex 6 - solution

function init() {
  const userNamesArray = str.split(",");
  sendToManager(userNamesArray);
  var neededDomains = 0;
  for (let index = 0; index < userNamesArray.length; index++) {
    const domainName = extractEmailDomain(userNamesArray[index]);
    if (validateGmailHotmail(domainName) === true) {
      neededDomains = neededDomains + 1;
      sendToManager(domainName);
    }
  }
  sendToManager(neededDomains);
}

function validateGmailHotmail(domain) {
  // or - || and - &&
  if (domain.toLowerCase() === "gmail" || domain.toLowerCase() === "hotmail") {
    return true;
  } else {
    return false;
  }
}

function sendToManager(data) {
  console.log(data);
}

init();
