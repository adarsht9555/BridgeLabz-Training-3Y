// Q6: Filter student table rows as the user types, ignoring letter case.
const searchInput = document.querySelector("#searchInput");
const studentRows = Array.from(document.querySelectorAll("#studentRows tr"));
const noResults = document.querySelector("#noResults");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleRowCount = 0;

  studentRows.forEach(function (row) {
    const rowText = row.textContent.toLowerCase();
    const matches = rowText.includes(searchTerm);
    row.hidden = !matches;
    if (matches) visibleRowCount++;
  });

  noResults.hidden = visibleRowCount !== 0;
});
