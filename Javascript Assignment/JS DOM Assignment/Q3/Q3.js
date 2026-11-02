const registrationForm = document.querySelector("#registrationForm");
const formSteps = Array.from(document.querySelectorAll(".form-step"));
const stepLabel = document.querySelector("#stepLabel");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const summary = document.querySelector("#summary");
let currentStep = 0;

const fields = [
  { input: document.querySelector("#fullName"), error: document.querySelector("#nameError"), message: "Please enter your name." },
  { input: document.querySelector("#email"), error: document.querySelector("#emailError"), message: "Enter a valid email address." },
  { input: document.querySelector("#password"), error: document.querySelector("#passwordError"), message: "Password must contain at least 6 characters." }
];

function validateCurrentStep() {
  const field = fields[currentStep];
  const value = field.input.value.trim();
  let isValid = value.length > 0;

  if (currentStep === 1) {
    isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  } else if (currentStep === 2) {
    isValid = value.length >= 6;
  }

  field.error.textContent = isValid ? "" : field.message;
  return isValid;
}

function showStep() {
  formSteps.forEach((step, index) => step.classList.toggle("active", index === currentStep));
  stepLabel.textContent = `Step ${currentStep + 1} of 3`;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === 2 ? "Finish" : "Next";
}

nextButton.addEventListener("click", function () {
  if (!validateCurrentStep()) return;

  if (currentStep < 2) {
    currentStep++;
    showStep();
    fields[currentStep].input.focus();
    return;
  }

  document.querySelector("#summaryName").textContent = `Name: ${fields[0].input.value.trim()}`;
  document.querySelector("#summaryEmail").textContent = `Email: ${fields[1].input.value.trim()}`;
  registrationForm.hidden = true;
  stepLabel.hidden = true;
  summary.hidden = false;
});

backButton.addEventListener("click", function () {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
});

fields.forEach((field) => {
  field.input.addEventListener("input", function () {
    field.error.textContent = "";
  });
});

document.querySelector("#restartButton").addEventListener("click", function () {
  registrationForm.reset();
  registrationForm.hidden = false;
  stepLabel.hidden = false;
  summary.hidden = true;
  fields.forEach((field) => field.error.textContent = "");
  currentStep = 0;
  showStep();
});

showStep();