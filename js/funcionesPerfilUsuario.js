const datosNav=[
   {
   texto: "INICIO",
   link: "index.php",
   sesionOff: true,
   sesionOn: true 
   },
   {
      texto: "EMPRENDIMIENTOS",
      link: "emprendimientos.php",
      sesionOff: true,
      sesionOn: true 
   },
   {
      texto: "NOMBRE USUARIO",
      link: "perfilUsuario.php",
      sesionOff: false,
      sesionOn: true 
   
   },
   {
      texto: "INICIAR SESION",
      link: "inicioRegistro.php",
      sesionOff: true,
      sesionOn: false 
   }
]
const emprendimientos=[];
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
//Funcion Verificar si hay una sesion iniciada 
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
   liselect = nav.children[0].getElementsByTagName('li')[2]
   liselect.classList.add("select")
   let sesion = JSON.parse(localStorage.getItem('sesion'))
   if (sesion !== null) {
      let liInicioUsuario = nav.children[0].getElementsByTagName('li')[2]
      liInicioUsuario.innerText = sesion.nombre
      liInicioUsuario.setAttribute('dataSet', sesion.id)
      let h3usuario = document.getElementsByClassName('divImgUsuario')[0].children[1]
         h3usuario.textContent= sesion.nombre
      console.log(document.getElementsByClassName('divImgUsuario'))
   }
} 
var categorias= ['Elige una opción ','Panaderia', 'Venta de ropa', 'Herreria']

//Construir select categorias
function construirSelectCategorias(datos){
   var select = document.getElementById('selectCategorias');
   for (let index = 0; index < datos.length; index++) {
      let option = document.createElement('option');
      option.setAttribute('value',index)
      option.innerText= datos[index];
      if (index=== 0) {
         option.setAttribute('selected','')
      }
      select.appendChild(option);
   }
}
construirSelectCategorias(categorias);
//Funcion capturar el valor del select 
document.getElementById('btnAgregar').addEventListener('click', ()=>{
   var select = document.getElementById('selectCategorias');
   var divcategorias = document.getElementsByClassName('divCategoriasP');
   if (select.value != 0) {
      let pcategorias = document.createElement('p');
      pcategorias.classList.add('categoriaP');
      pcategorias.innerText=select.children[select.value].textContent;
      divcategorias[0].appendChild(pcategorias);
      
      select.removeChild(select.children[select.value])
   }
})
//Capturar el input que realiza el evento change
function capturarInput(){
   var file =document.querySelectorAll('[type="file"]')
   file.forEach((accion) => {
      accion.addEventListener('change', pintarImg);
   });
}
capturarInput();
// pintar imagen 
function pintarImg(evt) {
   var files = evt.target.files;
   var reader = new FileReader();
   reader.onload = function(e) {
      var divImagen = evt.path[1];
      if (divImagen.getElementsByTagName('img').length === 0) {
         let imgemprendimiento = document.createElement('img');
         imgemprendimiento.setAttribute('src', e.target.result )
         divImagen.appendChild(imgemprendimiento);
         divImagen.style.background = 'none'; 
      }else{
         let imgemprendimiento = divImagen.getElementsByTagName('img')[0];
         imgemprendimiento.setAttribute('src', e.target.result)
      }
   };
   reader.readAsDataURL(files[0]);
}

//constructor de objeto de emprendimiento
function emprendimiento(nombre,descripcion,categoria,imagenes,direccion,telefono){
   this.nombre=nombre;
   this.descripcion=descripcion;
   this.categoria=categoria;
   this.imagenes = imagenes
   this.direccion=direccion;
   this.telefono=telefono;
   if (JSON.parse(localStorage.getItem('Emprendimientos')) === null) {
      this.id=1;
   }else{
      this.id = (1 +(JSON.parse(localStorage.getItem('Emprendimientos')).length ))
   }
}
//Capturar los datos del emprendimiento
document.getElementById("btnAgregarEmprendimiento").addEventListener('click', ()=>{
   var categoriasp = document.getElementsByClassName('categoriaP');
   var nombre, direccion, telefono;
   var categoria= [];
    for (let index = 0; index < categoriasp.length; index++) {
         categoria[index] =categoriasp[index].textContent
      }
    let inputDatos = document.querySelectorAll('[type="text"]')
    inputDatos.forEach(element => {
      if (element.name=== 'nombre') {
         if (element.value !== '') {
               nombre=element.value
         } else { alert ("el nombre no puede estar vacio")}
      } else if (element.name=== 'direccion') {
         if (element.value !== '') {
               direccion= element.value
         } else { alert ("la direccion no puede estar vacia")}
      } else {
         if (element.value !== '') {
               telefono= element.value
         } else { alert ("El telefono no puede estar vacio")}  
      }
    });
     let ImgEmprendimiento = document.getElementsByClassName('divImgEmprendimiento')[0].getElementsByTagName('img')
     var imagenes =[];
      if (ImgEmprendimiento.length !== 0) {
         for (let index = 0; index < ImgEmprendimiento.length; index++) {
            imagenes[index]= ImgEmprendimiento[index].src  
         }
      }

    let descripcion = (document.querySelector('[name="descripcion"]').value !=='')? document.querySelector('[name="descripcion"]').value : alert ("El telefono no puede estar vacio")
   nuevoEmprendimiento = new emprendimiento(nombre,descripcion,categoria,imagenes,direccion,telefono);
   verificarEmprendimientos(nuevoEmprendimiento)
})

//verificar si hay emprendimientos guardados
function verificarEmprendimientos() {
   if (JSON.parse(localStorage.getItem('Emprendimientos')) === null) {
      emprendimientos.push(nuevoEmprendimiento)
      guardarDatos()
      alert("Emprendimiento agregado con exito")
      location.reload();
   }else{
      for (let index = 0; index < JSON.parse(localStorage.getItem('Emprendimientos')).length; index++) {
         emprendimientos.push( JSON.parse(localStorage.getItem('Emprendimientos'))[index])
      }
      emprendimientos.push(nuevoEmprendimiento)
      guardarDatos()
      alert("Emprendimiento agregado con exito")
      location.reload();
   }
   
}
//Funcion guardar emprendimiento en el local
function guardarDatos(){
   localStorage.setItem('Emprendimientos', JSON.stringify(emprendimientos));
};