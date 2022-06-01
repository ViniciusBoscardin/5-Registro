var urlAtual = window.location.pathname; 

var setNumber = urlAtual === '/index.html' ? 710 : 390 
function fadeNav(){  
  var offset = getScrollXY();
  //Se offset for maior que 0, set opacity to ..., se não set to 1
  offset[1] > setNumber ? setNavOpacity(0) : setNavOpacity(1.0); 


}

function setNavOpacity(newOpacity){
  var navBar = document.getElementById("header_bar");
  navBar.style.opacity = newOpacity;
 var navMob = document.getElementById("navMobile");
  navMob.style.opacity = newOpacity;
}

function getScrollXY() {
  var scrOfX = 0, scrOfY = 0;
if( typeof( window.pageYOffset ) == 'number' ) {
  //Netscape compliant
  scrOfY = window.pageYOffset;
  scrOfX = window.pageXOffset;
} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
  //DOM compliant
  scrOfY = document.body.scrollTop;
  scrOfX = document.body.scrollLeft;
} else if( document.documentElement && ( document.documentElement.scrollLeft ||     
  document.documentElement.scrollTop ) ) {
  //IE6 standards compliant mode
  scrOfY = document.documentElement.scrollTop;
  scrOfX = document.documentElement.scrollLeft;
}

  return [ scrOfX, scrOfY ];
}



// //Scroll-Reveal 

// window.sr = ScrollReveal ({ reset: true});
// sr.reveal('.texto-foto', {
//   rotate: {x:0, y:80, z:0},
//   duration: 1000
// });
// sr.reveal('.section1', {duration: 1000});
// sr.reveal('.prazos-legais', {duration: 1000});
// sr.reveal('.contato', {duration: 1000});



// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function abrirModal() {
  setTimeout(() => {
    modal.style.display = "block";
     
  }, 3000)

}

// When the user clicks on <span> (x), close the modal

if(urlAtual === '/index.html')
   {span.onclick = function() {
    modal.style.display = "none";
  }}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



/* MAPS */

function inicializar() {
  var coordenadas = {lat: -25.44312565416355, lng: -49.272782430444416};
  
  var mapa = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 15,
    center: coordenadas 
  });

  var marker = new google.maps.Marker({
    position: coordenadas,
    map: mapa,
    title: 'Meu marcador'
  });
}



// -------------MENU HAMBURGUER----------------
   const menuMobile = document.getElementById('menuMobile');
   
   const navMobile = document.getElementById('navMobile');
   menuMobile.addEventListener('click', openMenu);

 function openMenu() {
   
         menuMobile.classList.toggle('on');
       navMobile.classList.toggle('on');
   }

