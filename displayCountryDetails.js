/**
 * @fileOverview
 * a country's details are displayed when it is clicked on the dashboard
 * the event delegation is handled here when a country is clicked on the dashboard
 */
const countryDetails = document.createElement("div");
Object.assign(countryDetails, {
  id: "countryDetails",
  className: "countryDetails_hide",
});

const back_btn = document.createElement("button");
back_btn.setAttribute("id", "back");
back_btn.textContent = "Back";
back_btn.addEventListener("click", () => {
  countryDetails.classList.add("countryDetails_hide");
  document.body.classList.remove("body_hide");
});

let details = `<div id="country_data" class="country_modal_container">
                            <div id="flag_data" class="country_modal_flex1"><img id="ctry_flag" class="country_modal_flag"></div>                
                            <div id="country_info" class="country_modal_flex2">
                              <h2 class="country_title" id="name"></h2>
                              <div class="country_modal_info">
                                <div class="country_modal_items">
                                <strong>Official Name: </strong><p id="officialName" class="detailsText"></p><br>
                                <strong>Population: </strong><p id="population" class="detailsText"></p><br>
                                <strong>Region: </strong><p id="region" class="detailsText"></p><br>
                                <strong>Sub-region: </strong><p id="subRegion" class="detailsText"></p><br>
                              </div>
                              <div class="country_modal_items">
                                <strong>Capital: </strong><p id="capital" class="detailsText"></p><br>
                                <strong>Languages: </strong><p id="languages" class="detailsText"></p><br>
                                <strong>Time zone: </strong><p id="timezones" class="detailsText"></p><br>
                                <strong>Currencies: </strong><p id="currencies" class="detailsText"></p><br>
                              </div>
                              </div>
                            </div>
                        </div>`;

export const getCountryDetails = () => {
  countryDetails.append(back_btn);
  countryDetails.insertAdjacentHTML("beforeend", details);
  return countryDetails;
};

export const eventListenerForCountry = (countriesDiv, countriesToDisplay) => {
  countriesDiv.addEventListener("click", (event) => {
    // if (event.target.id != "back") {
      let country = event.target.dataset.country;
      let code = event.target.dataset.code;
      let clickedCountry = countriesToDisplay.filter(
        (obj) => obj.name === country && obj.a3Code === code
      );
      if (Array.isArray(clickedCountry) && clickedCountry.length === 1) {
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
        } = clickedCountry[0];

        document.getElementById("ctry_flag").src = flag;
        document.getElementById("name").textContent = name;
        document.getElementById("officialName").textContent = officialName;
        document.getElementById("currencies").textContent = currencies;
        document.getElementById("population").textContent = population;
        document.getElementById("subRegion").textContent = subRegion;
        document.getElementById("capital").textContent = capital;
        document.getElementById("languages").textContent = languages;
        document.getElementById("region").textContent = region;
        document.getElementById("timezones").textContent = timezones;
        countryDetails.classList.remove("countryDetails_hide");
        document.body.classList.add("body_hide");
      }
    // }
  });
};

