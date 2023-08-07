let btnmobile = document.querySelector("#btn-mobile");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnmobile.style.display = "flex"; 
  } else {
    btnmobile.style.display = "none"; 
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function desk(){
  const data = new Date();
  const hours = data.getHours();
  const day = data.getDay();
  const ponto = document.querySelector('.point');
  const textOpen = document.querySelector('.textOpen');
  if(day >= 1 && day <= 5 && hours >= 09 && hours <= 17){
     ponto.style.background="#00bb2d";
     textOpen.innerText = 'Disponível';
}else{
     ponto.style.background="#ff0000";
     textOpen.innerText = 'Fechado';
}   
};

//menu-hamburguer


const menuHamburguer = document.querySelector('[data-menu="hamburguer"]');
let show = document.querySelector('[data-menu="show"]');
const menuLinks = document.querySelectorAll('.menu-introducao a');
console.log(menuLinks);

function showMenu(){
   show.classList.toggle('ds-flex');
}


menuHamburguer.addEventListener('click', showMenu);


menuLinks.forEach((item) =>{
   item.addEventListener('click', remover);
   console.log(item);
});     

function remover(){
  show.classList.remove('ds-flex');
  menuHamburguer.checked = false;     
}

//instagram posts
(function(d, s, id) { var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js); }(document, "script", "EmbedSocialHashtagScript")); 