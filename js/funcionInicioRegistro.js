//Eventos 
document.getElementById("btnRegistro").addEventListener("click", registro);
document.getElementById("btnLogin").addEventListener("click", login);

//Variables
var contenedorLogin_Registro = document.querySelector(".contenedorLogin_Registro");
var formLogin = document.querySelector(".formLogin");
var formRegistro = document.querySelector(".formRegistro");
var cajaTraseraLogin = document.querySelector(".cajaTraseraLogin");
var cajaTraseraRegistro = document.querySelector(".cajaTraseraRegistro");
var contenedorLoginRegistroF = document.querySelector(".contenedorLogin_Registro form");



//Formulario inicio de sesion-Registro
function registro(){

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
 
