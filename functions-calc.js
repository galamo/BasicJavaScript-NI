function getAvarage(num1, num2) {
  var result = num1 + num2;
  return result / 2;
}

console.log(getAvarage(20, 34));

function getAvarageDynamic(arrayOfNumbers) {
  var sum = 0;
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    sum = sum + arrayOfNumbers[index];
  }
  console.log(`Total Sum: ${sum}`);
  return sum / arrayOfNumbers.length;
}

const avarage = getAvarageDynamic([3, 2, 4, 55]);
console.log(avarage);

// array of grades
// limit grade
const grades = [88, 40, 40, 90, 100, 40];

function calcSuccess(grades, limit) {
  const avg = getAvarageDynamic(grades);
  if (avg >= limit) {
    console.log("SUCCESS");
  } else {
    console.log("FAILURE");
  }
}

calcSuccess(grades, 69);
