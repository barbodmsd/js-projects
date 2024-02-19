// start input
const inpEl = document.querySelector("#inp");
const submitBtn = document.querySelector("#submit-btn");
const printBtn = document.querySelector("#print-btn");
const tableEl = document.querySelector("table");
const bodyEl = document.querySelector("#table-body");
const footEl = document.querySelector("#table-foot");
const movement = [];
const dep = [];
const wid = [];
let deposit = 0;
let widdrop = 0;
let total = 0;
setTimeout(() => inpEl.classList.add("anime"), 4000);
submitBtn.addEventListener("click", () => {
  inpEl.value.split(",").map((item) => movement.push(+item));
  movement.forEach((item) => (item >= 0 ? dep.push(item) : wid.push(item)));
  inpEl.value = "";
  dep.forEach((item) => (deposit += item));
  wid.forEach((item) => (widdrop += item));
  total = deposit + widdrop * -1;
});
printBtn.addEventListener("click", () => {
  let index = 1;
  tableEl.style.opacity = "1";
  bodyEl.textContent = "";
  footEl.textContent = "";
  movement.forEach((item) => {
    if (item > 0) {
      bodyEl.innerHTML += `<tr><td>${index++}</td><td>${item}</td><td>0</td></tr>`;
    } else {
      bodyEl.innerHTML += `<tr><td>${index++}</td><td>0</td><td>${item}</td></tr>`;
    }
  });
  footEl.innerHTML += `<tr><td>Total=${total}</td><td>dep= ${deposit}</td><td>wid= ${widdrop}</td></tr>`;
});
// end input

// start time
const clock = document.querySelector("#clock");
const start = document.querySelector("#start-btn");
const pause = document.querySelector("#pause-btn");
const reset = document.querySelector("#reset-btn");
let [hour, minuit, second, sadomSecond] = [0, 0, 0, 0];
let timer = setInterval;
let s = 0;
start.addEventListener("click", () => {
  if (s == 0) {
    timer = setInterval(() => {
      sadomSecond++;
      if (sadomSecond == 60) {
        sadomSecond = 0;
        second++;
        if (second == 60) {
          second = 0;
          minuit++;
          if (minuit == 60) {
            minuit = 0;
            hour++;
          }
        }
      }
      let h = hour < 10 ? "0" + hour : hour;
      let m = minuit < 10 ? "0" + minuit : minuit;
      let s = second < 10 ? "0" + second : second;
      let ss = sadomSecond < 10 ? "0" + sadomSecond : sadomSecond;

      clock.textContent = h + ":" + m + ":" + s + ":" + ss;
    }, 10);
    s = 1;
  }
});
reset.addEventListener("click", () => {
  [hour, minuit, second, sadomSecond] = [0, 0, 0, 0];
  clock.innerHTML = "00:00:00:00";
  clearInterval(timer);
  s = 0;
});
pause.addEventListener("click", () => {
  clearInterval(timer);
  s = 0;
});
// end time
// start slider
const img = document.querySelectorAll("#slider div");
let sliderIndex = 0;
setInterval(()=>{
  img[sliderIndex].classList.remove("show");
  sliderIndex++
  if (sliderIndex === img.length) sliderIndex = 0;
  img[sliderIndex].classList.add('show')
},5000)
// end slider
  
