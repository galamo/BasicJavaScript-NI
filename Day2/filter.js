const products = ["milk", "eggs", "bread", "wine", "milka"];
const searchValue = "";

function searchAction(arrOfStrings, value) {
  if (Array.isArray(arrOfStrings) === false) return;
  const result = [];
  for (let index = 0; index < arrOfStrings.length; index++) {
    if (arrOfStrings[index].toLowerCase().indexOf(value.toLowerCase()) > -1) {
      result.push(arrOfStrings[index]);
    }
  }
  return result;
}

//Arrow function
const search = (arrOfStrings, value) => {
  if (Array.isArray(arrOfStrings) === false) return;
  const lowerValue = value.toLowerCase();
  return arrOfStrings.filter((item) => {
    return item.toLowerCase().includes(lowerValue);
  });
};

//Arrow function
const getEmail = (userName) => {
  return userName + "@gmail.com";
};
//Function ES5
function getEmailFunction(userName) {
  return userName + "@gmail.com";
}

const salaries = [5000, 2000, 3500];
function getHighSalaries(arrOfNumbers, salary) {
  if (!Array.isArray(arrOfNumbers)) return;
  const salResult = arrOfNumbers.filter((sal) => {
    return sal > salary;
  });
  return salResult;
}
