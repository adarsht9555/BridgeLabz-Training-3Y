const messageArea = document.querySelector("#message");
const counter = document.querySelector("#counter");
const resetButton = document.querySelector("#resetButton");
const maximumCharacters = 100;

function updateCounter() {
  const remainingCharacters = maximumCharacters - messageArea.value.length;
  counter.textContent = `${remainingCharacters} characters remaining`;
  counter.classList.toggle("warning", remainingCharacters <= 20 && remainingCharacters > 0);
  counter.classList.toggle("limit", remainingCharacters === 0);
}

messageArea.addEventListener("beforeinput", function (event) {
  const currentLength = messageArea.value.length;
  const insertedText = event.data || "";

  if (event.inputType.startsWith("insert") &&
      insertedText.length > 0 &&
      currentLength + insertedText.length > maximumCharacters) {
    event.preventDefault();
  }
});

messageArea.addEventListener("input", updateCounter);

resetButton.addEventListener("click", function () {
  messageArea.value = "";
  updateCounter();
  messageArea.focus();
});

updateCounter();