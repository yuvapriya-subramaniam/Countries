/**@fileOverview
 *API request is made and entire data is fetched and returned
 */

async function fetchAllCountries(URL) {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(
        `HTTP error. Response status is ${response.status} and response message is ${response.statusText}`
      );
    }
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error(`Error occured in data fetch: ${error.message}`);
    return null;
  }
}

export default fetchAllCountries;
