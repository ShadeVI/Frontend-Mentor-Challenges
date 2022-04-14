const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (e) => {
  const formData = new FormData(formEl);
  if (!formData.has("rate")) {
    showModal();
    return e.preventDefault();
  }

  sessionStorage.setItem("rate", formData.get("rate"));
});

function showModal() {
  const modalEl = document.querySelector(".modal");
  modalEl.classList.toggle("showModal");
  setTimeout(() => {
    modalEl.classList.toggle("showModal");
  }, 2500);
}
