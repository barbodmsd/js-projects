// start form
"use strict";
const flightNumberEl = document.querySelector("#flight-number");
const nameEl = document.querySelector("#name");
const optionEl = document.querySelector("#air-lines");
const addEl = document.querySelector("#add");
const printEl = document.querySelector("#print");
const listEl = document.querySelector("#list-ticket p");
const ticket = [];
addEl.addEventListener("click", () => {
  const flightNumber = flightNumberEl.value;
  const name = nameEl.value.at(0).toUpperCase() + nameEl.value.slice(1);
  const option = optionEl.value;
  const listOfTicket = {
    flightNumber,
    name,
    option,
  };
  ticket.push(listOfTicket);
  flightNumberEl.value = "";
  nameEl.value = "";
});
printEl.addEventListener("click", () => {
  for (const { flightNumber, name, option } of ticket)
    listEl.innerHTML += `<li> ${option}${flightNumber}  ${name}</li>`;
});
// end form
// start barbod
const numberEl = document.querySelector("#number");
const btnEL = document.querySelector("#btn");
const txtEl = document.querySelector("#p");
const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
btnEL.addEventListener("click", () => {
  txtEl.textContent = "";
  const number = numberEl.value.split("-");
  for (const item of number) txtEl.textContent += `${arr.at(item)} `;
  numberEl.value = "";
});
// end barbod
