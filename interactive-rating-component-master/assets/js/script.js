const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (e) => {
  const formData = new FormData(formEl);
  if (!formData.has("rate")) return e.preventDefault();

  sessionStorage.setItem("rate", formData.get("rate"));
});
