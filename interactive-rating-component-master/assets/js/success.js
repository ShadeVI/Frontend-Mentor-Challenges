document.addEventListener("DOMContentLoaded", () => {
  const rateValue = sessionStorage.getItem("rate");
  const rateEl = document.querySelector("#selectedRating");
  rateEl.textContent = rateValue;
});
