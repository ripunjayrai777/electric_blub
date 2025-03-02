let isBulbOn = true;

function toggleBulb() {
  const bulb = document.querySelector(".bulb"); // Selects the first element with class "bulb"

  if (!bulb) {
    console.error("Bulb element not found!");
    return;
  }

  // Toggle image source
  bulb.src = isBulbOn ? "off_bulb.png" : "on_bulb.png";

  isBulbOn = !isBulbOn;
}
