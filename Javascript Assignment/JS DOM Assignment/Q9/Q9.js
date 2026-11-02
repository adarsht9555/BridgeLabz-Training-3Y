const signupForm = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const successMessage = document.querySelector("#successMessage");

const errorElements = {
  name: document.querySelector("#nameError"),
  email: document.querySelector("#emailError"),
  password: document.querySelector("#passwordError")
};

function validateField(fieldName) {
  let isValid = false;
  let errorMessage = "";
  let inputElement;

  if (fieldName === "name") {
    inputElement = nameInput;
    isValid = nameInput.value.trim().length > 0;
    if (!isValid) errorMessage = "Name is required.";
  } else if (fieldName === "email") {
    inputElement = emailInput;
    isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
    if (!isValid) errorMessage = "Enter a valid email address containing @.";
  } else {
    inputElement = passwordInput;
    isValid = passwordInput.value.length >= 6;
    if (!isValid) errorMessage = "Password must be at least 6 characters.";
  }

  errorElements[fieldName].textContent = errorMessage;
  inputElement.classList.toggle("invalid", !isValid);
  return isValid;
}

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameIsValid = validateField("name");
  const emailIsValid = validateField("email");
  const passwordIsValid = validateField("password");

  if (nameIsValid && emailIsValid && passwordIsValid) {
    successMessage.hidden = false;
  } else {
    successMessage.hidden = true;
  }
});

nameInput.addEventListener("input", function () {
  validateField("name");
  successMessage.hidden = true;
});
emailInput.addEventListener("input", function () {
  validateField("email");
  successMessage.hidden = true;
});
passwordInput.addEventListener("input", function () {
  validateField("password");
  successMessage.hidden = true;
});