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
console.log(JSON.parse(localStorage.getItem('usuariosRegistrado')))
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
   let nombre, usuario, email, telefono, password
   let divRegistroInput = document.querySelectorAll('.divRegistroInput-correcto')
   let check = document.getElementById('check-modal')
   if (divRegistroInput.length === 5) {
      for (let index = 0; index < divRegistroInput.length; index++) {
         if (divRegistroInput[index].children[0].name === "nombreCompleto") {
           nombre = divRegistroInput[index].children[0].value
         }
         if (divRegistroInput[index].children[0].name === "usuario") {
           usuario = divRegistroInput[index].children[0].value
         }
         if (divRegistroInput[index].children[0].name === "email") {
           email= divRegistroInput[index].children[0].value
         }
         if (divRegistroInput[index].children[0].name === "telefono") {
           telefono = divRegistroInput[index].children[0].value
         }
         if (divRegistroInput[index].children[0].name === "password") {
           password = divRegistroInput[index].children[0].value
         }
     }
     nuevoUsuario = new nUsuario(nombre, usuario, email, telefono, password)
     //verifica si existe usuarios en el local y si devuele distinto de null trae los datos e inserta el nuevo usuario
     let aceptarModal = document.getElementById('lblAceptarModal')
     if (JSON.parse(localStorage.getItem('usuariosRegistrado')) === null) {
        usuariosRegistrado.push(nuevoUsuario)
        guardarDatos()
        check.checked = true;
        aceptarModal.addEventListener('click', ()=>{
         window.location.reload()
        })
     }else{
        for (let index = 0; index < JSON.parse(localStorage.getItem('usuariosRegistrado')).length; index++) {
           usuariosRegistrado.push( JSON.parse(localStorage.getItem('usuariosRegistrado'))[index])
        }
        usuariosRegistrado.push(nuevoUsuario)
        guardarDatos()
        check.checked = true;
        aceptarModal.addEventListener('click', ()=>{
         window.location.reload()
        })
     }
   }else{pError = document.getElementsByClassName('errorRegistro')[0]
         pError.style.display = "block"
   
}
})
//Expresiones para los datos del los inputs
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-\s]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^[\+\d]{7,14}$/ // 7 a 14 numeros.
}
//Funcion Validar datos del Input
const validarDatos = (e) => {
   pError = document.getElementsByClassName('errorRegistro')[0]
         pError.style.display = "none"
	switch (e.target.name) {
		case "usuario":
         if (e.target.value !== "") {
            validarCampo(expresiones.usuario, e.target, 'usuario');
         }else {
            e.target.parentElement.classList.remove('divRegistroInput-correcto')
            e.target.parentElement.classList.remove('divRegistroInput-incorrecto')
         }
		break;
		case "nombreCompleto":
         if (e.target.value !== "") {
            validarCampo(expresiones.nombre, e.target, 'nombreCompleto');
         }else {
            e.target.parentElement.classList.remove('divRegistroInput-correcto')
            e.target.parentElement.classList.remove('divRegistroInput-incorrecto')
         }
		break;
		case "password":
         if (e.target.value !== "") {
            validarCampo(expresiones.password, e.target, 'password');
         }else {
            e.target.parentElement.classList.remove('divRegistroInput-correcto')
            e.target.parentElement.classList.remove('divRegistroInput-incorrecto')
         }
		break;
		case "email":
         if (e.target.value !== "") {
            validarCampo(expresiones.correo, e.target, 'email');
         }else {
            e.target.parentElement.classList.remove('divRegistroInput-correcto')
            e.target.parentElement.classList.remove('divRegistroInput-incorrecto')
         }
		break;
		case "telefono":
         if (e.target.value !== "") {
            validarCampo(expresiones.telefono, e.target, 'telefono');
         }else {
            e.target.parentElement.classList.remove('divRegistroInput-correcto')
            e.target.parentElement.classList.remove('divRegistroInput-incorrecto')
         }
		break;
	}
}
//Funcion Validar el campo si los datos cumplen con los requisitos
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementsByClassName(`formRegistroinput${campo}`)[0].parentElement.classList.remove('divRegistroInput-incorrecto');
     document.getElementsByClassName(`formRegistroinput${campo}`)[0].parentElement.classList.add('divRegistroInput-correcto');
		document.getElementsByClassName(`formRegistroinput${campo}`)[0].parentElement.children[1].classList.add('fa-check-circle');
		document.getElementsByClassName(`formRegistroinput${campo}`)[0].parentElement.children[1].classList.remove('fa-times-circle');
	} else {
		document.getElementsByClassName(`formRegistroinput${campo}`)[0].parentElement.classList.add('divRegistroInput-incorrecto');
		document.getElementsByClassName(`formRegistroinput${campo}`)[0].parentElement.classList.remove('divRegistroInput-correcto');
		document.getElementsByClassName(`formRegistroinput${campo}`)[0].parentElement.children[1].classList.add('fa-times-circle');
		document.getElementsByClassName(`formRegistroinput${campo}`)[0].parentElement.children[1].classList.remove('fa-check-circle');
	}
}
//Capturar el input que esta realizando el evento(Keyup y blur)
var inputRegistro = document.querySelectorAll('#formRegistro input')
inputRegistro.forEach((input) => {
	input.addEventListener('keyup', validarDatos);
	input.addEventListener('blur', validarDatos);
});

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
 
