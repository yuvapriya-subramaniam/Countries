/**
 * @fileOverview
 * Search and Filter elements are created
 * event handlers are attached to search and filter elements
 * Dependencies
 * utilitySingPlural from ./utilities.js - to display country/countries
 * displayCountries from displayAllCountries.js to update countries data based on search and filter
 */
import { utilitySingPlural } from "./utilities.js";
import { displayCountries } from "./displayAllCountries.js";
let searchFilterFn = (countries) => {
  const searchFilter = document.createElement("div");
  searchFilter.setAttribute("id", "srchFilterDiv");
  searchFilter.setAttribute("class", "srchFilterContainer");
  const search_box = document.createElement("input");
  Object.assign(search_box, {
    type: "text",
    placeholder: "Search country",
    id: "search",
    className: "srchFilter_flexItems",
  });
  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fa-solid", "fa-magnifying-glass", "srch-icon");

  const totalCountries = document.createElement("p");
  totalCountries.setAttribute("id", "totalCountries");
  // totalCountries.className = "srchFilter_flexItems";
  totalCountries.textContent = `${countries.length} countries`;

  const filter = document.createElement("select");
  filter.setAttribute("id", "filter");
  filter.setAttribute("class", "srchFilter_flexItems");
  const filterOptions = `<option value="" selected disabled>Filter by region</option>
                        <option value="all">All</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Antarctic">Antarctic</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>`;
  filter.innerHTML = filterOptions;
  searchFilter.append(search_box, searchIcon, totalCountries, filter);
  //event handler for search box
  search_box.addEventListener("input", (event) => {
    searchCountry(event, countries);
  });
  //display filter by region countries
  filter.addEventListener("change", () => {
    search_box.value = "";
    let region = filter.value.toLowerCase();
    let filterCountry = countries.filter((country) =>
      region === "all" ? country : country.region.toLowerCase() === region
    );
    totalCountries.textContent = `${filterCountry.length} countries`;
    displayCountries(filterCountry, countriesDiv);
  });
  return searchFilter;
};

let debounce = (fn, delay = 800) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

let searchCountry = debounce((event, countries) => {
  let search_country = event.target.value.toLowerCase();
  let searchCountry = [];
  if (filter.value == "" || filter.value === "all") {
    searchCountry = countries.filter((country) =>
      country.name.toLowerCase().includes(search_country)
    );
  } else {
    searchCountry = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(search_country) &&
        country.region.toLowerCase() === filter.value.toLowerCase()
    );
  }
  let total = searchCountry.length;
  totalCountries.textContent = `${total} ${utilitySingPlural(
    total,
    "country"
  )}`;
  displayCountries(searchCountry, countriesDiv);
});

export default searchFilterFn;
