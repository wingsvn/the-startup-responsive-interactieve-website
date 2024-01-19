
//hiermee selecteer ik het elementen waar na een interactie moet plaatsvinden
const hamburger = document.querySelector(".hamburger")
//console.log("hamburger")
const nav = document.querySelector('.nav-menu')
//console.log("nav")
hamburger.addEventListener("click", function(event) { //hier voeg ik een event toe aan het element en koppel ik de actie die moet plaatsvinden
//console.log("click")
    nav.classList.toggle('active') // hiermee komt de navigatie-links te voorschijn
})