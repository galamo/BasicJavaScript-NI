const salariesGlobal = [2000, 5000, 7000, 5222];

function checkRaise(salaries, limit, raise) {
  const newArray = [];
  for (let index = 0; index < salaries.length; index++) {
    const currentSalary = salaries[index];
    if (currentSalary <= limit) {
      const newSal = getRaise(currentSalary, raise);
      newArray.push(newSal);
      console.log(`The new salary is: ${newSal.toFixed(2)}`);
    } else {
      newArray.push(currentSalary);
      console.log(`No raise for you: ${currentSalary} , limit is: ${limit}`);
    }
  }
  return newArray;
}

function getRaise(sal, raise = 1.1) {
  return sal * raise;
}

const newSalariesAfterRaise = checkRaise([2000, 5000, 7000, 5222], 5000, 1.4);
console.log(newSalariesAfterRaise);
