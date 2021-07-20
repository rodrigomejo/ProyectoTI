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
var categorias= ['Panaderia', 'Venta de ropa', 'Herreria']
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
//Construir Barra de busqueda
function constructorBarraBusqueda() {
   let header = document.getElementById('header');
   let divCategoriasBusqueda = document.createElement('div');
      divCategoriasBusqueda.classList.add('contenedorCategoriasBuscar');
   let inputCategorias = document.createElement('input');
      inputCategorias.setAttribute('type','checkbox');
      inputCategorias.setAttribute('id','check');
   let labelCategorias = document.createElement('label');
      labelCategorias.setAttribute('for','check');
      labelCategorias.classList.add('icon-menu');
      labelCategorias.innerText = 'CATEGORIAS'
   let divContenedorBuscar = document.createElement('div');
      divContenedorBuscar.classList.add('contenedorBuscar');
   let inputBuscar = document.createElement('input');
      inputBuscar.setAttribute('type','search');
      inputBuscar.setAttribute('id','search');
      inputBuscar.setAttribute('placeholder','BUSCAR');
   let btnBuscar = document.createElement('button');
      btnBuscar.classList.add('icon');
   let iBuscar = document.createElement('i');
      iBuscar.classList.add('fa', 'fa-search')
   btnBuscar.appendChild(iBuscar);
   divContenedorBuscar.appendChild(inputBuscar);
   divContenedorBuscar.appendChild(btnBuscar);
   let nav = document.createElement('nav');
      nav.classList.add('categorias');
   let ulnav = document.createElement('ul');
      ulnav.setAttribute('id', 'ulnav')
   nav.appendChild(ulnav);

   divCategoriasBusqueda.appendChild(inputCategorias);
   divCategoriasBusqueda.appendChild(labelCategorias);
   divCategoriasBusqueda.appendChild(divContenedorBuscar);
   divCategoriasBusqueda.appendChild(nav);
   header.appendChild(divCategoriasBusqueda);
   categoria(categorias)

}
constructorBarraBusqueda()
//Cargar datos de las categorias
function categoria(categorias){
  
   categorias.forEach(element => {
      let ulNav = document.getElementById('ulnav');
      let linav = document.createElement('li');
      linav.innerText= element;
      ulNav.appendChild(linav);
   })
}
var emprendimientos =[];
//Cargar los emprendimientos guardados
function verificarConCarrito(){
   let e = JSON.parse(localStorage.getItem('Emprendimientos'));
   if (e !== null) {
       if (e.length !== 0) {
           for (let index = 0; index < e.length; index++) {
               emprendimientos.push(e[index]);  
           }
           generadorCard(emprendimientos);
       }   
   }
}
verificarConCarrito();
function generadorCard(emprendimientos) {
   let contenedorCardPrincipal = document.getElementById("contenedorCardPrincipal");
   emprendimientos.forEach(element => {

       let divConCard = document.createElement('div');
       divConCard.className = 'contenedorCard';

      let divCard = document.createElement('div');
       divCard.className = 'card';

      let divcardFront = document.createElement('div');
       divcardFront.className = 'cardFront';

      let divCuerpoCardFront = document.createElement('div');
       divCuerpoCardFront.className = 'cuerpoCardFront';

      let imgCuerpoCardFont = document.createElement('img');
     
          imgCuerpoCardFont.setAttribute('src', element.imagenes[0]);

       let H2cuerpoCardFront = document.createElement('h2');
       H2cuerpoCardFront.innerText = element.nombre;
       divCuerpoCardFront.appendChild(imgCuerpoCardFont);
       divCuerpoCardFront.appendChild(H2cuerpoCardFront);
       divcardFront.appendChild(divCuerpoCardFront);

       let divcardBack = document.createElement('div');
       divcardBack.className = 'cardBack';

      let divCuerpoCardBack = document.createElement('div');
      divCuerpoCardBack.className = 'cuerpoCardBack';

       let H2cuerpoCardBack = document.createElement('h2');
       H2cuerpoCardBack.innerText = element.nombre;

       let PcuerpoCardBack = document.createElement('p');
       PcuerpoCardBack.innerText = element.descripcion;

       let inputcuerpoCardBack = document.createElement('input')
         inputcuerpoCardBack.setAttribute('type', "button");
         inputcuerpoCardBack.setAttribute('value', "Leer Más");

         divCuerpoCardBack.appendChild(H2cuerpoCardBack);
         divCuerpoCardBack.appendChild(PcuerpoCardBack);
         divCuerpoCardBack.appendChild(inputcuerpoCardBack);
         divcardBack.appendChild(divCuerpoCardBack);

         divCard.appendChild(divcardFront);
         divCard.appendChild(divcardBack);

         divConCard.appendChild(divCard);
         contenedorCardPrincipal.appendChild(divConCard);
   });

}
