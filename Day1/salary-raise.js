const salariesGlobal = [2000, 5000, 7000, 5222];

function checkRaise(salaries, limit, raise) {
  for (let index = 0; index < salaries.length; index++) {
    const currentSalary = salaries[index];
    if (currentSalary <= limit) {
      const newSal = getRaise(currentSalary, raise);
      console.log(`The new salary is: ${newSal.toFixed(2)}`);
    } else {
      console.log(`No raise for you: ${currentSalary} , limit is: ${limit}`);
    }
  }
}

function getRaise(sal, raise = 1.1) {
  return sal * raise;
}

checkRaise([2000, 5000, 7000, 5222], 7000, 1.4);
