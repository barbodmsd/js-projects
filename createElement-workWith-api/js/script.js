// start nav
const bannerEl = document.querySelector("#second-banner");
const navEl = document.querySelector(".menu");
window.addEventListener("scroll", () => {
  const top = bannerEl.getBoundingClientRect().top;
  top <= 1 ? navEl.classList.add("show") : navEl.classList.remove("show");
});
// end nav

// start create element
const selectBox = document.querySelector("#select");
const valueArea = document.querySelector("#value-area");
const atributArea = document.querySelector("#atribut-area");
const styleArea = document.querySelector("#style-area");
const submitBtn = document.querySelector("#submit-btn");
const cards = [...document.querySelectorAll("#product div")];
submitBtn.addEventListener("click", () => {
  const element = document.createElement(`${selectBox.value}`);
  element.innerHTML = `${valueArea.value}`;
  const attr = atributArea.value.split(",").map((e) => {
    let [nameOfAttr, valueOfAttr] = e.split("=");
    element.setAttribute(`${nameOfAttr}`, `${valueOfAttr}`);
  });
  const sttr = styleArea.value.split(",").map((e) => {
    let [selector, style] = e.split(":");
    element.style[selector] = `${style}`; //hey attention to here
  });
  valueArea.value = atributArea.value = styleArea.value = selectBox.value = "";
  cards.map((e) =>
    e.addEventListener("click", () => {
      e.textContent = "";
      e.append(element);
    })
  );
  console.log(element)
});
// end create element
const inpEl = document.querySelector("#inp");
const products = document.querySelector(".product-items");
const btnEl = document.querySelector("#fetch-btn");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    products.innerHTML = "";
    data.map((e) => {
      products.innerHTML += `<div>
     <h1>#${e.id}</h1>
     <h3>${e.title.slice(0, 15)}...</h3>
     <p>${e.body.slice(0, 50)}...</p>
     </div>`;
    });
  })
  .catch((err) => console.log(err));

btnEl.addEventListener("click", () => {
  inpEl.value = "";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      products.innerHTML = "";
      data.map((e) => {
        products.innerHTML += `<div>
     <h1>#${e.id}</h1>
     <h3>${e.title.slice(0, 15)}...</h3>
     <p>${e.body.slice(0, 50)}...</p>
     </div>`;
      });
    }).catch((err) => console.log(err));
});

inpEl
  .addEventListener("keyup", () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${inpEl.value}`)
      .then((resI) => resI.json())
      .then((dataI) => {
        products.innerHTML = `<div>
        <h1>#${dataI.id}</h1>
        <h3>${dataI.title.slice(0, 15)}...</h3>
        <p>${dataI.body.slice(0, 50)}...</p>
        </div>`;
      }).catch((err) => console.log(err))
  });
// end create element