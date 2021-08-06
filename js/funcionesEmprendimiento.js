const datosNav=[
   {
   texto: "INICIO",
   link: "/index.html",
   sesionOff: true,
   sesionOn: true 
   },
   {
      texto: "EMPRENDIMIENTOS",
      link: "/emprendimientos.html",
      sesionOff: true,
      sesionOn: true 
   },
   {
      texto: "NOMBRE USUARIO",
      link: "/perfilUsuario.html",
      sesionOff: false,
      sesionOn: true 
   
   },
   {
      texto: "INICIAR SESION",
      link: "/inicioRegistro.html",
      sesionOff: true,
      sesionOn: false 
   }
]
//Constructor Header 
function constructorHeader(){
   let header = document.getElementById('header');
   let divContenedorHeader = document.createElement('div');
      divContenedorHeader.classList.add('contenedorHeader');
   let divLogo = document.createElement('div');
      divLogo.classList.add('logo');
   let imgLogo = document.createElement('img');
      imgLogo.setAttribute('src','./img/2103622.png');
      divLogo.appendChild(imgLogo);
   let divContenedornav = document.createElement('div');
      divContenedornav.classList.add('contenedorNav');
   let nav = document.createElement('nav');
      nav.setAttribute('id', 'nav');
   divContenedornav.appendChild(nav);
   divContenedorHeader.appendChild(divLogo);
   divContenedorHeader.appendChild(divContenedornav);
   header.appendChild(divContenedorHeader);

   generarNav(datosNav);



}
constructorHeader()
//Funcion verificar si hay una sesion iniciada 
function generarNav(datos) {
   let sesion = JSON.parse(localStorage.getItem('sesion'))
   if (sesion !== null) {
      let barraNav = datos.filter(function(element) {
         return element.sesionOn === true
     });
     constructorNav(barraNav)
   }else{
      let barraNav = datos.filter(function(element) {
         return element.sesionOff === true
     });
     constructorNav(barraNav)
   }
}
function constructorNav(barraNav) {
 let nav = document.getElementById('nav');
 let navUl = document.createElement('ul');
 for (let index = 0; index < barraNav.length; index++) {
      let linav = document.createElement('li');
      let aNav = document.createElement('a');
      aNav.setAttribute('href', barraNav[index].link)
      aNav.innerText = barraNav[index].texto
      linav.appendChild(aNav)
      navUl.appendChild(linav)
   }
   nav.appendChild(navUl);
   aselect = nav.children[0].getElementsByTagName('li')[1].children[0]
   aselect.classList.add("select")
   let sesion = JSON.parse(localStorage.getItem('sesion'))
   console.log(sesion)
   if (sesion !== null) {
      aInicioUsuario = nav.children[0].getElementsByTagName('li')[2].children
      liInicioUsuario = nav.children[0].getElementsByTagName('li')[2]
      aInicioUsuario[0].innerText = sesion.nombre
      liInicioUsuario.setAttribute('dataSet', sesion.id)

   }
   
} 

const carusel = document.querySelector("#carusel");
let caruselItem = document.querySelectorAll(".caruselItem");
let caruselItemLast = caruselItem[caruselItem.length -1];

carusel.insertAdjacentElement('afterbegin', caruselItemLast);

document.querySelector("#caruselBtnAdelante").addEventListener('click', ()=>{
   let caruselItemFirst = document.querySelectorAll(".caruselItem")[0];
   carusel.style.marginLeft = "-200%";
   carusel.style.transition = "all 0.5s";
   setTimeout(() => {
      carusel.style.transition = "none";
      carusel.insertAdjacentElement('beforeend',caruselItemFirst)
      carusel.style.marginLeft = "-100%";
   }, 500);
})

document.querySelector("#caruselBtnAtras").addEventListener('click', ()=>{
   let caruselItem = document.querySelectorAll(".caruselItem");
let caruselItemLast = caruselItem[caruselItem.length -1];
   carusel.style.marginLeft = "0%";
   carusel.style.transition = "all 0.5s";
   setTimeout(() => {
      carusel.style.transition = "none";
      carusel.insertAdjacentElement('afterbegin',caruselItemLast)
      carusel.style.marginLeft = "-100%";
   }, 500);
})