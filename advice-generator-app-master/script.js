const API_BASE_URL = "	https://api.adviceslip.com";

/* GET DOM ELEMENTS */
const idAdviceDOM = document.getElementById("adviceID");
const quoteDOM = document.getElementById("quote");
const btnNewAdvice = document.querySelector("#new-advice");
const boxDOM = document.querySelector(".box");
const alertSpamDOM = document.querySelector(".alert-spam-protection");

let PreventSpam = false;

/* WAIT FOR DOM TO LOAD. FETCH FIRST QUOTE. ADD LISTENER TO BUTTON */
document.addEventListener("DOMContentLoaded", async () => {
  addNewAdvice();
  btnNewAdvice.addEventListener("click", addNewAdvice);
});

const fetchAPI = async (url) => {
  const data = await fetch(`${url}/advice`);
  const dataJson = await data.json();
  return dataJson;
};

const addNewAdvice = async () => {
  if (PreventSpam) {
    alertSpamDOM.classList.remove("hidden");
    setTimeout(() => {
      alertSpamDOM.classList.add("hidden");
    }, 1500);
  }
  if (!PreventSpam) {
    alertSpamDOM.classList.add("hidden");
    PreventSpam = true;
    boxDOM.classList.add("blur");

    const dataObj = await fetchAPI(API_BASE_URL);
    const { id, advice } = dataObj.slip;

    idAdviceDOM.innerText = id;
    quoteDOM.innerText = advice;
    boxDOM.classList.remove("blur");
    setTimeout(() => {
      PreventSpam = false;
    }, 2000);
  }
};
