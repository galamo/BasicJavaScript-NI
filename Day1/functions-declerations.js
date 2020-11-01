function extractEmailDomain(userName) {
    const splittedUserName = userName.split("@");
    const splittedDomain = splittedUserName[1].split(".");
    return splittedDomain[0];
  }