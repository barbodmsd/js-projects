"use strict";
const companyEl = document.querySelector("#company");
const dropDownEl = document.querySelector("#drop-down");
const dropDownIcon = document.querySelector("#drop-down-icon");
const scrollDropDown = document.querySelector("#scroll-drop-down");
const productsEl = document.querySelector("#products");
const loginEl = [...document.querySelectorAll(".login")];
const form = document.querySelector("#form-section");
const closeBtn = document.querySelector("#close-btn");
const signup = document.querySelector("#sign");
const loginFrom = [...document.querySelectorAll(".form")];
const rotateBtn = [...document.querySelectorAll(".rotate-btn")];
const card = document.querySelector("#card");
const inputsEl = [...document.querySelectorAll(".form input")];
const passIcon = [...document.querySelectorAll(".pass-icon")];
const passInp = [...document.querySelectorAll(".pass-inp")];
const firstBanner = document.querySelector("#first-banner");
const topIcon = document.querySelector("#top");
const imgEls = [...document.querySelectorAll("#auto-slider div")];
const welcomeBody = document.querySelector("#welcome");
const sliderWithApi = document.querySelector("#api-slider");
const itemProduct = document.querySelector("#item-product");
const searchProductsInp = document.querySelector("#search-products input");
const searchProductsBtn = document.querySelector("#search-products button");
const bodyOfBtns = document.querySelector("#btns");
const refreshIcon = document.querySelector(".bx-refresh");
const imageSliderMobile=[...document.querySelectorAll('#auto-slider-mobile div')]
const menu=document.querySelector('#menu')
const hamburgerMenu=document.querySelector('#hamburger-menu')
const closeMenu=document.querySelector('#close-menu')
// for the navigation open company dropDown
companyEl.addEventListener("click", (e) => {
  dropDownEl.classList.toggle("show-drop-down");
  dropDownIcon.classList.toggle("drop-down-icon-rotate");
});
// for the navigation products scroll dropDown
productsEl.addEventListener("click", () => {
  scrollDropDown.classList.toggle("scroll-drop-down-show");
});
// for show the dropDown from top to bottom and rotate the form
loginEl.map((e) => {
  e.addEventListener("click", () => form.classList.add("show-form-section"));
});
signup.addEventListener("click", () => {
  form.classList.add("show-form-section");
  form.classList.contains("show-form-section") &&
    card.classList.add("rotate-card");
});
closeBtn.addEventListener("click", () => {
  form.classList.remove("show-form-section");
  card.classList.remove("rotate-card");
  inputsEl.map((z) => z.classList.remove("input-hover"));
});
rotateBtn.map((e) => {
  e.addEventListener("click", () => card.classList.toggle("rotate-card"));
});
loginFrom.map((e) => {
  e.addEventListener("submit", (x) => {
    x.preventDefault();
    inputsEl.map((z) => {
      z.value = "";
      inputsEl.map((x) => x.classList.remove("input-hover"));
    });
  });
});
// / all input from form
inputsEl.map((e) => {
  e.addEventListener("click", () => {
    inputsEl.map((x) => x.classList.remove("input-hover"));
    e.classList.toggle("input-hover");
  });
});
// to give password input type text
passIcon.map((e) => {
  e.addEventListener("click", () => {
    passInp.map((x) => {
      const attr = x.getAttribute("type") === "password" ? "text" : "password";
      x.setAttribute("type", attr);
    });
    e.classList.toggle("bx-show");
    e.classList.toggle("bx-hide");
  });
});
//  icon to go to the navigation
window.addEventListener("scroll", () => {
  const bannerBottom = firstBanner.getBoundingClientRect().bottom;
  bannerBottom < 400
    ? topIcon.classList.add("show-top")
    : topIcon.classList.remove("show-top");
});
// dynamic welcome
const words = ["Welcome", "to my", "website"];
let i = 0;
setInterval(() => {
  welcomeBody.innerHTML = `<h1>${words[i]}</h1>`;
  i++;
  i === words.length && (i = 0);
}, 2000);
//  work with api
// show all products and by refresh icon
(async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    data?.map((e) => {
      itemProduct.innerHTML += `<div>
            <img src="${e.image}" alt="" />
            <h2>${e.title.slice(0, 10)}</h2>
            <p> price:${e.price}$</p>
          </div>`;
    });
  } catch (err) {
    console.log(err);
  }
})();
refreshIcon.addEventListener("click", async () => {
  refreshIcon.classList.toggle("rotate-refresh");
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    itemProduct.textContent=''
    data?.map((e) => {
      itemProduct.innerHTML += `<div>
            <img src="${e.image}" alt="" />
            <h2>${e.title.slice(0, 10)}</h2>
            <p> price:${e.price}$</p>
          </div>`;
    });
  } catch (err) {
    console.log(err);
  }
});
// show product by id
searchProductsBtn.addEventListener("click", async () => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${searchProductsInp.value}`
    );
    const data = await res.json();
    itemProduct.textContent = "";
    itemProduct.innerHTML = `<div>
            <img src="${data.image}" alt="" />
            <h2>${data.title.slice(0, 10)}</h2>
            <p> price:${data.price}$</p>
          </div>`;
  } catch (err) {
    console.log(err);
  }
});
// show products by categories
(async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    data?.map((e) => (bodyOfBtns.innerHTML += `<button>${e}</button>`));
    const categoriesButtons = [...document.querySelectorAll("#btns button")];
    categoriesButtons.map((e) => {
      e.addEventListener("click", async () => {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${e.textContent}`
        );
        const data = await res.json();
        itemProduct.textContent = "";
        data.map((x) => {
          itemProduct.innerHTML += `<div>
            <img src="${x.image}" alt="" />
            <h2>${x.title.slice(0, 10)}</h2>
            <p> price:${x.price}$</p>
          </div>`;
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
})();
// auto slider
let indexActiveSlider = 2;
setInterval(() => {
  imgEls[indexActiveSlider].classList.remove("show-slider");
  indexActiveSlider++;
  indexActiveSlider == imgEls.length && (indexActiveSlider = 0);
  imgEls[indexActiveSlider].classList.add("show-slider");
}, 3000);
// auto slider mobile
let indexActiveSliderMobile=0
setInterval(() => {
  imageSliderMobile[indexActiveSliderMobile].classList.remove("show-slider-mobile");
  indexActiveSliderMobile++;
  indexActiveSliderMobile == imageSliderMobile.length && (indexActiveSliderMobile = 0);
  imageSliderMobile[indexActiveSliderMobile].classList.add("show-slider-mobile");
}, 3000);
// hamburger menu
hamburgerMenu.addEventListener('click',()=>{
  menu.classList.add('show-menu')
})
closeMenu.addEventListener('click',()=>{
  menu.classList.remove('show-menu')
})
