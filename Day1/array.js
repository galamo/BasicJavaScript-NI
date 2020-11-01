// array deceration
// last index = length - 1
console.log(userNames);

const userAges = [30, 29, 28];

const str = "gal@gmail.com,sivan@gmail.com,luba@gmail.com";

var userNames = str.split(",");

console.log(userNames[0], userAges[0]);
console.log(userNames[1], userAges[1]);
console.log(userNames[2], userAges[2]);
const sumAges = userAges[0] + userAges[1] + userAges[2];
console.log(sumAges / userAges.length);

// for loop

for (var index = 0; index < userNames.length; index++) {
  console.log(userNames[index]);
}
