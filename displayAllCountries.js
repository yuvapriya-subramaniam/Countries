/**
 * @fileOverview
 * countries are displyed as country card to be displayed in the dashboard
 * cards are given dataset attributes of country and code to get the clicked country details to display in the details page
 */
function displayCountries(countriesToDisplay, countriesDiv) {
  countriesDiv.innerHTML = "";
  const fragment = document.createDocumentFragment();
  //populate data and display as a country card
  const countries_size = countriesToDisplay.length;
  for (let i = 0; i < countries_size; i++) {
    let countryCard = document.createElement("div");
    countryCard.setAttribute("id", `country_${i}`);
    countryCard.setAttribute("class", "countriesContainer");
    const {
      flag,
      name,
      officialName,
      region,
      subRegion,
      capital,
      languages,
      timezones,
      currencies,
      population,
      latlng,
      a3Code,
    } = countriesToDisplay[i];

    //Country card data for dashboard
    const cardFragment = document.createDocumentFragment();
    let h3 = document.createElement("h3");
    h3.dataset.country = name;
    h3.dataset.code = a3Code;
    h3.textContent = name;

    let flagContainer = document.createElement("div");
    flagContainer.dataset.country = name;
    flagContainer.dataset.code = a3Code;
    flagContainer.className = "flagContainer";
    let flagImg = document.createElement("img");
    flagImg.dataset.country = name;
    flagImg.dataset.code = a3Code;
    flagImg.src = flag;
    flagImg.alt = `Flag of ${name}`;
    flagContainer.append(flagImg);

    let capitalP = document.createElement("p");
    capitalP.dataset.country = name;
    capitalP.dataset.code = a3Code;
    capitalP.className = "details";
    let capitalTitle = document.createElement("strong");
    capitalTitle.dataset.country = name;
    capitalTitle.dataset.code = a3Code;
    capitalTitle.textContent = "Capital: ";
    let capitalData = document.createElement("span");
    capitalData.dataset.country = name;
    capitalData.dataset.code = a3Code;
    capitalData.className = "capital";
    capitalData.textContent = capital;
    capitalP.append(capitalTitle, capitalData);

    let countryCodeP = document.createElement("p");
    countryCodeP.dataset.country = name;
    countryCodeP.dataset.code = a3Code;
    countryCodeP.className = "details";
    let codeTitle = document.createElement("strong");
    codeTitle.dataset.country = name;
    codeTitle.dataset.code = a3Code;
    codeTitle.textContent = "Country Code: ";
    countryCodeP.append(codeTitle, a3Code);

    let latLngP = document.createElement("p");
    latLngP.dataset.country = name;
    latLngP.dataset.code = a3Code;
    latLngP.className = "details";
    let latLngTitle = document.createElement("strong");
    latLngTitle.dataset.country = name;
    latLngTitle.dataset.code = a3Code;
    latLngTitle.textContent = "Latitude, Longitude: ";
    latLngP.append(latLngTitle, latlng);

    let regionP = document.createElement("p");
    regionP.dataset.country = name;
    regionP.dataset.code = a3Code;
    regionP.className = "details";
    let regionTitle = document.createElement("strong");
    regionTitle.dataset.country = name;
    regionTitle.dataset.code = a3Code;
    regionTitle.textContent = "Region: ";
    regionP.append(regionTitle, region);

    cardFragment.append(
      h3,
      flagContainer,
      capitalP,
      countryCodeP,
      latLngP,
      regionP
    );
    countryCard.append(cardFragment);
    fragment.append(countryCard);
  }
  return countriesDiv.append(fragment);
}

export { displayCountries };
