/**
 * @fileOverview
 *This is the main script file which depends on the imported files to fetch data and display
 */
import header from "./header.js";
import fetchAllCountries from "./fetchData.js";
import searchFilterFn from "./searchFilter.js";
import {displayCountries} from "./displayAllCountries.js";
import { scrollTop, getAllFields } from "./utilities.js";
import { getCountryDetails, eventListenerForCountry } from "./displayCountryDetails.js";

const URL =
  "https://restcountries.com/v3.1/all?fields=name,capital,flags,cca3,latlng,region,subregion,currencies,population,languages,timezones";
const body = document.querySelector("body");
const pageHeader = header(body);

let main = document.createElement("main");
main.setAttribute("id", "main");
main.setAttribute("class", "mainContainer");
let allCountriesData = null;
fetchAllCountries(URL).then((countries) => {
  if (countries) {
    //validate and get all fields data for all countries
    allCountriesData = countries.map((country) => getAllFields(country));
    //search and filter elements are created and add event listeners to the elements
    let searchFilter = searchFilterFn(allCountriesData);
    //container for all the countries card
    const countriesDiv = document.createElement("div");
    countriesDiv.setAttribute("id", "countriesDiv");
    countriesDiv.setAttribute("class", "countries_parent_grid");
    //display all countries initially 
    displayCountries(allCountriesData, countriesDiv);
    //event delegation to display a country's details
    eventListenerForCountry(countriesDiv, allCountriesData);
    const countryDetails = getCountryDetails();
    main.append(searchFilter, countryDetails, countriesDiv);
  }
});

const scrollToTop = scrollTop();
body.append(pageHeader, scrollToTop, main);
