/**
 * @fileOverview
 *This file is to perform header element creations with title and theme toggle(dark mode) option and
 *returns the header
 */
const header = (body) => {
  let header_title = document.createElement("h1");
  header_title.setAttribute("class", "header_flex1");
  header_title.innerText = "World Countries";

  let themeDiv = document.createElement("div");
  themeDiv.setAttribute("id", "toggleTheme_div");

  let toggleCheck = document.createElement("input");
  toggleCheck.setAttribute("type", "checkbox");
  toggleCheck.setAttribute("id", "toggle");

  themeDiv.innerHTML =
    '<label for="toggle"><i class="fa-regular fa-moon"></i>Toggle mode</label>';
  themeDiv.append(toggleCheck);

  let header = document.createElement("header");
  header.setAttribute("id", "header");
  header.setAttribute("class", "headerContainer");
  header.append(header_title, themeDiv);
  return header;
};

export default header;
