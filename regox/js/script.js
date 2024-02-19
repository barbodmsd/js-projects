const formSubmit = document.querySelector("form");
const textInp = document.querySelector("#text");
const searchInp = document.querySelector("#search-word");
const replaceInp = document.querySelector("#replace-word");
const insensitiveCheckbox = document.querySelector("#i");
const globalCheckbox = document.querySelector("#g");
const dCheckbox=document.querySelector('#d')
const sCheckbox=document.querySelector('#s')
const pEl=document.querySelector('p')

const setRegex=(key,flag)=>new RegExp(`${key}`,`${flag}`)
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault()
  if(insensitiveCheckbox.checked&&globalCheckbox.checked&&dCheckbox.checked&&sCheckbox.checked){
    pEl.textContent=textInp.value.replace(setRegex(searchInp.value,'igds'),replaceInp.value)
  }else if(insensitiveCheckbox.checked&&globalCheckbox.checked&&dCheckbox.checked){
    pEl.textContent=textInp.value.replace(setRegex(searchInp.value,'igd'),replaceInp.value)
  }else if(insensitiveCheckbox.checked&&globalCheckbox.checked){
    pEl.textContent=textInp.value.replace(setRegex(searchInp.value,'ig'),replaceInp.value)
  }else if(insensitiveCheckbox.checked){
    pEl.textContent=textInp.value.replace(setRegex(searchInp.value,'i'),replaceInp.value)
  }else if(globalCheckbox.checked){
    pEl.textContent=textInp.value.replace(setRegex(searchInp.value,'g'),replaceInp.value)
  }else if(dCheckbox.checked){
    pEl.textContent=textInp.value.replace(setRegex(searchInp.value,'d'),replaceInp.value)
  }else if(sCheckbox.checked){
    pEl.textContent=textInp.value.replace(setRegex(searchInp.value,'s'),replaceInp.value)
  }
  else{pEl.textContent='please click one checkbox!'}
})