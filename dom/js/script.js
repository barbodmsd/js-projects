// strat event scroll
const boxEl = document.querySelectorAll(".box");

const checked = () => {
  const trriger = window.innerHeight * 0.8;
  for (let i = 0; i < boxEl.length; i++) {
    const boxTop = boxEl[i].getBoundingClientRect().top;
    if (boxTop < trriger) {
      boxEl[i].classList.add("show");
    } else boxEl[i].classList.remove("show");
  }
};
checked();
window.addEventListener("scroll", checked);
// end event scroll

// start letter to capital
const letterInpEl = document.querySelector("#letter-inp");
const letterBtnEl = document.querySelector("#letter-btn");
const capitalEl = document.querySelector("#capital");

letterBtnEl.addEventListener("click", () => {
  const name = letterInpEl.value;
  const arrOfName = name.split("");
  const [firstLetter] = arrOfName;
  const fullName = [firstLetter.toUpperCase(), ...name.substring(1)];
  capitalEl.textContent = fullName.join(" ");
  letterInpEl.value = "";
});
// end letter to capital

// start calc
const calcInpNumber = document.querySelector("#calc-inp-number");
const calcInpOperator = document.querySelector("#calc-inp-operator");
const calcBtn = document.querySelector("#calc-btn");
const answerEl = document.querySelector("#answer");

calcBtn.addEventListener("click", () => {
  const number = calcInpNumber.value.split("-");
  const operator = calcInpOperator.value;
  const arr = ["+", "*", "-", "/", "%"];
  const boolean = arr.includes(operator);
  if (boolean == true) {
    const newNumber = eval(number.join(operator));
    answerEl.textContent = newNumber;
  } else answerEl.textContent = `Fuck! I told you what to write `;
  calcInpNumber.value = "";
  calcInpOperator.value = "";
});
// end calc

// start day
const dayInp = document.querySelector("#day-inp");
const hoursInp = document.querySelector("#day-open-or-close");
const dayBtn = document.querySelector("#day-btn");
const resultEl = document.querySelector("#result");
const openingHours = {
  mon: {
    open: 10,
    close: 23,
  },
  sat: {
    open: 8,
    close: 24,
  },
  sun: {
    open: 12,
    close: 22,
  },
  wed: {
    open: 8,
    close: 24,
  },
  tu: {
    open: 15,
    close: 23,
  },
  th: {
    open: 9,
    close: 18,
  },
};

dayBtn.addEventListener("click", () => {
  const day = dayInp.value;
  const hours = hoursInp.value;
  const keyday = openingHours[day];
  const o = keyday.open;
  const c = keyday.close;
  const array = ["sat", "sun", "mon", "tu", "wed", "th", "fri"];
  if (array.includes(day) == true) {
    if (hours == "open") {
      resultEl.textContent =`Resturant time on ${day}: open: ${o}`;
    } else if (hours == "close") {
      resultEl.textContent = `Resturant time on ${day}: close: ${c}`;
    }
  } else {
     resultEl.textContent = `Fuck man are you blind?`;
  }
  dayInp.value = "";
  hoursInp.value = "";
});