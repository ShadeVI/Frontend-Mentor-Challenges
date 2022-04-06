const API_BASE_URL = "	https://api.adviceslip.com";

/* GET DOM ELEMENTS */
const idAdviceDOM = document.getElementById("adviceID");
const quoteDOM = document.getElementById("quote");
const btnNewAdvice = document.querySelector("#new-advice");
const boxDOM = document.querySelector(".box");

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
  if (!PreventSpam) {
    PreventSpam = true;
    boxDOM.classList.add("blur");

    const dataObj = await fetchAPI(API_BASE_URL);
    const { id, advice } = dataObj.slip;

    idAdviceDOM.innerText = id;
    quoteDOM.innerText = advice;
    boxDOM.classList.remove("blur");
    setTimeout(() => {
      PreventSpam = false;
    }, 1500);
  }
};
