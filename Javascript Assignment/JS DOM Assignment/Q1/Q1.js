const productForm = document.querySelector("#productForm");
const productInput = document.querySelector("#productInput");
const productList = document.querySelector("#productList");
let activeEditor = null;

function saveActiveEdit() {
  if (!activeEditor) return;

  const listItem = activeEditor.closest("li");
  const nameSpan = listItem.querySelector(".product-name");
  const newName = activeEditor.value.trim();

  if (newName) {
    nameSpan.textContent = newName;
  }

  activeEditor.replaceWith(nameSpan);
  activeEditor = null;
}

productForm.addEventListener("submit", function (event) {
  event.preventDefault();
  saveActiveEdit();

  const productName = productInput.value.trim();
  if (!productName) return;

  const listItem = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = productName;

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.dataset.action = "edit";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.dataset.action = "delete";
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";

  listItem.append(nameSpan, editButton, deleteButton);
  productList.appendChild(listItem);
  productInput.value = "";
  productInput.focus();
});

productList.addEventListener("click", function (event) {
  const clickedButton = event.target.closest("button[data-action]");
  if (!clickedButton) return;

  const listItem = clickedButton.closest("li");
  if (clickedButton.dataset.action === "delete") {
    if (activeEditor && activeEditor.closest("li") === listItem) {
      activeEditor = null;
    }
    listItem.remove();
    return;
  }

  saveActiveEdit();
  const nameSpan = listItem.querySelector(".product-name");
  const editInput = document.createElement("input");
  editInput.className = "edit-input";
  editInput.value = nameSpan.textContent;
  nameSpan.replaceWith(editInput);
  activeEditor = editInput;
  editInput.focus();
  editInput.select();

  editInput.addEventListener("keydown", function (keyEvent) {
    if (keyEvent.key === "Enter") {
      keyEvent.preventDefault();
      saveActiveEdit();
    } else if (keyEvent.key === "Escape") {
      const originalName = listItem.querySelector(".edit-input").value;
      if (originalName.trim()) saveActiveEdit();
      else saveActiveEdit();
    }
  });
});

document.addEventListener("click", function (event) {
  if (activeEditor && !activeEditor.contains(event.target)) {
    saveActiveEdit();
  }
});