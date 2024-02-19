// start countries
const inpEl = document.querySelector("#inp");
const searchForm = document.querySelector("form");
const countrySection = document.querySelector("#country");
const bordersSection = document.querySelector("#borders");
const titleBorders = document.querySelector("#title");
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const countryRes = await fetch(
      `https://restcountries.com/v3.1/name/${inpEl.value}`
    );
    const countryData = await countryRes.json();
    const [singleCountry] = countryData;
    countrySection.innerHTML = `<h2>"Country"</h2><br><br>
    <div>
    <img src="${singleCountry.flags.png}" alt="">
    <h2>${singleCountry.name.common}</h2>
    </div>`;
    const borders = singleCountry.borders;
    bordersSection.innerHTML = "";
    titleBorders.style.visibility = "visible";
    borders.map(async (z) => {
      const bordersRes = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${z}`
      );
      const bordersData = await bordersRes.json();
      const [firstIndex] = bordersData;
      bordersSection.innerHTML += `<div>
        <img src="${firstIndex.flags.png}" alt="">
        <h2>${firstIndex.name.common}</h2>
        </div>`;
    });
  } catch (err) {
    console.log(err);
  }
});
// end countries

// start weather
const searchWeather = document.querySelector(".weather");
const inpWeather = document.querySelector("#search");
const textEl=document.querySelector('#text')
const sec=document.querySelector('#sec')
searchWeather.addEventListener("submit",async (e) => {
    
  e.preventDefault();
  const res=await fetch(`https://open-weather13.p.rapidapi.com/city/${inpWeather.value}`,{
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '384ba6ddb4mshd30ea53794d2c1bp16a8e9jsn1941df36d024',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
  })
  const data=await res.json()
  textEl.innerHTML=sec.innerHTML=''
  textEl.innerHTML+=`<p>temp:${data.main.temp}</p>
  <p>min:${data.main.temp_min}</p>
  <p>max:${data.main.temp_max}</p>`;

  data.main.temp>=30?sec.innerHTML=`<span class="main"><img class="sun" src="/assets/869869.png" alt="کشور روسیه رو انتخاب کن(عکس افتاب)شاید نیاد "> <img class="sun-cloud" src="/assets/cloud-computing.png" alt=""></span>`:sec.innerHTML=`<span class="main"><img  class="sun" src="assets/moon.png" alt=""><img class="sun-cloud" src="assets/hail.png" alt=""></span>`
  inpWeather.value=''
});
// end weather
// start asos
const productsSection = document.querySelector("#products");
(async () => {
  try {
    const res = await fetch(
      `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "384ba6ddb4mshd30ea53794d2c1bp16a8e9jsn1941df36d024",
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    data.products?.map((e) => {
      productsSection.innerHTML += `<div id='c'>
        <h2>${e.brandName}</h2>
        <p>${e.price.current.text}</p>
    </div>`;
    });
  } catch (err) {
    console.log(err);
  }
})();
// end asos
