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
const tituloAcordion = document.querySelectorAll('.dl-contain dt');
const contentAcordion = document.querySelectorAll('.dl-contain dd')
contentAcordion[0].classList.add('ativo');

tituloAcordion.forEach((titulo, index) =>{
  titulo.addEventListener('click', ()=>{
    openContent(index);
  })
})

function openContent(index){
  contentAcordion.forEach((contentItem) =>{
    contentItem.classList.remove('ativo');
  });
  contentAcordion[index].classList.add('ativo');
};

//JSnumbers

const tempo_intervalo = 4; //ms -> define a velocidade da animação
const tempo = 2000; //ms -> define o tempo total da animaçao

$('.counter-up').each(function() {  
  let count_to = parseInt($(this).data('countTo'));
  let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
  let incremento = count_to / intervalos; //quanto cada contador deve aumentar
  let valor = 0;
  let el = $(this);
  
  let timer = setInterval(function() {
    if (valor >= count_to){ //se já contou tudo tem de parar o timer
      valor = count_to;
      clearInterval(timer);
    }
    
    let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    el.text(texto);
    valor += incremento;      
  }, tempo_intervalo);
});
  