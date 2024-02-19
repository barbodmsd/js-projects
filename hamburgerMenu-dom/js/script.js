'use strict'
// start menu hamburger
const menuItemEl=document.querySelector('#menu-item')
const openEl=document.querySelector('#open')
const closeEl=document.querySelector('#close')
openEl.addEventListener('click',()=>{
    menuItemEl.classList.add('show-menu-item')
})
closeEl.addEventListener('click',()=>{
    menuItemEl.classList.remove('show-menu-item')
})
// end menu hamburger

// start input tittle
const inpEl=document.querySelector('#inp')
const submitBtnEl=document.querySelector('#submit-btn')
const tittleEl=document.querySelector('title')
submitBtnEl.addEventListener('click',()=>{
    tittleEl.textContent=inpEl.value
    inpEl.value=''
})
// end input tittle
