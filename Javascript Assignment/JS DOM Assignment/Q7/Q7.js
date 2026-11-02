// Q7: Show client coordinates and place red dots on double-click.
const trackingBox = document.querySelector("#trackingBox");
const coordinates = document.querySelector("#coordinates");

trackingBox.addEventListener("mousemove", function (event) {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", function (event) {
  const boxRectangle = trackingBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "red-dot";
  dot.style.left = `${event.clientX - boxRectangle.left}px`;
  dot.style.top = `${event.clientY - boxRectangle.top}px`;
  trackingBox.appendChild(dot);
});
