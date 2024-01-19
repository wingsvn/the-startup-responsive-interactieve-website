//hiermee selecteer ik het elementen waar na een interactie moet plaatsvinden
const hamburger = document.querySelector('.hamburger');
//console.log("hamburger")

const nav = document.querySelector('.nav-menu');
//console.log("nav")

//hier voeg ik een event toe aan een element en koppel ik de actie die moet plaatsvinden
hamburger.addEventListener('click', function(){
console.log("click")

    nav.classList.toggle('active') // hiermee komt de navigatie-links te voorschijn
});

