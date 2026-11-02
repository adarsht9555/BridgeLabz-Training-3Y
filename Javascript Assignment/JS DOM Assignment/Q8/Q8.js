const dropdown = document.querySelector("#dropdown");
const dropdownButton = document.querySelector("#dropdownButton");
const dropdownOptions = document.querySelector("#dropdownOptions");
const selectedValue = document.querySelector("#selectedValue");

function closeDropdown() {
  dropdownOptions.hidden = true;
  dropdownButton.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    closeDropdown();
  }
}, true);

dropdownButton.addEventListener("click", function () {
  const willOpen = dropdownOptions.hidden;
  dropdownOptions.hidden = !willOpen;
  dropdownButton.setAttribute("aria-expanded", String(willOpen));
});

dropdownOptions.addEventListener("click", function (event) {
  const optionButton = event.target.closest("button[data-value]");
  if (!optionButton) return;

  const chosenValue = optionButton.dataset.value;
  dropdownButton.textContent = `${chosenValue} ▾`;
  selectedValue.textContent = chosenValue;
  closeDropdown();
});