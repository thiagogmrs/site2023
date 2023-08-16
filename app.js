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

function showMenu(){
   show.classList.toggle('ds-flex');
}


menuHamburguer.addEventListener('click', showMenu);


menuLinks.forEach((item) =>{
   item.addEventListener('click', remover);
});     

function remover(){
  show.classList.remove('ds-flex');
  menuHamburguer.checked = false;     
}
