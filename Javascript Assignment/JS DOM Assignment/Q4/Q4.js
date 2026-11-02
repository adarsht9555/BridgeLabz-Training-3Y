const themeButtons = document.querySelector(".theme-buttons");
const currentThemeLabel = document.querySelector("#currentTheme");
const themeClasses = {
  light: "",
  dark: "dark-theme",
  blue: "blue-theme"
};

function applyTheme(themeName) {
  // setAttribute is used as required to manipulate the body's class and custom attribute.
  document.body.setAttribute("class", themeClasses[themeName]);
  document.body.setAttribute("data-theme", themeName);
  currentThemeLabel.textContent = themeName;
}

themeButtons.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-theme-choice]");
  if (!button) return;
  applyTheme(button.dataset.themeChoice);
});

applyTheme(document.body.getAttribute("data-theme") || "light");