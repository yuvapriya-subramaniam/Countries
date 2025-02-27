/**
 * @fileOverview
 * utility functions 
 * get fields from api returned data, validate and return an object of validated data
 * Top - scroll to top of the page feature
 * country/countries - to display in total count
 */
//Utility function which returns singular or plural based on the count
const utilitySingPlural = (field, fieldText) =>
  field > 1 ? "countries" : fieldText;

let getAllFields = (country) => {
  const noData = "No Data";
  let validateString = (property) => {
    if (property === "name") {
      return country.name.common;
    }
    return country[property] || noData;
  };

  const name = validateString("name"); //country.name?.common ? country.name.common : noData;
  const flag = country.flags.svg;
  const capital =
    country.capital && country.capital.length > 0
      ? country.capital.join(", ")
      : "No capital";
  const a3Code = validateString("cca3"); //country.cca3 ? country.cca3 : noData;
  const latlng =
    country.latlng && country.latlng.length > 0
      ? country.latlng.join(", ")
      : noData;
  const region = validateString("region"); //country.region ? country.region : noData;

  let returnFields = {};
  // if (dataFields === "allCountries") {
  //   return (returnFields = { name, flag, capital, latlng, region, a3Code });
  // }

  const timezones =
    country.timezones && country.timezones.length > 0
      ? country.timezones.join(", ")
      : "No data";
  const languages =
    country.languages && Object.values(country.languages).length > 0
      ? Object.values(country.languages).join(", ")
      : noData;
  const currencies =
    country.currencies && Object.values(country.currencies).length > 0
      ? Object.values(country.currencies)
          .map((currency) => {
            let symbol = "(" + currency.symbol + ")";
            return currency.name + symbol;
          })
          .join(", ")
      : noData;
  const subRegion = validateString("subregion"); //country.subregion ? country.subregion : noData;
  const population = country.population;
  const officialName = country.name.official;
  returnFields = {
    flag: flag,
    name: name,
    officialName: officialName,
    region: region,
    subRegion: subRegion,
    capital: capital,
    languages: languages,
    timezones: timezones,
    currencies: currencies,
    population: population,
    latlng: latlng,
    a3Code: a3Code
  };
  return returnFields;
};

//Top button to go to the top of the page
const scrollTop = () => {
  const topButton = document.createElement("button");
  topButton.setAttribute("id", "scrollTop");
  topButton.textContent = "Top";
  topButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
  return topButton;
};

export { utilitySingPlural, scrollTop, getAllFields };
