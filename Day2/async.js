console.log("script start");

async function getCountries() {
  console.log("getCountries start");
  const apiResult = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await apiResult.json();
  console.log(countries);
  const populations = countries.map((c) => {
    return c.population;
  });
  const avarage = getAvgPopulation(populations);
  console.log(avarage);
  console.log("getCountries end");
}

function executeBefore() {
  console.log("executeBefore hello gal");
}

function getAvgPopulation(populations) {
  let totalPopulation = 0;
  for (let index = 0; index < populations.length; index++) {
    totalPopulation = totalPopulation + populations[index];
  }
  return totalPopulation / populations.length;
}

getCountries();

executeBefore();

console.log("script end");
