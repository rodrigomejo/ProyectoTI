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
   aselect = nav.children[0].getElementsByTagName('li')[2].children[0]
   aselect.classList.add("select")
   let sesion = JSON.parse(localStorage.getItem('sesion'))
   if (sesion !== null) {
      aInicioUsuario = nav.children[0].getElementsByTagName('li')[2].children
      liInicioUsuario = nav.children[0].getElementsByTagName('li')[2]
      aInicioUsuario[0].innerText = sesion.nombre
      liInicioUsuario.setAttribute('dataSet', sesion.id)
   }
} 
const usuariosRegistrado=[];
//constructor de objeto de emprendimiento
function nUsuario(nombre,usuario,email,telefono,password){
   this.nombre=nombre;
   this.usuario=usuario;
   this.email=email;
   this.telefono = telefono
   this.password=password;
   if (JSON.parse(localStorage.getItem('usuariosRegistrado')) === null) {
      this.id=1;
   }else{
      this.id = (1 +(JSON.parse(localStorage.getItem('usuariosRegistrado')).length ))
   }
}
//Funcion registro
var btnRegistro = document.getElementById('btnRegistroForm')
btnRegistro.addEventListener('click', function registro(e){
   e.preventDefault()
   var inputRegistro = document.getElementById('formRegistro').getElementsByTagName('input')
   let nombre, usuario, email, telefono, password
   for (let index = 0; index < inputRegistro.length; index++) {
         if (inputRegistro[index].name=== 'nombreCompleto') {
        
            if (inputRegistro[index].value !== '') {
                  nombre=inputRegistro[index].value
            } else { alert ("El nombre no puede estar vacio")}
   
         } else if (inputRegistro[index].name === 'usuario') {
   
            if (inputRegistro[index].value !== '') {
               usuario=inputRegistro[index].value
            } else { alert ("El usuario no puede estar vacio")}
   
         } else if (inputRegistro[index].name=== 'email') {
   
            if (inputRegistro[index].value !== '') {
                  email= inputRegistro[index].value
            } else { alert ("El correo  no puede estar vacia")}
   
         } else if (inputRegistro[index].name ==='telefono') {
   
            if (inputRegistro[index].value !== '') {
               telefono= inputRegistro[index].value
            } else { alert ("El telefono no puede estar vacio")}
            
         } else if (inputRegistro[index].name === 'password') {
   
            if (inputRegistro[index].value !== '') {
               password= inputRegistro[index].value
             } else { alert ("La contraseña no puede estar vacio")}
         }
   }
   nuevoUsuario = new nUsuario(nombre, usuario, email, telefono, password)
   //verifica si existe usuarios en el local y si devuele distinto de null trae los datos e inserta el nuevo usuario
   if (JSON.parse(localStorage.getItem('usuariosRegistrado')) === null) {
      usuariosRegistrado.push(nuevoUsuario)
      guardarDatos()
      alert("Usuario registrado con exito")
      location.reload();
   }else{
      for (let index = 0; index < JSON.parse(localStorage.getItem('usuariosRegistrado')).length; index++) {
         usuariosRegistrado.push( JSON.parse(localStorage.getItem('usuariosRegistrado'))[index])
      }
      usuariosRegistrado.push(nuevoUsuario)
      guardarDatos()
      alert("Usuario registrado con exito")
      location.reload();
   }
})
//funcion guardar usuarios en el localstorage
function guardarDatos(){
   localStorage.setItem('usuariosRegistrado', JSON.stringify(usuariosRegistrado));
}
//Funcion inicio de sesion 
btnInicioForm = document.getElementById('btnInicioForm')
btnInicioForm.addEventListener('click', function iniciarSesion(e){
   e.preventDefault()
   var inputFormInicio = document.getElementById('formLogin').getElementsByTagName('input')
   let password, email;
   for (let index = 0; index < inputFormInicio.length; index++) {
      if (inputFormInicio[index].name=== 'email') {
        
         if (inputFormInicio[index].value !== '') {
               email=inputFormInicio[index].value
         } else { alert ("El correo no puede estar vacio")}

      } else if (inputFormInicio[index].name === 'password') {

         if (inputFormInicio[index].value !== '') {
            password=inputFormInicio[index].value
         } else { alert ("La contraseña  no puede estar vacia")}

      }
      
   }
   let usuarioValido = validarUsuario(email, password)
   if (usuarioValido !== undefined) {
         localStorage.setItem('sesion', JSON.stringify(usuarioValido));
         window.location.href ="./perfilUsuario.html" 
   }else {
         alert("Correo y/o contraseña incorrecta")
   }
}) 
// Validar si el usuario existe
function validarUsuario(email, password){
   let usuarios = JSON.parse(localStorage.getItem('usuariosRegistrado'))

   for (let index = 0; index < usuarios.length; index++) {
      if (usuarios[index].email === email){
         if (usuarios[index].password === password) {
           return usuarios[index]
         }
      }
   }
}
//Eventos 
document.getElementById("btnRegistro").addEventListener("click", registroForm);
document.getElementById("btnLogin").addEventListener("click", login);
//Variables
var contenedorLogin_Registro = document.querySelector(".contenedorLogin_Registro");
var formLogin = document.querySelector(".formLogin");
var formRegistro = document.querySelector(".formRegistro");
var cajaTraseraLogin = document.querySelector(".cajaTraseraLogin");
var cajaTraseraRegistro = document.querySelector(".cajaTraseraRegistro");
var contenedorLoginRegistroF = document.querySelector(".contenedorLogin_Registro form");
//Formulario inicio de sesion-Registro
function registroForm(){

      if (window.innerWidth > 850 ){
         formRegistro.style.display = "block";
         formLogin.style.display = "none";
         contenedorLogin_Registro.style.left = "410px";
         cajaTraseraRegistro.style.opacity = "0";
         cajaTraseraLogin.style.opacity = "1";
      } else {
         formRegistro.style.display = "block";
         formLogin.style.display = "none";
         contenedorLogin_Registro.style.left = "0px";
         cajaTraseraRegistro.style.display = "none";
         cajaTraseraLogin.style.display = "block";
         cajaTraseraLogin.style.opacity = "1";
      }
}

function login(){

   if (window.innerWidth >850){
      formRegistro.style.display = "none";
      formLogin.style.display = "block";
      contenedorLogin_Registro.style.left = "0px";
      cajaTraseraRegistro.style.opacity = "1";
      cajaTraseraLogin.style.opacity = "0";
   } else{
      formRegistro.style.display = "none";
      formLogin.style.display = "block";
      contenedorLogin_Registro.style.left = "0px";
      cajaTraseraRegistro.style.display = "block";
      cajaTraseraLogin.style.display = "none";
   }
   }
 
